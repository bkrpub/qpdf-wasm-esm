#!/usr/bin/env node

// this block is required to be able to load qpdf.mjs
// maybe there is a better way
import { createRequire } from 'module';
globalThis.__filename = import.meta.filename
globalThis.__dirname = import.meta.dirname
globalThis.require = createRequire(import.meta.url);

import path from 'path'
import fs from 'fs/promises'
import qpdf from './dist/qpdf.mjs'

async function callMain(args) {
  const mod = await qpdf();
  const working = "/working";
  mod.FS.mkdir(working);
  mod.FS.mount(mod.NODEFS, { root: path.join(__dirname, 'tests') }, working);
  mod.FS.chdir(working);
  return mod.callMain(args);
} 	 

(async () => {

    await fs.mkdir(path.join(__dirname, "tests", "out"), { recursive: true });

    const exitStatus = await callMain([
      "assets/sample.pdf",
      "--pages",
      ".",
      "1-2",
      "--",
      "out/removed.pdf",
    ]);

})();


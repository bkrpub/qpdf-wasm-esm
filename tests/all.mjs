import { createRequire } from 'module';

globalThis.__filename = import.meta.filename
globalThis.__dirname = import.meta.dirname
globalThis.require = createRequire(import.meta.url);

import assert from 'assert';
import path from 'path'
import fs from 'fs/promises'
import qpdf from '../dist/qpdf.mjs'

before(async function () {
  process.argv[1] = 'qpdf' // avoid confusing qpdf output posing as mocha.ja
  await fs.mkdir(path.join(__dirname, "out"), { recursive: true });
});

describe("all", function () {
  it("should remove pdf pages", async function () {
    const exitStatus = await callMain([
      "assets/sample.pdf",
      "--pages",
      ".",
      "1-2",
      "--",
      "out/removed.pdf",
    ]);
    assert.equal(exitStatus, 0);
  });

  // Ensure this doesn't call `process.exit`
  it("should exit properly on error", async function () {
//    const exitStatus = await callMain(["unknown-subcommand"]);

    const exitStatus = await callMain(["--version"]);
assert.equal(exitStatus, 2);
  });
});

async function callMain(args) {
  const mod = await qpdf();
  const working = "/working";
  mod.FS.mkdir(working);
  mod.FS.mount(mod.NODEFS, { root: __dirname }, working);
  mod.FS.chdir(working);
  return mod.callMain(args);
}




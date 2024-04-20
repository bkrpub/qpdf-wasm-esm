# qpdf-wasm-esm-embedded

This is a fork of [qpdf-wasm-esm](https://github.com/kairi003/qpdf-wasm-esm/) that uses ESM instead of CommonJS and is compiled to a single file (wasm embedded).

It is adjusted for the browser and has the following differences due to changes in build options:
- It is an ES module instead of a CommonJS module.
- It names the exported default function `QPDF` instead of `Module`(default name).
- It build `qpdf.mjs` instead of `qpdf.js`.
- It accepts overloading of the `print` and `printErr` methods.
- It is a single file (wasm is embedded in the main mjs)

# Examples

Build with docker (run `./docker_build.sh`) and run see the `tests/test.html`.

---

# qpdf-wasm-esm

`qpdf` compiled to WASM via Emscripten. This doesn't expose the `qpdf` library - just the CLI.

```sh
npm install --save qpdf-wasm-esm-embedded
```

## Examples

See the `tests` directory for examples.

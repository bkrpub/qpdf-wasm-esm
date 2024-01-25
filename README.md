# qpdf-wasm-esm

This is a fork of [qpdf-wasm](https://github.com/jsscheller/qpdf-wasm/) that uses ESM instead of CommonJS.

It is adjusted for the browser and has the following differences due to changes in build options:
- It is an ES module instead of a CommonJS module.
- It names the exported default function `qpdf` instead of `Module`(default name).
- It build `qpdf.mjs` instead of `qpdf.js`.
- It accepts overloading of the `print` and `printErr` methods.

# Examples

Build with docker and run see the `tests/test.html`.

---

# qpdf-wasm

`qpdf` compiled to WASM via Emscripten. This doesn't expose the `qpdf` library - just the CLI.

```sh
npm install --save @jspawn/qpdf-wasm
```

## Examples

See the `tests` directory for examples.

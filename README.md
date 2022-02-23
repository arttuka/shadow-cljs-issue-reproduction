## shadow-cljs-issue-reproduction

This repository demonstrates an issue with shadow-cljs module resolution. Changing to shadow-cljs version 2.16.12 fixes the examples.

### Running MUI example

    npm i
    npm run watch-mui

Then open [http://localhost:9501](http://localhost:9501). This should result in an error in the console: `TypeError: Cannot redefine property: ModalManager`.

### Running simple example

    npm i
    ./link-libs.sh
    npm run watch-simple

Then open [http://localhost:9500](http://localhost:9500). This should result in an error in the console: `TypeError: Cannot redefine property: foo`.

### Faulty require paths in the simple example

```
shadow-cljs-lib-b (package require, CJS)
-> shadow-cljs-lib-a (package require, CJS)
  -> shadow-cljs-lib-a/foo (relative require, CJS)
-> shadow-cljs-lib-a/foo (package require, ESM)  <- this is where the wrong file is loaded
```
Now shadow-cljs-lib-a/foo has been loaded via two paths, one CJS and one ESM.

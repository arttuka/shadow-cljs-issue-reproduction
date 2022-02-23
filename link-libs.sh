#!/bin/bash

set -eux

(
  cd ./lib/shadow-cljs-lib-a
  npm link
)
(
  cd ./lib/shadow-cljs-lib-b
  npm link shadow-cljs-lib-a
  npm link 
)
npm link shadow-cljs-lib-a
npm link shadow-cljs-lib-b

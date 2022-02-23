(ns example.simple
  (:require ["shadow-cljs-lib-b" :as lib]))

(defn ^:export main []
  (js/console.log "lib is" lib))

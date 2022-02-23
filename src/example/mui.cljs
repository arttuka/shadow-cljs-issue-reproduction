(ns example.mui
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            ["@mui/material" :as material]))

(defn button []
  [:> material/Button {:variant :outlined}
   "not working"])

(defn ^:dev/after-load render []
  (rdom/render [button] (js/document.getElementById "app")))

(defn ^:export main []
  (render))

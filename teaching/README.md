# 教學教材

存放教學的 slides，有的使用 mobirise 製作, 有的使用 reveal.js 套件製作的 slides。

## Update reveal.js-4.4.0 and fontawesome 6.x

2022.12.1 更新 reveal.js-4.4.0 及 fontawesome 6.x 版，同時修改目錄結構及相關的設定檔，讓 teaching 目錄內的 slides 較小的變動，修正內容如下：

1. 目錄結構：
    
    * 刪除 /reveal-js, /font-awesome, /highlight-js, /math-katex 目錄
    * font-awesome -> fontawesome6
    * reveal-js -> revealjs
        revealjs ----
                  |---dist
                  |---js
                  |---plugin
                  |---lib(舊的目錄)
    * highlight-js -> highlightjs(highlight themes 檔案)，控制還是由 revealjs/plugin/highlight/highlight.js 檔案。

2. /css/custom4revealjs.css 設定檔
    主要是針對 reveal.css 設定檔的設定值做微調，符合 slides 的版面及其他設定

3. /revealjs/plugin/menu/menu.js 檔案
    修改 1737 行，改成 /fontawesome6/css/all.css
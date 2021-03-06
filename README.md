# Vue Cli 章節資源
- 參考 : https://book.vue.tw/CH3/3-1-vue-cli-introduction.html
- 安裝 ESLint 參考 : https://israynotarray.com/javascript/20210218/4003233584/
- 安裝 Node.js 參考 : Gulp 課程：https://courses.hexschool.com/p/gulp 安裝流程的部分均可直接預覽 (1-3, 1-4)

Nodejs 官方網站連結: https://nodejs.org/en/

## Vue Cli
英文：https://cli.vuejs.org/

中文：https://cli.vuejs.org/zh/guide/

Vue Cli 4.x 同時可建立 Vue 2.x 及 Vue 3.x 的環境，無論你是要開發 2 or 3 都僅需要安裝當前版本的 Vue Cli 即可。

## 其它相關連結
以下為課程中會用到的相關連結

Axios https://github.com/axios/axios

Vue Axios https://www.npmjs.com/package/vue-axios

Github Pages 教學連結 - 59:34 開始
教學影片 : https://www.youtube.com/watch?v=njlABvVRB68

Vue Router https://next.router.vuejs.org/zh/index.html
注意：Vue 3 搭配的 Router 版本在網址中會有 "next" 的字樣，如：router.vuejs.org 則是 Vue 2 版本的路由

Vue Router章節的所有操作紀錄範例：https://github.com/Wcc723/Vue3-Coures-Router-Demo/commits/master
如果需要參考時，請注意 git 排序是逆向的，也可依據 Commit 名稱尋找，找到後可直接透過 hash 文字打開該章節所調整的片段

## CLI 常用指令
通用指令 (Mac, Windows 共用)
Nodejs 版本
node -v

npm 版本
npm -v

安裝cli套件
npm install -g @vue/cli

vue cli版本
vue -V

Windows 上輸入指令出現「因為這個系統上已停用指令碼執行，所以無法載入...」的問題
參考 : https://israynotarray.com/other/20200510/1067127387/


## 課程中運用到的指令
建立專案 vue create {{ 專案名稱 }} ->

Manually select features ->	//手動安裝
- Choose Vue version	//Vue安裝版本
- Babel	//ES6.7.8.9版本編譯成可運行JS
- Router
- Vuex	//狀態管理工具(暫不安裝)
- CSS Pre-processors	//CSS 預處理器
- Linter / Formatter	//檢視程式碼品質工具

-> 3.x (Preview)
-> n (預設)
-> Sass/SCSS (with dart-sass)
-> ESLint + Standard config (建議)   or   ESLint + Airbnb config (細節要求高,課程示範)
-> Lint on save	//存檔進行檢視
-> In dedicated config files	//獨立檔案型式
-> N (詢問是否存設定檔案)

Vue CLI 安裝的版本號為 v4，選擇 Sass/SCSS (with node-sass)。
Vue CLI 安裝的版本號為 v5，只能選擇 Sass/SCSS (with dart-sass) 。

運行 Vue 開發環境 npm run serve

編譯 Production 版本 npm run build

## CLI GUI Install -> vue ui

新增 -> 在此新增新專案

gui_demo + 包管理器 : npm + 初始化git倉庫 -> 手動 ->

- Choose Vue version	//Vue安裝版本
- Babel	//ES6.7.8.9版本編譯成可運行JS
- Router
- CSS Pre-processors	//CSS 預處理器
- Linter / Formatter	//檢視程式碼品質工具

-> 3.x (Preview)
-> n (預設)
-> Sass/SCSS (with dart-sass)
-> ESLint + Airbnb config (細節要求高,課程示範)  or  ESLint + Standard config (建議)
-> Lint on save	//存檔進行檢視
-> 新增專案,不保存預設




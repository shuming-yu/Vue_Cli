# new-product

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

------------------------------------------------------------------------

### 確認 Vue_Cli\new-product

VeeValidate 參考 : https://vee-validate.logaretm.com/v4/

install with npm
npm install vee-validate --save
```

Getting Started -> 左方 Global Validators -> 右方 @vee-validate/rules
or with npm
npm install @vee-validate/rules
```

左方 Localization (i18n) -> 右方 Using @vee-validate/i18n
or with npm
npm install @vee-validate/i18n
```

Vue 報錯誤 : Missing space before function parentheses
參考 : https://www.jianshu.com/p/9081a28c1ac9

-------------------------------------------------------------------------

### 確認 Vue_Cli\new-product

npm run build  ->  產生 dist 檔案  ->  首先可測試開啟 dist 內的 index.html (無資訊,F12跳錯誤)

vue ui  ->  設定  ->  Vue CLI  ->  公開路徑 /dist/  -> 保存修改

確認 dist 檔案下 -> index.html 內的檔案路徑更改為 /dist/js
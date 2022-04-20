import { createApp } from 'vue'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate' // 匯入 vee-validate 主套件
import { required, email, min } from '@vee-validate/rules' // 匯入 vee-validate 相關規則
import { localize, setLocale } from '@vee-validate/i18n' // 匯入多國語系的功能
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json' // 匯入繁體中文語系檔案

import App from './App.vue'
import router from './router'

// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW') // 設定預設語系

const app = createApp(App).use(router)

app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')

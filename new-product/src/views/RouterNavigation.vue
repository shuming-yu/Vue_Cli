<template>
    <button type="button" @click.prevent="getRoute">GetRoute</button>
    <button type="button" @click.prevent="push">Push</button>
    <button type="button" @click.prevent="replace">Replace</button>
    <button type="button" @click.prevent="go">Go</button>
    <hr>
    <button type="button" @click.prevent="addRoute">AddRoute</button>
</template>

<script>
export default {
    methods: {
        /* 包含歷史紀錄 */
        push(){
            //this.$router.push('/newpage/namedView/b2c');
            this.$router.push({
                name: 'about'
            })
        },
        /* 沒有歷史紀錄 */
        replace(){
            this.$router.replace({
                name: 'about'
            })
        },
        /* 操作歷史紀錄 */
        go(){
            // 帶入正整數(往下一頁走) or 負整數(往上一頁走)
            this.$router.go(-1)
        },
        /* 取得常用參數 */
        getRoute(){
            // 取得路由的屬性 : https://next.router.vuejs.org/zh/api/#routelocationnormalized
            // 範例 : this.$route.fullPath (目前網址)
            console.log(this.$route);

            // 呼叫路由的方法 : https://router.vuejs.org/zh/api/#addroute
            // 範例 : this.$router.go(-1) (回到前一頁)
            //console.log(this.$router);
        },
        addRoute(){
            // 方法須帶入物件, 帶入路由表的項目
            // 先測試網址輸入newabout(無顯示頁面),後續點選方法後輸入網址(顯示頁面)
            this.$router.addRoute({
                path: '/newabout',
                name: 'newabout',
                component: () => import('./AboutView.vue')
            })
        },
    },
}
</script>
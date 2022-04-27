<template>
    <div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    /* 路由表定義的id -> router/index.js */
    props: ['id'],
    created() {
        console.log('props', this.id);
        //const seed = '639ea6167e856e32';
        const seed = this.id;
        axios.get(`https://randomuser.me/api/?seed=${seed}`)
            .then( (res) => {
                console.log(res);
            })
    }
}
</script>
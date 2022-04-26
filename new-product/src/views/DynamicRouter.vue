<template>
    <div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created() {
        console.log(this.$route.params.id);
        //const seed = '639ea6167e856e32';
        const seed = this.$route.params.id;
        axios.get(`https://randomuser.me/api/?seed=${seed}`)
            .then( (res) => {
                console.log(res);
            })
    }
}
</script>
<template>
    <div class="app-container">

        <h1>App组件</h1>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>
 
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
                flag : false
            }
        },
        created() {
           this.flag =  this.$route.path == '/home' ? false:true
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        },
        watch:{
            "$route.path" : function (newVal) {
                if (newVal == '/home') {
                    this.flag = false
                } else {
                    this.flag = true
                }
            }
        }
    }
</script>

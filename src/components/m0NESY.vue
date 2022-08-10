<template>
<div>
    <li v-for="item in newslist" :key="item.match_id">
        <p>比赛时间 ： {{item.started_at*1000 | dateFormat}}</p>
        <p>比赛ID ：{{item.match_id}}</p>
        <!-- <p>比赛地图 ：{{mapinfo}}</p> -->
        <a :href="geturl(item.faceit_url)">比赛链接</a>
        <a :href="getdemo(item.match_id)">比赛demo</a>
        
        <button v-on:click="getMap">获取地图</button>
    </li>
</div>
    
</template>
<script>

   var config = {
   method: 'get',
   headers: {//指定响应头
       "Content-Type": "application/json;charset=utf-8",
       "Accept": "application/json",
       authorization:`Bearer 492c776c-ec76-4cf4-8dcc-cc6cab2822f6`
   }
    }
    // const Faceit = require('faceit-js-api')
    export default {
        name: "newslist",
        data(){
            return {
                newslist:[],mapinfo:[]
            }
        },
        created(){
          this.getNewsList()
        },
        methods: {
            getNewsList(){
               this.$http.get('https://open.faceit.com/data/v4/players/93306681-bce6-4369-8c41-e0bdba2597ed/history?game=csgo&offset=0&limit=20',config).then(res => {
                   this.newslist = res.body.items
               })
            },
            getMap(match_id){
                var i
                for(i = 0; i < this.newslist.length;i++){
                    this.$http.get('https://www.faceit.com/zh/csgo/room/1-57f396eb-7fef-4c51-a16f-24fdbd8e280f/scoreboard',config).then(res => {
                        // this.mapinfo[i] = res.body.items
                        console.log(res.body)
                        
                    })
                }
            },
            geturl(url){
                return url.replace("{lang}","zh")
            },
            getdemo(match_id){
                return 'https://demos-europe-west2.faceit-cdn.net/csgo/'+match_id+'-1-1.dem.gz'
            }
        }
    }
</script>
<template>
  <div>
    <div style="display:table;width:100%;height: 500px;background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../../static/img/pic5.jpg');background-size: cover;color: white;text-align: center;margin-top: 0px;-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);">
      <div style="display: table-cell;vertical-align: middle">
        <p style="font-size: xx-large;font-weight: 700;margin-top: 0;">{{article.title}}</p>
        <p>————————————</p>
        <p>{{article.time}}&nbsp;&nbsp;&nbsp;{{article.author}}</p>
      </div>
    </div>
    <div style="width: 80%;margin: auto">
      <div v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data(){
      return{
        article:'',
        id : 0
      }
    },
    methods:{
      getArticle(){
        var that = this
        $.ajax({
          url:"/news/article/" + (that.id).toString(),
          method:"get",
          dataType:"json",
          success:function(res){
            that.article = res
          },
        })
      },
      getId(){
        let ID = this.$route.params.id
        console.log(ID)
        if(ID){
          this.id = ID
        }
      }
    },
    created:function () {
      this.getId()
      this.getArticle()
    }

  }
</script>

<style scoped>

</style>

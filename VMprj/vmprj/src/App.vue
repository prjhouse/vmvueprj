<template>
  <div id="app">
     <transition :name="transitionName" >
        <router-view/>
     </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
       transitionName:""
    }
  },
  watch:{
    //使用watch监听$router的变化
      $route(to,from){
          let a=to.meta.index;
          let b=from.meta.index;
          if(a!=b){
              if(a>b){
              this.transitionName="slide-left"
              }else{
              this.transitionName="slide-right"
              }
          }else{
              this.transitionName="slide-mid"
          }
      }
  }
}
</script>

<style>
body,p,h1,h2,h4,h5,h6,h3,ul,ol,dl,td,dd,input,textarea,option,hr,button,fieldset,legend,figure{margin:0; padding:0;}
a{text-decoration: none; color: #666;}
a:link{color: #666;}
a:hover{color: #333;}
li{list-style: none;}
body{font:14px "微软雅黑";}
img{vertical-align: top;/*display:block;*/ border: none;}
input,area{outline:none;}
i,em{font-style: normal;}
h1,h2,h4,h5,h6,h3,b,strong{font-weight: normal;}
table{border-collapse: collapse;}

.clear:after{content:"."; display: block; clear: both; height: 0; visibility: hidden;}
.fl{float:left;}
.fr{float:right;}

.border0{border:none!important;background: none!important;}
html,body{
  width:100%;
  height: 100%;
}
html{
  font-size: 26.666666vw;
}
body{
  font-size:16px;
}
#app{
  width:100%;
  height: 100%;
}




/* 过度属性的设置 */
.slide-right-enter-active,
.slide-right-leave-active{
   will-change: transform;
   transition: all 300ms linear;
   position: absolute;
}
.slide-left-enter-active,
.slide-left-leave-active{
   will-change: transform;
   transition: all 300ms linear;
   position: absolute;
}
.slide-right-enter{
   transform:translateX(-100%)
}
.slide-left-enter{
  transform:translateX(100%)
}
.slide-mid-enter-active,
.slide-mid-leave-active{
   transition: all 1ms linear;
}
</style>

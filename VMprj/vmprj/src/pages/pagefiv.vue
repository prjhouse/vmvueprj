<template>
  <div id="pagefivbox">
       <ul id="header">
       
       </ul>
       <div id="showbox">

       </div>
       <Footer/>
  </div>
</template>

<script>
import Footer from "../components/wmd/Footer"
export default {
   components:{
       Footer
   }
}
</script>

<style scoped>
#pagefivbox{
    width:100%;
    height:100%;
    background-color:#e3f6e9;
}
#header{
  width:100%;
  height:80px;
  position:absolute;
  top:0px;
  background-color:white;
}
#showbox{
   width:100%;
   position:absolute;
   top:80px;
   bottom:70px;
   overflow: auto;
}
</style>
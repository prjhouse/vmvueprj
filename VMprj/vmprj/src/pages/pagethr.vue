<template>
  <div id="pagethrbox">
       <ul id="header">
          <router-link to="/select" tag="li" class="headerlisty2">五</router-link>
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
#pagethrbox{
    width:100%;
    height:100%;
    background-color:#eae3f6;
}
#header{
  width:100%;
  height:80px;
  position:absolute;
  top:0px;
  background-color:white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
#showbox{
   width:100%;
   position:absolute;
   top:80px;
   bottom:70px;
   overflow: auto;
}
.headerlisty2{
  width:80%;
  height:100%;
  background-color: palegoldenrod;
}
</style>
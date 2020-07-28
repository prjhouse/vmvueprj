<template>
  <div id="pagetwobox">
       <ul id="header">
          <li class="headerlisty1">问医</li>
          <router-link to="/borral" tag="li" class="headerlisty2">五</router-link>
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
#pagetwobox{
    width:100%;
    height:100%;
    background-color:blue;
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
.headerlisty1{
  height: 100%;
  width:60%;
  margin-left:20%;
  background-color: olive;
}
.headerlisty2{
  height: 100%;
  width: 20%;
  background-color: orchid;
}
</style>
<template>
  <div id="pageonebox">
      <ul id="header">
         <router-link to="/adress" tag="li" class="headerlisty1">五</router-link>
         <router-link to="/select" tag="li" class="headerlisty2">五</router-link>
         <router-link to="/borral" tag="li" class="headerlisty3">五</router-link>
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
#pageonebox{
    width:100%;
    height:100%;
    background-color:red;
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
    height:100%;
    width: 30%;
    background-color:antiquewhite;
}
.headerlisty2{
    height:100%;
    width: 50%;
    background-color:gray;
}
.headerlisty3{
    height:100%;
    width: 20%;
    background-color:pink;
}
</style>
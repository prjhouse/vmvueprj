<template>
  <div id="pageforbox">
      <ul id="header">
           <router-link to="/select" tag="li" class="headerlisty2">五</router-link>
           <router-link to="/order" tag="li" class="headerlisty3">五</router-link>
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
#pageforbox{
    width:100%;
    height:100%;
    background-color:#e3eff6;
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
  height: 100%;
  width: 70%;
  margin-left: 15%;
  background-color:pink;
}
.headerlisty3{
  height: 100%;
  width: 15%;
  background-color:orange;
}
</style>
<template>
      <ul id='allviewfoot'>
            <router-link to="/" tag="li">一</router-link>
            <router-link to="/pagetwo" tag="li">二</router-link>
            <router-link to="/pagethr" tag="li">三</router-link>
            <router-link to="/pagefor" tag="li">四</router-link>
            <router-link to="/pagefiv" tag="li">五</router-link>
      </ul>
</template>

<script>
export default {

}
</script>
<style scoped>
 #allviewfoot{
   background-color:gray;
   width:100%;
   height: 70px;
   position:absolute;
   bottom:0px;
   display:flex;
   justify-content: space-around;
   align-items: center;
}
#allviewfoot>li{
    width:20%;
    height:100%;
    text-align: center;
    line-height:70px;
    font-size:20px;
    background-color:aqua;
}
</style>
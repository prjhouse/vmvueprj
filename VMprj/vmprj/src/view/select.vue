<template>
    <div id="header">
      <div @click="()=>{this.$router.go(-1)}">返回</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#header{
    width:100%;
    height:100%;
    background-color: pink;
}
</style>
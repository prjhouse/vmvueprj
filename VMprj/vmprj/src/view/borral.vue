<template>
    <div id="borral">
        <div @click="()=>{this.$router.go(-1)}">返回</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#borral{
    width:100%;
    height:100%;
    background-color: yellow;
}
</style>
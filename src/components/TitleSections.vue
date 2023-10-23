<template>
    <div class="title-section">
        <h1>{{title}}</h1>
        <div class="border-title"></div>
    </div>
</template>
<style scoped>
div.title-section{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
div.title-section h1{
    position: relative;
    box-sizing: border-box;
    background-color: white;
    z-index: 1;
    font-size: 30px;
    padding: 0 7px;
}
div.title-section div.border-title{
    position: absolute;
    width: 250px;
    height: 5px;
    background-color: black;
    z-index: 0;
}
/***THEME DARK**/
.dark div.title-section h1{
    color: #e4e4e7;
    background-color: #666666;
}
.dark div.title-section div.border-title{
    background-color: #e4e4e7;
}
</style>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}
</script>
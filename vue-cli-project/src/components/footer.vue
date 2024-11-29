<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            'copyright': "Copyright 29.11.2024 VUE Lessons"
        }
    }
}

</script>


<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
        color: lightgreen;
        text-align: center;
}
</style>
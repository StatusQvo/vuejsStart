<template>
    <div id="main-root">
        <ul>
			<li v-for="user in appUsers" v-on:click="user.show = !user.show">
				<h2>{{ user.userName }}</h2>
				<h3 v-show="user.show">{{ user.occupation }}</h3>
			</li>
        </ul>
        <button v-on:click="deleteUser">Delete One</button>  
    </div>
</template>

<script>
export default{
    props: {
        appUsers: {
            type: Array,
            required: true,
        }
    },
    data(){
        return {}
    },
    methods: {
        deleteUser(){
            this.appUsers.pop();
        }
    }
}

</script>

<style scoped>
#main-root {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>

<style>
  body {
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>

<template>
    <div id="add-blog">
        <h2>Add a new BLOG post</h2>
        <form v-if="!posted">
            <label>Blog Title</label>
            <input type="text" v-model="blog.title" required v-on:input="numberVModel">
            <label>Blog Content:</label>
            <textarea v-model="blog.content" ></textarea>
            <div id="checkboxes">
                <label>First Pupil</label>
                <input type="checkbox" value="first pupil" v-model="blog.categories" v-on:change="checkboxChange($event)" ref="box1">
                <label>Teacher</label>
                <input type="checkbox" value="Teacher" v-model="blog.categories">
                <label>Teacher assistant</label>
                <input type="checkbox" value="Teacher assistant" v-model="blog.categories">
            </div>
            <label>Author</label>
            <select v-model="blog.author">
                <option></option>
                <option v-for="author in authors">{{ author }}</option>
            </select>

            <button v-on:click.prevent="post">Add Blog</button>

        </form>
        
        <div id="successMSG" v-if="posted">
            <h2>Cograts, You've added a new blog! Huraaay!!!</h2>
        </div>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p> {{ blog.content }} </p>
            <p>Blog categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Blog Author:</p>
            <p >{{ blog.author }}</p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            blog: {
                    title: '',
                    content: '',
                    categories: [],
                    special: '',
                    author: '',
            },
            authors:['King', 'Bredberry', 'Server'],
            posted: false,
        }
    },
    methods: {
        numberVModel() {
            this.blog.special = this.blog.title;
            console.log(typeof this.blog.special);
        },
        checkboxChange(event){
            const firstCheckbox = this.$refs.box1.checked; // Access the first checkbox using `ref`
            console.log(firstCheckbox); // Logs whether the checkbox is checked
        },
        post: function(){
            this.$http.post("https://jsonplaceholder.typicode.com/posts", {
                title:this.blog.title,
                body:this.blog.content,
                userId: this.blog.categories,
                id: this.blog.author
            }).then(function(data){
                console.log(data);
                if (data.ok){
                    this.posted = Boolean(true);
                }
            })
        }
    }
}

</script>


<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
<script>
export default{
    name:'login'
}
</script>

<template>
<h1>Log in</h1>
<div class="login">
    <h2> User Name</h2>
    <input type = "text" v-model="name" placeholder="Enter Name" />
    <h2> Password</h2>
    <input type = "password" v-model="password" placeholder="Enter Password"/>
    <h2></h2>
    <button v-on:click="homePageVue">Login</button>
</div>
</template>

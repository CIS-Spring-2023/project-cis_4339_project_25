<script>
export default{
    name:'service'
}
</script>

<template>
    <h1>Service</h1>
    <h2>Service Name</h2>
    <input type="text" v-model="service" placeholder="Enter Service">
    <h2>Service Status</h2>
    <input type="text" v-model="status" placeholder="Enter Status">
    <h2></h2>
    <button>Add Service</button>
</template>
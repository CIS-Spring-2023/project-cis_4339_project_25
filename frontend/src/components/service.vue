<script>
export default{
    name:'service'
}
</script>

<template>
    <div class="text-center">
            <h3 class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10">Service</h3>
                <div class="form-group">
                    <label>Service</label>
                    <input type="text" class="form-control" v-model="service" placeholder="service" required>
                </div>
                <h2></h2>
                <div class="form-group">
                    <label>Status</label>
                    <input type="text" class="form-control" v-model="status" placeholder="status" required>
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-danger mt-3">Add service</button>
                </div>
    </div>
</template>
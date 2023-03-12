<script>
export default{ //export service and status to be used for backend
    name:'service',
    status:'status'
}
</script>

<template>
<div class="row justify-content-center">
<div class="col-md-4">
    <div class="text-center"> <!-- Add Service form-->
            <h3 class="font-bold col-xs-4 text-red-700 tracking-widest text-center mt-10">Add Service</h3>
                <div class="form-group">
                    <label>Service Name</label>
                    <input type="text" class="form-control col-xs-2" v-model="service" placeholder="service" required>
                </div>
                <h2></h2>
                <div class="form-group">
                    <label>Service Status</label>
                    <input type="text" class="form-control col-xs-2" v-model="status" placeholder="status" required>
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-danger mt-3">Add service</button>
                </div>
    </div>
</div>
</div>
</template>
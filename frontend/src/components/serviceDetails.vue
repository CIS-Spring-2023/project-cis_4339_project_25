<script>
import useVuelidate from '@vuelidate/core'
import { required, alpha } from '@vuelidate/validators'
import axios from 'axios'
import { useLoggedInUserStore } from "@/assets/loggedInUser" //user needs to sign in
import { DateTime } from 'luxon'
const apiURL = import.meta.env.VITE_ROOT_API

export default {
  props: ['id'],
  setup() 
  {const user = useLoggedInUserStore(); //added to not show update or delete unless user signs in
    return { user,v$: useVuelidate({ $autoDirty: true }) }
  },
  data() {
    return {
      service: {
        name: '',
        status: '',
      }
    }
  },
  created() {
    axios.get(`${apiURL}/services/id/${this.$route.params.id}`).then((res) => {
      this.service = res.data
    })
  },
  methods: {
    handleServiceUpdate() {
      axios.put(`${apiURL}/services/update/${this.id}`, this.service).then(() => {
        alert('Update has been saved.')
        this.$router.back()
      })
    },
    editService(serviceID) {
      this.$router.push({ name: 'updateclient', params: { id: clientID } })
    },
    serviceDelete() {
      axios.delete(`${apiURL}/services/${this.id}`).then(() => {
        alert('Service has been deleted.')
        this.$router.push({ name: 'findservices' })
      })
    }
  },
  // sets validations for the various data properties
  validations() {
    return {
      service: {
        name: { required, alpha },
        status: { required, alpha }
      }
    }
  }
}
</script>
<template>
  <main>
    <div>
      <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
      >
        Update Service
      </h1>
    </div>
    <div class="px-10 py-20">
      <form @submit.prevent="handleSubmitForm">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <h2 class="text-2xl font-bold">Service Details</h2>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Service Name</span>
              <span style="color: #ff0000">*</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="service.name"
              />
              <span class="text-black" v-if="v$.service.name.$error">
                <p
                  class="text-red-700"
                  v-for="error of v$.service.name.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>

          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Status</span>
              <span style="color: #ff0000">*</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                v-model="service.status"
              />
              <span class="text-black" v-if="v$.service.status.$error">
                <p
                  class="text-red-700"
                  v-for="error of v$.service.status.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>
        </div>

        <!-- grid container -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <div class="flex justify-between mt-10 mr-20" v-if="user.isLoggedIn"> <!--Will not show up unless user signs in-->
            <button
              @click="handleServiceUpdate"
              type="submit"
              class="bg-green-700 text-white rounded"
            >
              Update Service
            </button>
          </div>
          <div class="flex justify-between mt-10 mr-20" v-if="user.isLoggedIn"> <!--Will not show up unless user signs in-->
            <button
              @click="serviceDelete"
              type="submit"
              class="bg-red-700 text-white rounded"
            >
              Delete Service
            </button>
          </div>
          <div class="flex justify-between mt-10 mr-20" >
            <button
              type="reset"
              class="border border-red-700 bg-white text-red-700 rounded"
              @click="$router.back()"
            >
              Go back
            </button>
          </div>
        </div>

        <hr class="mt-10 mb-10" />

        <!-- grid container -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <div class="flex flex-col col-span-2">
            <table class="min-w-full shadow-md rounded">
              <thead class="bg-gray-50 text-xl">
              <tbody class="divide-y divide-gray-300">
                <tr
                  @click="editClient(service._id)"
                  v-for="service in clientAttendees"
                  :key="service._id"
                >
                  <td class="p-2 text-left">
                    {{ client.firstName + ' ' + service.lastName }}
                  </td>
                  <td class="p-2 text-left">{{ client.address.city }}</td>
                  <td class="p-2 text-left">
                    {{ client.phoneNumber.primary }}
                  </td>
                </tr>
              </tbody>
              </thead>
            </table>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

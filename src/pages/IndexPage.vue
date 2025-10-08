<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Basic Form</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input filled v-model="form.name" label="Name" />
          <q-input filled v-model="form.email" label="Email" type="email" />
          <q-input filled v-model="form.password" label="Password" type="password" />

          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="secondary" flat />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  password: ''
})

function onSubmit () {
  console.log('Form submitted:', form.value)
}

function onReset () {
  form.value = {
    name: '',
    email: '',
    password: ''
  }
}
</script>

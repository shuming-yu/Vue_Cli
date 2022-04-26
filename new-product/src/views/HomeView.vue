<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  <div class="home">
    <Form v-slot="{ errors, values, validate }" @submit="onSubmit">
    {{ errors }} {{ values }}
      <div class="mb-3">
      <label for="email" class="form-label">Email</label>
        <Field id="email" name="email" type="email"
        class="form-control" :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email" rules="email|required" v-model="user.email"></Field>
      <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
      <label for="name" class="form-label">姓名</label>
      <Field id="name" name="姓名" type="text" class="form-control"
      :class="{ 'is-invalid': errors['姓名'] }"
      v-model="user.name"
      rules="required"
      placeholder="請輸入姓名"></Field>
      <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
      <label for="phone" class="form-label">電話</label>
      <Field id="phone" name="電話" type="text" class="form-control"
        :class="{ 'is-invalid': errors['電話'] }"
        v-model="user.phone"
        :rules="isPhone"
        placeholder="請輸入電話"></Field>
      <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

    <div class="mb-3">
      <label for="region" class="form-label">地區</label>
      <Field id="region" name="地區" class="form-control"
      as="select"
      :class="{ 'is-invalid': errors['地區'] }"
      v-model="user.region"
      rules="required"
      >
        <option value="" disabled>請選擇地區</option>
        <option value="台北市">台北市</option>
        <option value="高雄市">高雄市</option>
      </Field>
      <error-message name="地區" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">地址</label>
      <Field id="address" name="地址" type="text" class="form-control"
      :class="{ 'is-invalid': errors['地址'] }"
      v-model="user.address"
      rules="required"
      placeholder="請輸入地址"></Field>
      <error-message name="地址" class="invalid-feedback"></error-message>
    </div>

      <button class="btn me-2 btn-outline-primary" type="button" @click="validate">驗證</button>
      <button class="btn btn-primary" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  components: {
    HelloWorld
  },
  created() {
    console.log(this)
  }
}

</script>

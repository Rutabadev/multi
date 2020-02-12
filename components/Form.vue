<template>
  <div class="Form">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              :counter="10"
              label="Username"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="text-center" cols="12" md="12">
            <v-btn :disabled="!valid" @click="validate" color="primary" rounded
              >Submit</v-btn
            >
          </v-col>
        </v-row>
        <v-row v-if="success" align="center">
          <v-col class="text-center" cols="12" md="12">
            Success!
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    success: false,
    valid: false,
    username: '',
    usernameRules: [
      (v) => !!v || 'Username is required',
      (v) => v.length <= 10 || 'Username must be less than 10 characters',
      (v) => v.length > 3 || 'Username must be less more 3 characters'
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => /.+\..+@.+\..+/.test(v) || 'Password must be valid'
    ]
  }),

  methods: {
    validate() {
      this.success = true
    }
  }
}
</script>

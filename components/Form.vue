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
    password: ''
  }),

  computed: {
    usernameRules() {
      const rules = []

      const rule0 = (v) => !!v || 'Username is required'
      rules.push(rule0)

      const rule1 = (v) =>
        v.length <= 10 || 'Username must be less than 10 characters'
      rules.push(rule1)

      const rule2 = (v) =>
        v.length > 3 || 'Username must be less more 3 characters'
      rules.push(rule2)

      return rules
    },
    passwordRules() {
      const rules = []

      const rule0 = (v) => !!v || 'Password is required'
      rules.push(rule0)

      const rule1 = (v) => /.+\..+@.+\..+/.test(v) || 'Password must be valid'
      rules.push(rule1)

      const rule2 = (v) =>
        v === this.username || 'Password and username must be equal'
      rules.push(rule2)

      return rules
    }
  },

  methods: {
    validate() {
      this.success = true
    }
  }
}
</script>

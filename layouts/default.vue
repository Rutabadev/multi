<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn @click="googleSignIn" icon>
        <v-icon v-if="!user">mdi-account</v-icon>
        <v-img v-if="user" :src="user.photoURL" max-width="30" max-height="30">
        </v-img>
      </v-btn>
      <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" icon>
        <v-icon>{{
          this.$vuetify.theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-7'
        }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-bottom-navigation app grow shift color="primary">
      <v-btn v-for="(item, i) in items" :key="i" :to="item.to" nuxt>
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-account-edit',
          title: 'Form',
          to: '/'
        },
        {
          icon: 'mdi-table',
          title: 'Highscores',
          to: '/highscores'
        },
        {
          icon: 'mdi-information',
          title: 'About',
          to: '/about'
        }
      ],
      title: 'Vuetify.js',
      user: null,
      provider: new firebase.auth.GoogleAuthProvider()
    }
  },
  methods: {
    googleSignIn() {
      firebase
        .auth()
        .signInWithPopup(this.provider)
        .then((result) => {
          this.user = result.user
        })
    }
  }
}
</script>

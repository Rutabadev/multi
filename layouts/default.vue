<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
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
    <v-bottom-navigation app grow shift>
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        value="item.title.toLowerCase()"
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
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
      title: 'Vuetify.js'
    }
  }
}
</script>

<template>
  <div class="Highscores">
    <v-data-table
      :headers="headers"
      :items="highscores"
      class="elevation-2"
    ></v-data-table>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'

export default {
  data: () => ({
    headers: [
      {
        text: 'User',
        value: 'user.displayName'
      },
      {
        text: 'Time',
        value: 'time'
      }
    ],
    highscores: []
  }),
  created() {
    const highscoresRef = fireDb.collection('highscores')
    highscoresRef
      .orderBy('time')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.highscores.push({ ...doc.data(), id: doc.id })
        })
      })
  }
}
</script>

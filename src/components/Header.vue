<template>
  <v-app-bar
    color="#f46c7c"
    dark
    prominent
    app
    shrink-on-scroll
    :src="require('@/assets/hygie_one.png')">

    <v-btn class="ma-2" fab dark small color="#f14156" @click="$router.push({ name: 'Home'})">
      <v-icon dark>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title>
      HYGIE//ONE
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn @click="logout" class="ma-2 white--text" color="blue-grey">
      se deconnecter
      <v-icon right>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {

  methods:{
    logout() {
      this.$store.dispatch("logout user").then(() => {
        this.$router.push({ name: 'Home'})
        console.log("in logout success")
      }).catch(e => {
        this.$router.push({ name: 'Home'})
        console.log("in logout failed")
      })
    }
  }

}
</script>

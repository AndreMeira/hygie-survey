<template>
  <v-app-bar
    color="#f46c7c"
    dark
    prominent
    app
    shrink-on-scroll
    :src="require('@/assets/fond_vignette_hygie_one.jpg')">

    <v-btn class="ma-2" fab dark small color="#f14156" @click="$router.push({ name: 'Home'})">
      <v-icon dark>mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title>
      HYGIE//ONE
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-menu
        left
        bottom
        v-if="$store.getters.allResults"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon dark>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn @click="logout" flat color="white">
                se déconnecter
                <v-icon right>mdi-logout</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    <!--  -->
  </v-app-bar>
</template>

<script>
export default {

  methods:{
    logout() {
      this.$store.dispatch("logout user").then(() => {
        this.$router.push({ name: 'Login'})
        console.log("in logout success")
      }).catch(e => {
        this.$router.push({ name: 'Home'})
        console.log("in logout failed")
      })
    }
  }

}
</script>

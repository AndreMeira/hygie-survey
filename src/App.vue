<template>
  <v-app>
    <Header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header  from './components/Header';
import Footer  from '@/components/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  mounted () {
    if (window && window.document) {
      document.title = "Hygie académie - profil"
    }
  },

  created () {
    this.$store.dispatch("load current user").then(() => {
      this.ready = true
    }).catch(() => {
      this.$router.push({ name:"Login" })
      this.ready = true
    })
  },

  data: () => ({
    //
  }),
};
</script>

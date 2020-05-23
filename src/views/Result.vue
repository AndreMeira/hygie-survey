<template>
  <v-container v-if="currentResult">
  
    <v-row justify="center">
      <HygieTitle :title="currentResult.title" />
    </v-row>
    <v-row justify="center">
      <div class="result subtitle">
        <h4>Ton score est de {{currentResult.score}}</h4>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="result subtitle">
        <h5>{{currentResult.subtitle}}</h5>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="result content" v-html="currentText">
      </div>
    </v-row>
    <v-row justify="center">
       <div class="my-2">
        <v-btn rounded color="#dcdcdc" dark
        @click="$router.push({ name: category + 'Result'})">Recommencer le test</v-btn> <span />
      </div>
    </v-row>
    <v-row justify="center">
      <div class="my-2">
        <v-btn rounded color="#dcdcdc" dark
        @click="">Retour à la page d'accueil</v-btn> <span />
      </div>
    </v-row>
  </v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import HygieTitle from '@/components/Title'

export default {
  props:["category"],
  components: {
    HygieTitle
  },

  beforeMount () {
    if (!this.currentResult) {
      this.$store.dispatch("load current user").then((d) => {
        !this.currentResult && this.$router.push({
          name:this.category + "Survey", params: { page: 1 }
        })
      })
    }
  },

  data() {
     return {
     }
  },

  computed:{
    currentResult() {
      return this.$store.getters.resultById(
        parseInt(this.$route.params.id)
      )
    },

    currentText() {
      const value = this.currentResult.conclusion
      console.log(value)
      return (value || "").toString().split(/\r?\n/).join("<br />")
    }
  },

  filters: {
    newLineToBr: function (value) {
      return (value || "").toString().split(/\r?\n/).join("<br />")
    }
  }
}

</script>
<style lang="scss">
.result h5 {
  font-size: 2rem;
}
.result.content {
  text-align:center;
  max-width: 600px;
}
</style>

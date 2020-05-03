<template>
  <v-container>
    <div class="result title">
      <HygieTitle :title="currentResult.title"/>
    </div>
    <div class="result subtitle">
      <h5>{{currentResult.subtitle}}</h5>
    </div>
    <div class="result content" v-html="currentResult.text | newLineToBr">
    </div>
  </v-container>
</template>

<script>

import { mapActions } from 'vuex'
import HygieTitle from '@/components/Title'

export default {
  props:["category"],
  components: {
    HygieTitle
  },

  beforeMount () {
    if (!this.currentResult) {
      return this.$router.push({ name:this.category + "Survey" })
    }
  },

  data() {
     return {
     }
  },

  computed:{
    ...mapGetters([
      "result"
    ]),

    currentResult() {
      return this.result(this.category)
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
form {
  margin-top: 3rem;
  padding: 2rem 5rem;
  border:solid 1px #fcb69f;
  border-radius: 2rem;
  --min-width: 600px;
}
</style>

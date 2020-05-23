<template>
  <v-container-fluid v-if="currentResult">
    <div class="divider"/>
    <v-row dense>
        <v-col cols="12">
    <v-card
      color="white"
      flat
      tile
      class="mx-auto"
      max-width="800"
      v-if="category"
    >
    <v-card-actions>
      <v-list-item class="grow">
        <!-- <v-icon left color="primary">
          mdi-home
        </v-icon>
        <v-list-item-content>
          <v-list-item-title>retour à la page d'accueil</v-list-item-title>
        </v-list-item-content> -->
        <v-row align="center" justify="end">
          <v-btn rounded color="#f14156" dark @click="switchTest">
              <template v-if="category == 'food'">Tester mon état de santé</template>
              <template v-if="category == 'health'">Tester mes habitudes alimentaires</template>
              <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-row>
      </v-list-item>
    </v-card-actions>

    </v-card>
  <v-card
    color="grey lighten-4"
    flat
    tile
    class="mx-auto"
    max-width="800"
  >
  <v-card-actions>
    <v-list-item class="grow">
      <v-icon left color="#D20F26">
        mdi-resistor
      </v-icon>
      <v-list-item-content>
        <v-list-item-title>{{currentResult.title}}</v-list-item-title>
      </v-list-item-content>
      <v-row align="center" justify="end">
        <span class="subheading mr-2">ton score : {{currentResult.score}}</span>
        <span class="mr-1">·</span>
        <v-icon class="mr-1" color="light-blue accent-4">mdi-download</v-icon>
        <span class="subheading"><a :href="'https://api.hygie.andremeira.com/api/result/download/'+$route.params.id">
        télécharger</a></span>
      </v-row>
    </v-list-item>
  </v-card-actions>

  </v-card>
    <v-card
      class="mx-auto"
      max-width="800">
    <v-card-title>
      <v-icon large left color="yellow darken-2">
        mdi-{{smiley[currentResult.result]}}
      </v-icon>
      <span class="title font-weight-light">{{currentResult.result}}</span>
    </v-card-title>
    <v-card-text class="headline">
      {{currentResult.conclusion}}
    </v-card-text>
  </v-card>
</v-col>
</v-row>

  <template v-for="(question, index) in questions">
    <v-row dense :key="question.id">
        <v-col cols="12">
  <v-card
      class="mx-auto"
      max-width="800"
    >

    <v-card-title>
      <v-icon large left>
        mdi-help-circle-outline
      </v-icon>
      <span class="title font-weight-light">{{question.label}}</span>
    </v-card-title>
    <v-card-text>
      <p v-for="(answer, index) in question.response" :key="answer.id">
      - {{answer}}
    </p>
    </v-card-text>
    <v-card-text v-if="question.comment">
      <strong>Ton commentaire :</strong> {{question.comment}}
    </v-card-text>

  </v-card>
</v-col>
</v-row>
  </template>
  <div class="divider"/>
  </v-container-fluid>
</template>


<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  /**
   *
   */
  props:["id", "category"],

  /**
   *
   */
  components: {
    // HygieTitle
  },

  beforeMount() {
    //do something before mounting vue instance
    this.load(this.$route.params.id)
  },

  /**
   *
   */
  data() {
     return {
       currentResult:null,
       questions:[],
       smiley: {
         "Les voyants clignotent": "emoticon-neutral-outline",
         "C’est pas folichon !"  : "emoticon-sad-outline",
         "Wow !"                 : "emoticon-happy-outline"
       }
     }
  },


  /**
   *
   */
  methods: {
    ...mapActions({
      loadPreviousAnswers: "load previous answers"
    }),

    switchTest() {
      const name = this.category === 'health'
        ? 'foodSurvey'
        : 'healthSurvey'

      this.$router.push({
        name: name,
        params:{ page:1 }
      })
    },

    load(id) {
      this.loadPreviousAnswers(id).then((data) => {
        this.currentResult = data
        this.questions = data.questions
      })
    }
  },

  /**
   *
   */
  computed: {

  }
}

</script>
<style lang="scss">
.divider {
  padding-bottom: 5rem;
}

.result h5 {
  font-size: 2rem;
}

.result h4 {
  float: none;
}

.result.content {
  text-align:center;
  max-width: 600px;
}
</style>

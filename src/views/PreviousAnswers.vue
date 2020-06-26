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
        <v-list-item-title>
          {{currentResult.title}}
        </v-list-item-title>
        <v-list-item-title>
          <span class="subheading shrink">ton score : {{currentResult.score}}</span>
        </v-list-item-title>

      </v-list-item-content>
      <!-- <v-row align="center" justify="end">
        <v-icon left color="grey">
          mdi-calendar
        </v-icon>
        <span class="subheading shrink">{{currentResult.completed_at}}</span>
      </v-row> -->
    </v-list-item>
  </v-card-actions>

  </v-card>

    <v-card
      class="mx-auto"
      max-width="800"
      tile>
    <v-card-title>
      <v-icon large left color="yellow darken-2">
        mdi-{{smiley[currentResult.result]}}
      </v-icon>
      <span class="title font-weight-light">{{currentResult.result}}</span>
    </v-card-title>
    <v-card-text class="" v-html="conclusion">
    </v-card-text>
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
      <v-icon left color="grey">
        mdi-calendar
      </v-icon>
      <v-list-item-content>
        <v-list-item-title> {{currentResult.completed_at}}
        </v-list-item-title>
      </v-list-item-content>
      <v-row align="center" justify="end">
        <v-icon class="mr-1" color="light-blue accent-4">mdi-download</v-icon>
        <span class="subheading shrink"><a :href="'https://api.hygie.andremeira.com/api/result/download/'+$route.params.id">
        télécharger</a></span>
      </v-row>
    </v-list-item>
  </v-card-actions>

  </v-card>


</v-col>
</v-row>
<v-row dense style="height:40px;">
</v-row>

<!-- <v-row dense v-if="plot.length > 1">
  <v-col cols="12">
  <v-card
  class="mt-4 mx-auto"
  max-width="800"
>
  <v-sheet
    class="v-sheet--offset mx-auto"
    color="#f14156"
    elevation="12"
    max-width="calc(100% - 32px)"
  >
    <v-sparkline
      :labels="plot.map(e => e.date)"
      :value="plot.map(e => e.score)"
      color="white"
      line-width="1"
      padding="16"
    ></v-sparkline>
  </v-sheet>

  <v-card-text class="pt-0">
    <div class="title font-weight-light mb-2">Evolution de ton score</div>
  </v-card-text>
</v-card>
</v-col>
</v-row>

<v-row dense style="height:40px;" /> -->

<v-row dense>
  <v-col cols="12">
    <v-card
      class="mx-auto"
      max-width="800">

    <v-card-text class="headline">
      Les réponses que tu as données
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
  props:["id"],

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

  computed: {
    ...mapGetters([
      "scores"
    ]),

    plot() {
      return this.scores(this.category).slice(-5)
    },

    conclusion() {
      return this.currentResult.conclusion
          .replace(/\r?\n/g, "<br />");
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
        this.category = data.category
        this.currentResult = data
        this.questions = data.questions
      })
    }
  }
}

</script>
<style lang="scss">

.v-sheet--offset {
    top: -35px;
    position: relative;
  }
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

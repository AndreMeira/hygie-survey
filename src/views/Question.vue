<template>
  <v-container>
    <template v-if="ready">
      <v-row justify="center">
        <HygieTitle :title="currentSurvey.categoryTitle" />
      </v-row>
      <v-row justify="center">
        <v-spacer />
      </v-row>
      <v-row justify="center">
        <v-col col="12" md="10">

          <v-row justify="center">
            <v-form v-model="valid" ref="form">
              <v-row>
                <h5>{{currentQuestionNumber + 1}}. {{currentQuestion.label}}</h5>
              </v-row>
              <v-row>
                <template v-if="!currentQuestion.multiple">
                  <v-radio-group v-model="answers">
                    <v-radio
                      v-for="answers in currentQuestion.answers"
                      :key="answers.id"
                      :label="answers.label"
                      :value="[answers.id]"
                    ></v-radio>
                  </v-radio-group>
                </template>
                <template v-else>
                  <template v-for="answers in currentQuestion.answers">
                    <v-checkbox
                      :key="answers.id"
                      v-model="answers"
                      :label="answers.label"
                    ></v-checkbox><br />
                  </template>

                </template>
              </v-row>
              <v-row>
                <v-col cols="12" md="12">
                  <v-row>
                    <v-text-field label="Notes personnelles" :rules="rules" hide-details="auto"></v-text-field>
                  </v-row>
                </v-col>
              </v-row>
              <v-row justify="end">

                <v-col cols="4" md="4">
                  <v-row justify="" v-if="currentQuestionNumber > 0">
                    <v-btn rounded color="#dcdcdc" dark
                    @click="next">< précédent</v-btn> <span />
                  </v-row>
                </v-col>

                <v-col cols="4" md="4">
                </v-col>

                <v-col cols="4" md="4">
                  <v-row justify="end">
                    <v-btn rounded color="#1285b7" dark
                    @click="$router.push({ name: 'CustomPlan'})">Suivant ></v-btn>
                  </v-row>
                </v-col>

              </v-row>
            </v-form>
          </v-row>
        </v-col>


      </v-row>
    </template>
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
    if (this.currentSurvey) {
      this.ready = true
      return
    }

    this.loadSurveyAsCurrent(this.category).then(() => {
      this.ready = true
    })
  },

  data() {
     return {
       ready:false,
       answers:[],
       errors:{},
       rules: {
          required: value => !!value || 'Requis',
          low: v => v.length >= 2    || 'Minimum 2 characteres',
          min: v => v.length >= 8    || 'Minimum 8 characteres'
        },
     }
  },

  computed: {
    ...mapGetters({
      "currentSurvey",
      "currentQuestion",
      "currentQuestionNumber"
    })
  },

  methods: {
    ...mapActions({
      saveSurvey: "save survey",
      saveAnswer:"save answer",
      nextQuestion:"next question",
      previousQuestion:"previous question",
    }),
    next() {
      this.saveAnswer(this.getPayload()).then(() => {
        this.nextAction()
      })
    },

    nextAction() {
      if (this.isCurrentQuestionLastQuestion()) {
        this.saveSurveyAndGoToResult()
      } else {
        this.nextQuestion()
      }
    },

    saveSurveyAndGoToResult() {
      this.saveSurvey().then(() => {
        this.$router.push({ name: this.category + 'Result'})
      })
    }

    previous() {
      this.previousQuestion()
    },

    isCurrentQuestionLastQuestion() {
      return this.currentQuestion + 1 === this.currentSurvey.questions.length
    },

    getPayload() {
      return {
        currentQuestion:this.currentQuestion,
        answer: this.answers,
      }
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

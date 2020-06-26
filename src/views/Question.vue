<template>
  <v-container>
    <template v-if="ready">
      <v-row dense>

          <v-col cols="12">
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
                  <v-list-item-title>{{category === "food" ? "Tes habitudes alimentaires" : "Ton état de santé"}}</v-list-item-title>
                </v-list-item-content>
                <v-row align="center" justify="end">
                  <span class="subheading mr-2">question {{currentQuestionNumber + 1}}/{{currentSurvey.questions.length}}</span>
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
                <v-btn rounded color="#dcdcdc" dark
                @click="previousAction">< précédent</v-btn> <span />
                <v-row align="center" justify="end">
                  <v-btn rounded color="#f14156" dark
                  @click="nextAction">Suivant ></v-btn>
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
            <v-progress-linear
              color="#D20F26"
              height="10"
              :value="(currentQuestionNumber)/currentSurvey.questions.length * 100"
              striped
            ></v-progress-linear>
            </v-card>
            <v-card
              class="mx-auto"
              max-width="800">
            <v-card-title>
              <span class="title font-weight-light">{{currentQuestionNumber + 1}}. </span>
              <span v-html="questionLabel"></span>
            </v-card-title>
            <v-card-text class="headline font-weight-bold">
              <v-form v-model="valid" ref="form">
              <template v-if="!currentQuestion.multiple">

                <v-radio-group v-model="answer" :rules="[rules.required]" required :multiple="!!currentQuestion.multiple">
                  <template v-for="answer in currentQuestion.answers">
                    <v-col cols="12" md="12">
                      <v-radio
                        :key="answer.id"
                        :value="answer.id"
                        color="#D20F26"
                      ><template v-slot:label>
                        <div>{{answer.label}} <strong v-if="previousAnswerIs(answer.id)" class="primary--text"> ta réponse précédente</strong></div>
                      </template></v-radio>
                    </v-col>
                  </template>
                </v-radio-group>
              </template>
              <template v-else>
                <template v-for="answer in currentQuestion.answers">
                  <v-col cols="12" md="12">
                      <v-checkbox
                        :key="answer.id"
                        :value="answer.id"
                        v-model="answers"
                        :rules="[rules.one]"
                        color="#D20F26"
                        hide-details
                      ><template v-slot:label>
                        <div>{{answer.label}} <strong v-if="previousAnswerIs(answer.id)" class="primary--text"> ta réponse précédente</strong></div>
                      </template></v-checkbox>
                  </v-col>
                </template>
              </template>
              </v-form>
              <v-textarea
                outlined
                v-model="comment"
                name="comment"
                label="Notes personnelles"
              ></v-textarea>
            </v-card-text>

            <!-- <v-card-actions>
              <v-list-item class="grow">
                <v-btn rounded color="#dcdcdc" dark
                @click="previousAction">< précédent</v-btn> <span />
                <v-row align="center" justify="end">
                  <v-btn rounded color="#1285b7" dark
                  @click="nextAction">Suivant ></v-btn>
                </v-row>
              </v-list-item>
            </v-card-actions> -->
          </v-card>
          </v-col>

      </v-row>

    </template>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import HygieTitle from '@/components/Title'

export default {

  /**
   *
   */
  props:["category"],

  /**
   *
   */
  components: {
    HygieTitle
  },

  /**
   *
   */
  beforeMount () {
    const a = (v) => console.log("response", v.response)

    this.loadSurveyAsCurrent({
      category:this.category, page:this.$route.params.page || 1
    }).then(() => {
      this.$watch("currentQuestion", a)
      this.ready = true
      a(this.currentQuestion)
    })
  },

  /**
   *
   */
  data() {
     return {
       valid:true,
       ready:false,
       answer:null,
       comment: "",
       answers:[],
       errors:{},
       rules: {
          required: value => !!value || 'Requis',
          one: v => this.answers.filter(v => !!v).length > 0 || 'Requis'
        },
     }
  },

  /**
   *
   */
  computed: {
    ...mapGetters([
      "currentSurvey",
      "currentQuestion",
      "currentQuestionNumber"
    ]),

    questionLabel() {
      return this.currentQuestion.label
          .replace("plusieurs réponses possibles", "<u>plusieurs réponses possibles</u>")
          .replace("1 à 6 réponses possibles", "<u>1 à 6 réponses possibles</u>")
          .replace("le plus souvent", "<u>le plus souvent</u>");
    }
  },

  watch: {
    answer(value) {
      this.answers = [this.answer]
    }
  },

  /**
   *
   */
  methods: {
    ...mapActions({
      saveSurvey: "save survey",
      saveAnswer:"save answer",
      nextQuestion:"next question",
      previousQuestion:"previous question",
      loadSurveyAsCurrent: "load survey as current"
    }),

    previousAnswerIs(previousAnswer) {
      return false
    },

    /**
     *
     */
    nextAction(evt) {
      evt.preventDefault();
      this.$refs.form.validate();

      if (!this.valid) {
        return;
      }
      this.saveAnswer(this.getPayload())

      if (this.isCurrentQuestionLastQuestion()) {
        this.saveSurveyAndGoToResult()
      } else {
        this.next()
      }
    },

    reset() {
      this.answer  = this.currentQuestion.response[0] || null
      this.answers = this.currentQuestion.response || []
      this.comment = this.currentQuestion.comment  || ""
    },

    /**
     *
     */
    next() {
      this.nextQuestion().then(() => {
        this.reset()
        this.$refs.form.resetValidation()
        this.$router.push({
          name:this.category + "Survey",
          params: { page: this.currentQuestionNumber + 1 }
        })
      })
    },

    /**
     *
     */
    saveSurveyAndGoToResult() {
      this.saveSurvey(this.currentSurvey).then((data) => {
        console.log(data)
        this.$router.push({
          name: this.category + 'Result', params:{ id:data.id }
        })
      })
    },

    /**
     *
     */
    previousAction() {
      this.previousQuestion().then(e => this.reset())
      this.$router.push({
        name:this.category + "Survey",
        params: { page: this.currentQuestionNumber + 1 }
      })

    },

    /**
     *
     */
    isCurrentQuestionLastQuestion() {
      console.log(
        this.currentSurvey.currentQuestion,
        this.currentSurvey.questions.length
      )
      return this.currentQuestionNumber + 1 === this.currentSurvey.questions.length
    },

    /**
     *
     */
    getPayload() {
      return {
        currentQuestion:this.currentQuestion,
        answers: this.answers,
        comment:this.comment
      }
    }

  }
}

</script>
<style lang="scss">
.v-input--hide-details.v-input--selection-controls {
  margin-top: 0;
}

.v-card__title {
  word-break: normal !important;
}
</style>

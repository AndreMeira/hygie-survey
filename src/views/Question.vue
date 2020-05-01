<template>
  <v-container>
    <v-row justify="center">
      <HygieTitle />
    </v-row>
    <v-row justify="center">
      <v-spacer />
    </v-row>
    <v-row justify="center">
      <v-col col="12" md="10">

        <v-row justify="center">
          <v-form v-model="valid" ref="form">
            <v-row>
              <h5>1. Combien de cafés bois-tu par jour ?</h5>
            </v-row>
            <v-row>
              <v-radio-group v-model="radioGroup">
                <v-radio
                  v-for="n in 3"
                  :key="n"
                  :label="`Radio ${n}`"
                  :value="n"
                ></v-radio>
              </v-radio-group>
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
                <v-row justify="">
                  <v-btn rounded color="#dcdcdc" dark
                  @click="$router.push({ name: 'DailyDataCalendar'})">< précédent</v-btn> <span />
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
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
import HygieTitle from '@/components/Title'

export default {
  props:["user"],
  components: {
    HygieTitle
  },
  data() {
     return {
       radioGroup,
       errors:{},
       rules: {
          required: value => !!value || 'Requis',
          low: v => v.length >= 2 || 'Minimum 2 characteres',
          min: v => v.length >= 8 || 'Minimum 8 characteres'
        },
     }
  },

  methods: {

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

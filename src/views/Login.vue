<template>
  <v-container class="fill-height">
  <v-row align="center" justify="center">
    <v-form v-model="valid" @submit="submit">
      <v-row justify="center">
          <v-avatar color="blue" size="5rem">
            <v-icon size="4rem" dark>mdi-account-circle</v-icon>
          </v-avatar>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="email"
              :rules="[rules.required]"
              label="email"
              filled
              required
            ></v-text-field>
        </v-col>
      </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              :append-icon="showEye ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="pwd"
              :type="showEye ? 'text' : 'password'"
              :rules="[rules.required, rules.min]"
              :counter="25"
              label="Mot de passe"
              hint="Au moins 8 characteres"
              filled
              :error-messages="errors.password"
              @click:append="showEye = !showEye"
              required></v-text-field>
          </v-col>
        </v-row>
        <!--
        <v-row>
          <v-col cols="12" md="12">
            <v-switch v-model="rememberMe" label="Se souvenir de moi"></v-switch>
          </v-col>
        </v-row> -->
        <v-row class="higher">
          <v-col cols="12" md="12">
            <v-checkbox
              v-model="rememberMe"
              label="Se souvenir de moi"></v-checkbox>
          </v-col>
        </v-row>

        <v-row justify="center">
            <v-btn rounded color="primary" dark @click="submit">Se connecter</v-btn>
            <span class="white--text signup">
                <router-link :to="{ name: 'Signup', params: {} }">pas encore inscrit(e)?</router-link>
            </span>
        </v-row>

    </v-form>
  </v-row>
</v-container>
</template>


<script>
import { mapActions } from 'vuex'

export default {
  data() {
     return {
       pwd:"",
       email:"",
       valid:false,
       rememberMe:true,
       showEye:false,
       errors:{},
       rules: {
          required: value => !!value || 'Requis',
          low: v => v.length >= 2    || 'Minimum 2 characteres',
          min: v => v.length >= 8    || 'Minimum 8 characteres'
        },
     }
  },
  methods: {
    submit(evt) {
      evt.preventDefault();
      this.authenticate(this.getFormData()).then((data) => {
        this.$router.push({ name:"Home" }).catch(e => console.log(e))
      }).catch(({ data }) => {
        this.errors = {password: ["Identifiant/mot de passe incorrect"]}
      })
    },
    getFormData() {
      return {
        username:this.email,
        password:this.pwd
      }
    },
    ...mapActions({
      authenticate:"authenticate user"
    })
  }
}

</script>
<style lang="scss">
.signup {
  display: inline-block;
  padding: 2px 12px;
}
.higher {
  margin-top: -2rem;
}

form {
  min-width: 30vw;
}
</style>

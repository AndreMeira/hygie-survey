<template>
  <v-container class="fill-height">
  <v-row align="center" justify="center">
    <v-form ref="form" v-model="valid" @submit="submit">
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
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="[rules.required, rules.low]"
              label="Prénom"
              filled
              required></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="[rules.required, rules.low]"
              label="Nom de famille"
              filled
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="email"
                :error-messages="errors.email"
                :rules="[rules.required]"
                label="email"
                hint="Verifie bien la saisie de ton email."
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
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              :append-icon="showEye ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="pwdConfirm"
              :type="showEye ? 'text' : 'password'"
              :rules="[rules.required, rules.min]"
              :counter="25"
              label="Confirmer mot de passe"
              hint="Au moins 8 characteres"
              filled
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
            <v-btn rounded color="primary" dark @click="submit">S'inscrire</v-btn>
            <span class="white--text signup">
                <router-link :to="{ name: 'Login', params: {} }">déjà inscrit(e)?</router-link>
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
       pwdConfirm:"",
       firstname:"",
       lastname:"",
       valid:false,
       rememberMe:true,
       showEye:false,
       errors:{},
       rules: {
          required: value => !!value || 'Requis',
          low: v => v.length >= 2 || 'Minimum 2 characteres',
          min: v => v.length >= 8 || 'Minimum 8 characteres'
        },
     }
  },

  methods: {
    ...mapActions({
      register:"register user"
    }),

    getFormData() {
      return {
        firstname:this.firstname,
        lastname:this.lastname,
        email:this.email,
        password:this.pwd,
        password_confirmation:this.pwdConfirm
      }
    },

    registerUser(formData) {
      this.register(formData).then(data => {
          this.signIn(formData)
        }).catch((data) => {
          console.log(data)
          this.errors = data.errors
        })
    },

    signIn(formData) {
      this.$store.dispatch("authenticate user", {
        password: formData.password,
        username: formData.email
      }).then(() => {
        this.$router.push('/')
      })
    },

    submit(evt) {
      evt.preventDefault();
      this.$refs.form.validate();
      this.errors = {}

      if (!this.valid) {
        return;
      }

      const formData = this.getFormData()
      this.registerUser(formData)
    }
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

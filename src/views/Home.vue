<template>
  <v-container class="fill-height">
    <v-row>
      <v-col col="12" md="12">
        <v-row justify="center">
          <div class="panel">
          <v-card>
            <v-img
              max-width="400"
              max-height="300"
              src="http://www.mindbodyunite.com/wp-content/uploads/2017/02/Tips-for-Keeping-Your-Body-Healthy.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>TON ÉTAT DE SANTÉ</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">BILAN DE VITALITÉ</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Etat des lieux sur</div>
              <div>TON ÉTAT DE SANTÉ</div>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="primary" @click="$router.push({ name: 'resultHealth'})">
                Commencer le test
              </v-btn>

            </v-card-actions>
          </v-card>
        </div>
        <div class="panel">
          <v-card>
            <v-img
              max-width="400"
              max-height="300"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>TES HABITUDES ALIMENTAIRES</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">BILAN DE VITALITÉ</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Etat des lieux sur</div>
              <div>TES HABITUDES ALIMENTAIRES</div>

            </v-card-text>

            <v-card-actions>
              <v-btn text color="primary" @click="$router.push({ name: 'resultFood'})">
                Commencer le test
              </v-btn>
            </v-card-actions>
          </v-card>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="scss">
.panel {
  padding: 1rem;
}
</style>

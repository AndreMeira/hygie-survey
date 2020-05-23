<template>
  <v-container-fluid>
    <v-row>
      <div class="divider" />
    </v-row>
    <v-row justify="center">
      <HygieTitle title="" />
    </v-row>
    <v-row justify="center">
      <v-col cols="4">
          <v-card max-width="500" class="mx-auto">
            <v-img
              max-width="500"
              :src="require('@/assets/health.jpg')"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>TON ÉTAT DE SANTÉ</v-card-title>
            </v-img>

            <v-card-actions>
              <v-btn text color="primary" @click="$router.push({ name: 'healthSurvey', params: {page: 1} })">
                Commencer le test
              </v-btn>
              <v-btn v-if="$store.getters.results('health').length" text @click="$router.push({ name: 'resultList', params: {cat: 'health'}})">
                résultats précédents
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">

          <v-card v-card max-width="500" class="mx-auto">
            <v-img
              max-width="500"
              :src="require('@/assets/food.jpg')"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>TES HABITUDES ALIMENTAIRES</v-card-title>
            </v-img>

            <v-card-actions>
              <v-btn text color="primary" @click="$router.push({ name: 'foodSurvey', params: {page: 1}})">
                Commencer le test
              </v-btn>
              <v-btn v-if="$store.getters.results('food').length" text @click="$router.push({ name: 'resultList', params: {cat: 'food'}})">
                résultats précédents
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
import HygieTitle from '@/components/Title'

export default {
  name: 'Home',
  /**
   *
   */
  components: {
    HygieTitle
  }
}
</script>
<style lang="scss">
.panel {
  padding: 1rem;
}

.divider {
  padding-bottom: 5rem;
}
</style>

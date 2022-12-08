<template>
  <v-container fluid>
    <v-row>
      <div class="divider" />
    </v-row>
    <v-row justify="center" v-if="$store.getters.allResults">
      <v-col cols="12" sm="12">
          <v-card max-width="700" class="mx-auto">
            
              <v-card-title>Quel est ton profil ?</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        
      </v-row>

      <div class="my-4 subtitle-1">
        Réponds à ces questions pour connaître ton profil prédominant. 
      </div>

      <div class="hygie-margin my-4 subtitle-1">Si tu hésites entre deux réponses, choisis celle qui te correspond le plus souvent (en dehors d’un potentiel contexte pathologique récent).</div>
      <div class="hygie-margin my-4 subtitle-1">Il est essentiel de caricaturer quelque peu les profils afin de faire ce test, donc choisis une seule réponse sauf s’il est indiqué “plusieurs réponses possibles”. Choisis la réponse qui te ressemble le plus, même si elle n’est pas 100% exacte. </div>
      <div class="hygie-margin my-4 subtitle-1">Il est possible que tu sois entre 2 profils, dans ce cas lis les documents correspondants pour chacun d’entre eux afin de t’en inspirer pour personnaliser ton alimentation. </div>
    </v-card-text>
            <v-card-actions>
              <v-btn text color="#f14156" @click="$router.push({ name: 'survey'})">
                Commencer le test
              </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>

    </v-row>
  </v-container>
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
.hygie-margin {
  margin-bottom: 1rem;
}
</style>

<template>
  <v-container>
    <div class="divider"/>
  <v-card
    max-width="500"
    class="mx-auto"
  >

    <v-list two-line>
      <v-list-item-group
        multiple
        active-class="pink--text"
      >
        <template v-for="(item, index) in list">
          <v-list-item :key="item.id">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-content>
                <v-list-item-title>{{item.title}}: {{item.score}} points</v-list-item-title>
                <v-list-item-subtitle class="text--primary" >{{item.subtitle}}</v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.completed_at"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text @click="$router.push({ name: 'PreviousAnswers', params:{id: item.id} })">voir
                  <!-- <router-link :to="{ name: 'resultatSurvey', params: {id:item.id} }">voir</router-link> -->
                </v-list-item-action-text>
                <v-list-item-action-text>
                  <a :href="'https://api.hygie.andremeira.com/api/result/download/'+item.id">
                  télécharger
                </a>
                </v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < list.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</v-container>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import HygieTitle from '@/components/Title'

export default {
  components: {
    HygieTitle
  },

  methods: {
    ...mapActions({
      loadPreviousAnswers: "load previous answers"
    }),

    load(id) {
      this.loadPreviousAnswers(id).then(data => console.log(data))
    }
  },

  computed:{
    ...mapGetters([
      "results"
    ]),

    list() {
      console.log(this.results(this.$route.params.cat))
      const res = this.results(this.$route.params.cat)
      return res ? res.reverse() : []
    }
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

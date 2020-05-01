<template>
  <v-app-bar
    color="#fcb69f"
    dark
    prominent
    app
    :src="require('@/assets/hygie_one.png')">
    <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          :src="require('@/assets/hygie_one_title.png')"
        ></v-img>
      </template> -->
    <v-toolbar-title>
      Hygie one
      <!-- <v-img :src="require('@/assets/hygie_one_title.png')" /> -->
    </v-toolbar-title>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

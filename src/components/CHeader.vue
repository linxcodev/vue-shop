<template>
  <!-- toolbar vuetify dengan warna primary -->
  <v-toolbar dark color="primary">

    <!-- header bagian kiri -->
    <v-app-bar-nav-icon @click="setSideBar(!sideBar)"></v-app-bar-nav-icon>

    <!-- header bagian tengah -->
    <v-toolbar-title class="white--text">Vueshop</v-toolbar-title>

    <!-- separator supaya header bagaian kanan posisinya rata kanan -->
    <v-spacer></v-spacer>

    <!-- header bagian kanan -->
    <v-btn icon>
      <v-badge left overlap color="orange">
        <span slot="badge">1</span>
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>

    <!-- kolom pencarian di bawah header -->
    <v-text-field
      slot="extension"
      hide-details
      append-icon="mdi-microphone"
      text
      label="Search"
      prepend-inner-icon="mdi-magnify"
      solo-inverted
    ></v-text-field>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'c-header',
  methods: {
   ...mapActions({
     setSideBar : 'setSideBar',
   }),
  },
  computed: {
    ...mapGetters({
      sideBar : 'sideBar',
    }),
  }
}
</script>

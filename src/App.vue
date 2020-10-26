<template>
  <v-app>
    <v-app-bar app color="primary" dark>
     <v-app-bar-nav-icon></v-app-bar-nav-icon>

     <v-toolbar-title>Vueshop</v-toolbar-title>

     <!-- pemisah konten -->
     <v-spacer></v-spacer>

     <v-btn icon>
      <v-badge color="orange" overlap>
        <template v-slot:badge>
          <span>3</span>
        </template>

        <v-icon>mdi-cart</v-icon>
      </v-badge>
     </v-btn>

     <v-text-field
       slot="extension"
       hide-details
       append-icon="mdi-microphone"
       flat
       label="Search"
       prepend-inner-icon="mdi-magnify"
       solo-inverted
      ></v-text-field>
    </v-app-bar>

    <v-navigation-drawer app>
      Side Menu
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <!-- jika menggunakan vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      Footer
    </v-footer>
  </v-app>
</template>

<script>
export default {
 name: 'App'
}
</script>

<template>
 <v-app>
   <!-- component header -->
   <c-header />

   <!-- component sidebar -->
   <c-side-bar />

   <!-- konten utama -->
   <v-content>
     <v-slide-y-transition mode="out-in">
       <router-view></router-view>
     </v-slide-y-transition>
   </v-content>

   <!-- component footer -->
   <c-footer />
 </v-app>
</template>

<script>
  import CHeader from '@/components/CHeader.vue';
  import CFooter from '@/components/CFooter.vue';
  import CSideBar from '@/components/CSideBar.vue';

  export default {
   name: 'App',
   components: {
     CHeader,
     CFooter,
     CSideBar
   }
  }
</script>

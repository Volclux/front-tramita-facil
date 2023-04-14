<template>
  <HeaderComponent></HeaderComponent>
  <main>
  <MainView></MainView>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import MainView from '@/views/MainView.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    MainView,
    FooterComponent
  }
}
</script>

<template>
   <div class="container">
        <HeaderComponent />
    </div>
    <MainComponent />
    <div class="container">
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";
import MainComponent from "./components/Main/MainComponent.vue";
  
  export default {
    name: "app",
    data() {
        return {

        }
    },
    components: {
    HeaderComponent,
    FooterComponent,
    MainComponent
}
}
  
</script>

<style>
  @import url('./magic-master/magic-master/dist/magic.css');
  @import url('./style.css');

</style>
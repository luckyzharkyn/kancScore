<template>
   <div class="container">
        <HeaderComponent :setInCart="setInCart"/>
    </div>
    <MainComponent :getActiveCart="getActiveCart"/>
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
           getActiveCart: ""
        }
    },
    methods: {
      setInCart(value) {
        this.getActiveCart = value;
        setTimeout(() => {
          this.getActiveCart = "";
        }, 1000);
      },
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
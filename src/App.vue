<template>
   <div class="container">

        <HeaderComponent :getActiveCatalog="getActiveCatalog"/>

    </div>

    <MainComponent :PagesList="PagesList"
                   :ActivePage="ActivePage"
                   :getActiveCatalog="getActiveCatalog"/>

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
            PagesList: {
                    'MainCatalog': true
            },
            ActivePage: 'MainCatalog',
        }
    },
    methods: {
        getActiveCatalog(ActivePage) {
            let Active = ActivePage;    

            if(Active === 'MainCatalog') {
                this.PagesList['MainCatalog'] = true;
            } else {
                this.PagesList['MainCatalog'] = false;
                this.ActivePage = Active;
            }
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
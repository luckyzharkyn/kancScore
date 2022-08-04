<template>
    <main>
        <MainImg />
        <div class="container">
            <div class="main__content" 
                :class="{vanishIn: true}"
                id="main__content">

                <SideBar :getActiveCatalog="getActiveCatalog"/>

                <div class="site_content">

                    <SearchComponent />
                    <MainCatalog v-if="PagesList['MainCatalog']"/>
                    <CatalogsList v-else :ActivePage="ActivePage"/>
                    <MainNews />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import MainImg from "./MainImg.vue";
import SideBar from "./MainContent/SideBar.vue";
import SearchComponent from "./MainContent/SearchComponent.vue";
import MainNews from "./MainContent/MainNews.vue";
import MainCatalog from "./MainContent/MainCatalog.vue";
import CatalogsList from "./MainContent/CatalogsList.vue";

    export default {
        props: {
            getActiveCart: String
        },
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
                if(this.getActiveCart !== '') {
                    Active = this.getActiveCart;
                }

                if(Active === 'MainCatalog') {
                    this.PagesList['MainCatalog'] = true;
                } else {
                    this.PagesList['MainCatalog'] = false;
                    this.ActivePage = Active;
                }
            },
        },
        
        components: {
            MainImg,
            SearchComponent,
            MainNews,
            SideBar,
            MainCatalog,
            CatalogsList
        },
}
</script>
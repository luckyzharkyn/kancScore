<template>
    <main>
        <MainImg />
        <div class="container">
            <div class="main__content" :class="{vanishIn: true}">

                <SideBar :getActiveCatalog="getActiveCatalog"/>

                <div class="site_content">

                    <SearchComponent />
                    <MainCatalog v-if="PagesList['MainCatalog']"/>
                    <CatalogsList v-if="PagesList['CatalogsList']"/>
                    <MainNews />
                        <!-- <router-view>
                        </router-view> -->
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
        data() {
            return {
                PagesList: {
                    'MainCatalog': true,
                    'CatalogsList': false,
                }
                
            }
        },
        methods: {
            getActiveCatalog(ActivePage) {
                let newObj = {...this.PagesList};
                
                for(let key in newObj) {
                    if(key == ActivePage) {
                        newObj = {...newObj, [key]: true}
                    } else {
                        newObj = {...newObj, [key]: false}
                    }
                }
                this.PagesList = newObj;
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
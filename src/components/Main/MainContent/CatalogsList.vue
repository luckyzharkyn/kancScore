<template>
    <div class="main__catalogs" :class="{swap:true}">
        <CatalogOptionsFilters />
        <GoodsList :ListItems="ListItems" />
    </div>
</template>

<script>
import CatalogOptionsFilters from './CatalogList/CatalogOptionsFilters.vue';
import GoodsList from './CatalogList/GoodsList.vue';

    export default {
    data() {
        return {
            ListItems: [
                {
                    id: 22512,
                    src: "https://kanc.kz/1C_base/1cbitrix/import_files/f1/f1c5960e-fe77-11eb-9d5e-000c292560b4.jpeg",
                    alt: "Леска",
                    name: "Леска строительная, 50 м.    ",
                    description: "Леска строительная, намотка катушки 50 метров, толщина 0,8 мм.",
                    price: 180,
                    href: "#"
                },
                {
                    id: 21012,
                    src: "https://kanc.kz/1C_base/1cbitrix/import_files/5c/5c6f9fdf-c0e1-11ea-9d53-000c292560b4.jpeg",
                    alt: "Ковш",
                    name: "Ковш стальной строительный, 160 мм, деревянная ручка",
                    description: "Стальной ковш в форме полусферы с деревянной ручкой. Ручка отшлифована и покрыта бесцветным лаком. Служит для набрасывания штукатурного и цементного раствора при проведении различных ремонтно-строительных работ.",
                    price: 260,
                    href: "#"
                },
            ]
        }
    },
    components: { 
        CatalogOptionsFilters, 
        GoodsList 
    }
}
</script>
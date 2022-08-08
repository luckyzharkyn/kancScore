<template>
    <div class="main__catalogs" :class="getAnimation()">
        <CatalogOptionsFilters v-if="ActivePage !== 'inCart'"/>
        <GoodsList :ListItems="getListItems()" 
                   :setInCart="setInCart"
                   v-if="ActivePage !== 'inCart'"/>
        <CartComponent 
            :ListItems="getListItems()"
            v-else/>
    </div>
</template>

<script>
import CatalogOptionsFilters from './CatalogList/CatalogOptionsFilters.vue';
import GoodsList from './CatalogList/GoodsList.vue';
import CartComponent from './CatalogList/CartComponent.vue';

    export default {
    props: {
        ActivePage: String
    },
    data() {
        return {
            ListItems: {
                'ConstructionMaterials': [
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
                    }
                ],
                'Automotiveproducts': [
                    {
                        id: 14472,
                        src: "https://kanc.kz/1C_base/1cbitrix/import_files/0a/0a2f9a78-4f7f-11e8-82a0-50465d4f781c.jpeg",
                        alt: "Пакеты",
                        name: "Пакеты для шин 900 х1000 18 мкм, для R 13-16, 4 шт. в комплекте  STELS",
                        description: "Описание Пакеты для шин используются для хранения и транспортировки шин. Размер пакета 1000*1000 мм, толщина 18 мкм, используются для шин радиусом 13-16  ",
                        price: 410,
                        href: "#"
                    },
                    {
                        id: 21818,
                        src: "https://kanc.kz/1C_base/1cbitrix/import_files/82/8294ec51-2fc7-11eb-9d5a-000c292560b4.jpeg",
                        alt: "Щетка",
                        name: "Щетка автомобильная Svip, от снега и льда, со скребком, 53см  Svip",
                        description: "Удобная и практичная щетка-скребок предназначена для ухода за автомобилем в зимнее время. С помощью качественной щетины легко и просто убирать снег, а скребок помогает убрать наледь со стеклянных поверхностей.  ",
                        price: 525 ,
                        href: "#"
                    },
                    {
                        id: 14088,
                        src: "https://kanc.kz/1C_base/1cbitrix/import_files/47/47e5b12a-3d4b-11e8-82a0-50465d4f781c.jpeg",
                        alt: "Воронка",
                        name: "Воронка пластмассовая, D 160 мм, гибкий наконечник для горюче-смазочных материалов SPARTA  SPARTA",
                        description: "Описание Воронка изготовлена из пластмассы. Используется для залива горюче-смазочных материалов. Конструкция воронки позволяет выполнять фильтрацию заливаемых жидкостей, также имеется гибкий наконечник для работ в труднодоступных местах.  ",
                        price: 550  ,
                        href: "#"
                    },
                ],
                'Paperandcardboard': [
                    {
                        id: 21599,
                        src: "https://kanc.kz/1C_base/1cbitrix/import_files/cd/cdf573b2-0393-11eb-9d56-000c292560b4.jpeg",
                        alt: "Бумага",
                        name: "Бумага упакоковочная марки Б пл.90, ф.84 (Группа Илим)  Группа Илим",
                        description: "Группа «Илим» — ответственный лесопользователь и лидер добровольной лесной сертификации. Все арендованные компанией лесные участки площадью 6 млн га сертифицированы по стандартам FSC (Forest Stewardship council) и PEFC (Program for the Endorsement of Forest Certification schemes). ... Упаковочная бумага из 100% беленой целлюлозы выпускается трех марок с разными техническими параметрами, обусловленными конечным применением. Марка А — производство ламинированной упаковки, марка Б — мешки и пакеты для сыпучих продуктов (мука, сахар), марка В — влагопрочная бумага (изготавливается по запросу).  ",
                        price: 5000,
                        href: "#"
                    },
                ],
                'paperproducts': [
                    {
                        id: 24413  ,
                        src: "https://kanc.kz/1C_base/1cbitrix/import_files/5a/5a87498a-fe78-11eb-9d5e-000c292560b4.jpeg",
                        alt: "Конверт",
                        name: "Конверт бумажный 125*125 для CD, KurtStrip, декстрин  Курт и К",
                        description: "Бумажный конверт для хранения оптических дисков диаметром 12 см  ",
                        price: 13,
                        href: "#"
                    },
                ],
                'Childrensproducts': [
                    {
                        id: 24933,
                        src: "https://kanc.kz/1C_base/1cbitrix/import_files/bd/bd1ed69e-00cc-11ec-9d5e-000c292560b4.jpeg",
                        alt: "Кубики",
                        name: "Кубики 'Союзмультфильм. Чебурашка', 12шт., Step Puzzle  Step Puzzle",
                        description: "Наборы из 12 кубиков – для тех, кто освоил навык сборки картинки из 9 кубиков. Заложенный дидактический принцип «от простого к сложному» позволит ребёнку поверить в свои силы. А герои популярного мультика Disney сделают кубики любимой игрушкой. Играя  ",
                        price: 924 ,
                        href: "#"
                    },
                ],
                'inCart': []
            }
        }
    },
    methods: {
        getListItems() {
            return this.ListItems[this.ActivePage];
        },
        setInCart(id) {

            for(let key in this.ListItems) {
               if(key !== 'inCart') {
                    this.ListItems[key].map(objItem => {
                        if(objItem.id === id) {
                            this.ListItems['inCart'].push(objItem);
                        }
                    })
               }
            }
        },
        getAnimation() {
            return {swap: true}

        }
    },
    components: {
    CatalogOptionsFilters,
    GoodsList,
    CartComponent
}
}
</script>
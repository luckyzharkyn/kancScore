<template>
    <div class="sidebar">
        <ul>
            <li v-for="(item, index) in catalogList"
                :key="index">
                <a :href="item.href"
                   @click="setActivePage(item.catalogName), setActiveLink(item.catalogName)"
                   :class="getActiveLink(item.catalogName, item.active)">
                   {{item.title}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            getActiveCatalog: Function
        },
        data() {
            return {
                catalogList: [
                    {
                        catalogName: "MainCatalog", 
                        title: 'Каталог', 
                        href: '#main__content', 
                        active: true
                    },
                    {
                        catalogName: "ConstructionMaterials", 
                        title: 'Строительные материалы', 
                        href: '#main__content', 
                        active: false
                    },
                    {catalogName: "Automotiveproducts", title: 'Автомобильные товары', href: '#main__content', active: false},
                    {catalogName: "Paperandcardboard", title: 'Бумага и картон для полиграфии и упаковки', href: '#main__content', active: false},
                    {catalogName: "paperproducts", title: 'Бумажная продукция', href: '#main__content', active: false},
                    {catalogName: "Childrensproducts", title: 'Детские товары', href: '#main__content', active: false},
                    {catalogName: "Childrenscreativity", title: 'Детское творчество', href: '#main__content', active: false},
                    {catalogName: "DemonstrationEquipment", title: 'Демонстрационное оборудование', href: '#main__content', active: false},
                    {catalogName: "Housegarden", title: 'Дом, сад и огород', href: '#', active: false},
                    {catalogName: "Toys", title: 'Игрушки', href: '#', active: false},
                    {catalogName: "Tools", title: 'Инструменты', href: '#', active: false},
                    {catalogName: "beautyandhealth", title: 'Красота и здоровье ', href: '#', active: false},
                    {catalogName: "stationerysets", title: 'Канцелярские наборы ', href: '#', active: false},
                    {catalogName: "Personalhygiene", title: 'Личная гигиена ', href: '#', active: false},
                    {catalogName: "Furnituresafes", title: 'Мебель, сейфы ', href: '#', active: false},
                    {catalogName: "", title: 'Настольные принадлежности ', href: '#', active: false},
                    {catalogName: "", title: 'Новогодняя продукция ', href: '#', active: false},
                    {catalogName: "", title: 'Подарки ', href: '#', active: false},
                    {catalogName: "", title: 'Персональная электроника и телефония ', href: '#', active: false},
                    {catalogName: "", title: 'Посуда, аксессуары для приготовления пищи ', href: '#', active: false},
                    {catalogName: "", title: 'Продукты питания ', href: '#', active: false},
                    {catalogName: "", title: 'Папки, файлы, архивы, портфели, тубусы ', href: '#', active: false},
                    {catalogName: "", title: 'Письменные принадлежности ', href: '#', active: false},
                    {catalogName: "", title: 'Подарочная продукция, аксессуары для праздников ', href: '#', active: false},
                    {catalogName: "", title: 'Средства пожарной безопасности ', href: '#', active: false},
                    {catalogName: "", title: 'Торговое оборудование ', href: '#', active: false},
                ]
            }
        },
        methods: {
            setActivePage(name) {
                this.getActiveCatalog(name);
            },
           setActiveLink(name) {
                this.catalogList = this.catalogList.map(obj => {
                    if(obj.catalogName == name) {
                        return {...obj, active: true}
                    } else {
                        return {...obj, active: false}
                    }
                })
           },
           getActiveLink(name, active) {
                if(name == 'MainCatalog') {
                    return 'Catalog';
                } else {
                    return {active: active}
                }
           }
        }
    }
</script>
<template>
    <div class="sidebar">
        <ul>
            <li v-for="item in catalogList"
                :key="item.id">
                <a :href="item.href" @click="setActivePage(item.CatalogName)">{{item.title}}</a>
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
                    {CatalogName: 'MainCatalog', id: 1, title: 'Catalog', href: '#'},
                    {CatalogName: 'CatalogsList', id: 2, title: 'Строительные материалы', href: '#'},
                    {id: 3, title: 'Автомобильные товары', href: '#'},
                    {id: 4, title: 'Бумага и картон для полиграфии и упаковки', href: '#'},
                    {id: 5, title: 'Бумажная продукция', href: '#'},
                    {id: 6, title: 'Детские товары', href: '#'},
                    {id: 7, title: 'Детское творчество', href: '#'},
                    {id: 8, title: 'Демонстрационное оборудование', href: '#'},
                    {id: 9, title: 'Дом, сад и огород', href: '#'},
                    {id: 10, title: 'Игрушки', href: '#'},
                    {id: 11, title: 'Инструменты', href: '#'},
                    {id: 12, title: 'Красота и здоровье ', href: '#'},
                    {id: 13, title: 'Канцелярские наборы ', href: '#'},
                    {id: 14, title: 'Личная гигиена ', href: '#'},
                    {id: 15, title: 'Мебель, сейфы ', href: '#'},
                    {id: 16, title: 'Настольные принадлежности ', href: '#'},
                    {id: 17, title: 'Новогодняя продукция ', href: '#'},
                    {id: 18, title: 'Подарки ', href: '#'},
                    {id: 19, title: 'Персональная электроника и телефония ', href: '#'},
                    {id: 20, title: 'Посуда, аксессуары для приготовления пищи ', href: '#'},
                    {id: 21, title: 'Продукты питания ', href: '#'},
                    {id: 22, title: 'Папки, файлы, архивы, портфели, тубусы ', href: '#'},
                    {id: 23, title: 'Письменные принадлежности ', href: '#'},
                    {id: 24, title: 'Подарочная продукция, аксессуары для праздников ', href: '#'},
                    {id: 25, title: 'Средства пожарной безопасности ', href: '#'},
                    {id: 26, title: 'Торговое оборудование ', href: '#'},
                ]
            }
        },
        methods: {
            setActivePage(name) {
                this.getActiveCatalog(name);
            }
        }
    }
</script>
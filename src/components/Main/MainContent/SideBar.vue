<template>
    <div class="sidebar">
        <ul>
            <li v-for="(item, index) in catalogList"
                :key="index">
                <router-link :to="item.href">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                catalogList: [
                    {title: 'Catalog', href: '/'},
                    {title: 'Строительные материалы', href: 'ConstructionMaterials'},
                    {title: 'Автомобильные товары', href: '#'},
                    {title: 'Бумага и картон для полиграфии и упаковки', href: '#'},
                    {title: 'Бумажная продукция', href: '#'},
                    {title: 'Детские товары', href: '#'},
                    {title: 'Детское творчество', href: '#'},
                    {title: 'Демонстрационное оборудование', href: '#'},
                    {title: 'Дом, сад и огород', href: '#'},
                    {title: 'Игрушки', href: '#'},
                    {title: 'Инструменты', href: '#'},
                    {title: 'Красота и здоровье ', href: '#'},
                    {title: 'Канцелярские наборы ', href: '#'},
                    {title: 'Личная гигиена ', href: '#'},
                    {title: 'Мебель, сейфы ', href: '#'},
                    {title: 'Настольные принадлежности ', href: '#'},
                    {title: 'Новогодняя продукция ', href: '#'},
                    {title: 'Подарки ', href: '#'},
                    {title: 'Персональная электроника и телефония ', href: '#'},
                    {title: 'Посуда, аксессуары для приготовления пищи ', href: '#'},
                    {title: 'Продукты питания ', href: '#'},
                    {title: 'Папки, файлы, архивы, портфели, тубусы ', href: '#'},
                    {title: 'Письменные принадлежности ', href: '#'},
                    {title: 'Подарочная продукция, аксессуары для праздников ', href: '#'},
                    {title: 'Средства пожарной безопасности ', href: '#'},
                    {title: 'Торговое оборудование ', href: '#'},
                ]
            }
        },
        methods: {

        }
    }
</script>
<template>
    <div class="main__catalogs" :class="{swap:true}">
        <div class="catalog_filter">
            <div>
                <p>Catalog</p>
                <p>Строительные материалы</p>
            </div>
            <div class="filter">

            </div>
            <div class="OptionsChoices">
                <select v-for="(item, index) in settings" v-model="item.options[0]" :key="index">
                    <option v-for="(name, i) in item.options" :key="i">{{name}}</option>
                </select>
            </div>

        </div>
        <div class="List">
            <div class="list_item" v-for="item in ListItems" :key="item.id">
                <div class="list_img">
                    <img :src="item.src" :alt="item.alt">
                </div>
                <div class="list_name">
                    <a :href="item.href">{{item.name}}</a>
                    <p class="list_description">{{item.description}}</p>
                </div>
                <div class="list_dates">
                    <div class="list_dates-header">
                        <p>{{item.id}}</p>
                        <button>
                            in cart
                        </button>
                    </div>
                    <div class="list_dates-footer">
                        {{getPrice(item.price)}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                buttonEnter: null,
                inCart: [],
                selected: "hello",
                settings: [
                    { 
                        options: [
                            'сортировать по',
                            '- по популярности',
                            '- по наименованию'
                        ]
                    },
                    {
                        options: [
                            'выберите бренд',
                            'Kanc.kz',
                            'Сибртех'
                        ]
                    },
                    {
                        options: [
                            'выберите цвет',
                            'желтый',
                            'белый'
                        ]
                    },
                    {
                        options: [
                            'выберите сегмент',
                            'эконом',
                            'бизнес',
                            'премиум'
                        ]
                    },
                    {
                        options: [
                            'показывать 16',
                            'показывать 24',
                            'показывать 32'
                        ]
                    },
                ],
                ListItems: [
                    {
                        id: 22512,
                        src: 'https://kanc.kz/1C_base/1cbitrix/import_files/f1/f1c5960e-fe77-11eb-9d5e-000c292560b4.jpeg',
                        alt: 'Леска',
                        name: 'Леска строительная, 50 м.    ',
                        description: 'Леска строительная, намотка катушки 50 метров, толщина 0,8 мм.',
                        price: 180,
                        href: "#"
                    },
                    {
                        id: 21012,
                        src: 'https://kanc.kz/1C_base/1cbitrix/import_files/5c/5c6f9fdf-c0e1-11ea-9d53-000c292560b4.jpeg',
                        alt: 'Ковш',
                        name: 'Ковш стальной строительный, 160 мм, деревянная ручка',
                        description: 'Стальной ковш в форме полусферы с деревянной ручкой. Ручка отшлифована и покрыта бесцветным лаком. Служит для набрасывания штукатурного и цементного раствора при проведении различных ремонтно-строительных работ.',
                        price: 260,
                        href: "#"
                    },
                ]
            }
        },
        methods: {
            getPrice(price) {
                return price + " тг";
            },
        }
    }
</script>
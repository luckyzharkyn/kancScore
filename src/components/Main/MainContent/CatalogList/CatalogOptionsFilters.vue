<template>
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
</template>

<script>
    export default {
        data() {
            return {
                settings: [
                {
                    options: [
                        "сортировать по",
                        "- по популярности",
                        "- по наименованию"
                    ]
                },
                {
                    options: [
                        "выберите бренд",
                        "Kanc.kz",
                        "Сибртех"
                    ]
                },
                {
                    options: [
                        "выберите цвет",
                        "желтый",
                        "белый"
                    ]
                },
                {
                    options: [
                        "выберите сегмент",
                        "эконом",
                        "бизнес",
                        "премиум"
                    ]
                },
                {
                    options: [
                        "показывать 16",
                        "показывать 24",
                        "показывать 32"
                    ]
                },
            ]
            }
        }
    }
</script>
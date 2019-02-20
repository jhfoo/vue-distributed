<template>
    <v-app>
            App block using module defined in core-bundle: {{today}}
            <v-btn>Button</v-btn>
            <router-view></router-view>
    </v-app>
</template>

<script>
    import {
        dayjs
    } from 'corelib'

    export default {
        name: 'app',
        data: () => {
            return {

            }
        },
        computed: {
            today: function () {
                return dayjs()
            }
        }
    }
</script>
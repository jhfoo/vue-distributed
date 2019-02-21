<template>
    <v-app>
        <v-container>
            <v-layout>
                <v-flex xs4>
                    App block using module defined in core-bundle: {{today}}<br/>
                    Yay! HMR works!
                    <v-btn>Button</v-btn>
                </v-flex>
                <v-flex xs8>
                    <router-view></router-view>
                </v-flex>
            </v-layout>
        </v-container>
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
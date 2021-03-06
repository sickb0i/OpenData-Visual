import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue.darken4,
                secondary: colors.pink.base,
                accent: colors.indigo.base,
                error: colors.red.darken4
            },
            dark: {
                primary: colors.blue.lighten3,
                secondary: colors.pink.lighten3,
                accent: colors.indigo.base,
                error: colors.red.lighten1
            },
        },
    },
});

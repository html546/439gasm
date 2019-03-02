export const state = () => ({
    locales: ['en', 'tc'],
    locale: 'en',
    islogin: false,
    message: {}
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale;
        }
    },
    setLogin(state) {
        state.islogin = true;
    },
    clearLogin(state) {
        state.islogin = false;
    }
}
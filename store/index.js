export const state = () => ({
    locales: ['en', 'tc'],
    locale: 'en',
    // islogin: false,
    message: '',
    page1: 1,
    page2: 1
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale;
        }
    },
    SET_PAGE(state, page) {
        state.page1 = page;
    },
    SET_PAGE2(state, page) {
        state.page2 = page;
    },
    /* setLogin(state) {
        state.islogin = true;
    },
    clearLogin(state) {
        state.islogin = false;
    }, */
    setMessage(state, message) {
        state.message = message;
    },
    clearMessage(state) {
        state.message = '';
    }
}

export const actions = {
    setMessage({ commit }, message) {
        commit('setMessage', message)
    },
    /* setLogin({ commit }) {
        commit('setLogin');
    },
    clearLogin({ commit }) {
        commit('clearLogin');
    }, */
    clearMessage({ commit }) {
        commit('clearMessage');
    }
}
export const state = () => ({
    locales: ['en', 'tc'],
    locale: 'en',
    // islogin: false,
    message: JSON.parse(localStorage.getItem('message')) || '',
    page1: localStorage.getItem('page1') || 1,
    page2: localStorage.getItem('page2') || 1,
    page3: localStorage.getItem('page3') || 1
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale;
        }
    },
    SET_PAGE(state, page) {
        localStorage.setItem('page1', page);
        state.page1 = page;
    },
    SET_PAGE2(state, page) {
        localStorage.setItem('page2', page);
        state.page2 = page;
    },
    SET_PAGE3(state, page) {
        localStorage.setItem('page3', page);
        state.page3 = page;
    },
    /* setLogin(state) {
        state.islogin = true;
    },
    clearLogin(state) {
        state.islogin = false;
    }, */
    setMessage(state, message) {
        localStorage.setItem('message', JSON.stringify(message));
        state.message = message;
    },
    clearMessage(state) {
        localStorage.removeItem('message');
        localStorage.removeItem('page1');
        localStorage.removeItem('page2');
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
/* function getUserMessage({ store }) {
    // if (window.localStorage.getItem("store")) {
    //   this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem("store"))))
    // }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
        //   localStorage.setItem("store", JSON.stringify(this.$store.state))
        if (store.state.message) {
            localStorage.setItem('store', JSON.stringify(store.state.message));
            return store.state.message
        }
    })
    if (window.localStorage.getItem('store')) {
        store.state.message = JSON.parse(window.localStorage.getItem('message'));
    }
    // return store.state.message = json.parse(window.localStorage.getItem('message'))
} */
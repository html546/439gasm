import Vue from 'vue';
function add0(m) { return m < 10 ? '0' + m : m }
let time = {
    install(Vue) {
        Vue.prototype.$time = {
            val: function (val) {
                return format1(val);
            }
        }
    }
}
function add0(m) { return m < 10 ? '0' + m : m }
function format1(shijianchuo) {
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    return y + '-' + add0(m) + '-' + add0(d);
}
Vue.use(time);
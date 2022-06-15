export default {
  install(Vue, a, b) {
    console.log(Vue, a, b);

    // 全局过滤器
    Vue.filter('mySlice', function (val) {
      return val.slice(0, 4)
    })

    // 全局自定义指令
    Vue.directive('fbind', {
      bind(element, binding) {
        console.log('fbind2-bind', this);
        element.value = binding.value;
      },
      inserted(element, binding) {
        element.focus();
      },
      update(element, binding) {
        element.value = binding.value;
      },
    })

    // 全局混入
    Vue.mixin({
      methods: {
        showName() {
          alert(this.name)
        }
      },
    })

    // 给Vue原型上添加一个方法
    Vue.prototype.hello = () => {
      alert('hello')
    }
  }
}

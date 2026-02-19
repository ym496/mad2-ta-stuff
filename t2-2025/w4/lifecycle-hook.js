
// Define a child component to observe its own lifecycle
Vue.component('child-component', {
  template: `<p>This is a child component</p>`,

  beforeCreate() {
    console.log('child: beforeCreate');
  },
  created() {
    console.log('child: created');
  },
  beforeMount() {
    console.log('child: beforeMount');
  },
  mounted() {
    console.log('child: mounted');
  },
  beforeUpdate() {
    console.log('child: beforeUpdate');
  },
  updated() {
    console.log('child: updated');
  },
  beforeDestroy() {
    console.log('child: beforeDestroy');
  },
  destroyed() {
    console.log('child: destroyed');
  }
});

// Main Vue instance
new Vue({
  el: '#app',
  template: `
   <div>
    <h1>{{ message }}</h1>
    <button @click="destroyComponent">Destroy Component</button>
    <child-component v-if="showChild"></child-component>
</div>
  `,
  data() {
    return {
      message: 'Hello Vue!',
      showChild: true
    };
  },
  beforeCreate() {
    console.log('root: beforeCreate');
  },
  created() {
    console.log('root: created');
  },
  beforeMount() {
    console.log('root: beforeMount');
  },
  mounted() {
    console.log('root: mounted');
    setTimeout(() => {
      this.message = 'Updated message!';
    }, 2000);
  },
  beforeUpdate() {
    console.log('root: beforeUpdate');
  },
  updated() {
    console.log('root: updated');
  },
  beforeDestroy() {
    console.log('root: beforeDestroy');
  },
  destroyed() {
    console.log('root: destroyed');
  },
  methods: {
    destroyComponent() {
      this.showChild = false;
    }
  }
});

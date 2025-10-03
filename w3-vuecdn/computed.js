Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({
  el:'#app',
  template: `
   <div>
    <h1> To-do List </h1>
    <input id="todo" v-model="newitem" /> Add another item
    <button @click="addTask"> Submit</button>
    <p> {{newitem}}</p>
   <p> Below are the current items in the list:</p>
<li v-for="item in items" :key="item"> {{item}}
<button @click='deleteTask(item)'> delete</button> 


</li>
  <button-counter></button-counter>
<h1> {{ fullName }} </h1>
</div>
  `,
  data() {
    return {
      newitem: 'hhh',
      items: ['revise','play chess'],
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  methods: {
    addTask() {
      this.items.push(this.newitem);
    },
    deleteTask(task) {
      let index = this.items.indexOf(task);
      this.items.splice(index,1)
    }
  },
  
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }

});



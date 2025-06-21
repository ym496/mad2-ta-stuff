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
</div>
  `,
  data() {
    return {
      newitem: 'hhh',
      items: ['revise','play chess']
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
  
});

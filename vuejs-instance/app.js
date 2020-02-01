Vue.component('hello', {
	template: "<h1>Hello...</h1>"
});

var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value : ' + value);
    }
  }
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'VueJS Instance 2',
  },

  methods: {
  	changeTitle: function(){
  		vm1.title = "Instance 2 Run !"
  	}
  }
});
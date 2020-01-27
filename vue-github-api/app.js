window.addEventListener('load', () => {
	window.vue = new Vue({
		el: "#app",
		data: {
			query: "",
			result: false,
		},
		methods: {
			search: function(){
				fetch(`https://api.github.com/users/${this.query}`)
				.then(result => result.json())
				.then(result => {
					this.$set(this, 'result', result)
				})
			}
		}
	});
})
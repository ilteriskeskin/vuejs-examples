window.addEventListener('load', () => {
	window.vue = new Vue({
		el: "#app",
		data: {
			name: "Ali İlteriş",
			message: "Hello",
			isLoggedIn: false
		},
		methods: {
			login: function(){
				this.isLoggedIn = true;
			},
			logout: function(){
				this.isLoggedIn = false;
			},
		},
	});
})
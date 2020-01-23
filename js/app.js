new Vue({
	el: "#app",
	data: {
		counter: 0,
		x: 0,
		y: 0,
		value: '',
	},
	methods: {
		showAlert : function(name){
			alert(name);
		},
		increaseCounter : function(){
			return this.counter++;
		},
		updateCoords : function(event){
			this.x = event.clientX;
			this.y = event.clientY;
		},
		showAlert2 : function(event){
			alert(event.target.value);
		},
		showAlert3 : function(event){
			this.value = event.target.value;
		}
	}
});
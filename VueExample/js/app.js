new Vue({
	el: "#app",
	data: {
		counter: 0,
		x: 0,
		y: 0,
		value: '',
		name: 'ilteris',
		attachedClass: false,
		color: "green",
		height: 100,
	},
	methods: {
		showAlert : function(name){
			alert(name);
		},
		increaseCounter : function(){
			this.counter++;
		},
		result : function(){
			return this.counter > 10 ? "Counter bigger than 10" : "Counter smaller than 10";
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
		},
	},
	computed: {
		output : function(){
			return this.counter > 10 ? "Counter bigger than 10" : "Counter smaller than 10";
		},
		divClass : function(){
			return {
				yellow: this.attachedClass,
				blue: !this.attachedClass
			}
		},
		customStyle : function(){
			return {
				backgroundColor: this.color,
				height: this.height + "px"
			}
		}
	},
	watch: {
		counter : function(value){
			vm = this;
			setTimeout(function(){
				vm.counter = 0;
			}, 1500);
		}
	},	
});
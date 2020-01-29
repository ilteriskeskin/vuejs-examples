new Vue({
	el: '#app',
	name: 'Age, Gender, Nationality Guess',
	data: {
		query: "",
		resultAge: false,
		resultGender: false,
		resultNationality: false,
	},
	methods: {
		search: function(){
			fetch(`https://api.agify.io?name=${this.query}`)
			.then(resultAge => resultAge.json())
			.then(resultAge => {
				this.$set(this, 'resultAge', resultAge)
			})

			fetch(`https://api.nationalize.io/?name=${this.query}`)
			.then(resultNationality => resultNationality.json())
			.then(resultNationality => {
				this.$set(this, 'resultNationality', resultNationality)
			})

			fetch(`https://api.genderize.io/?name=${this.query}`)
			.then(resultGender => resultGender.json())
			.then(resultGender => {
				this.$set(this, 'resultGender', resultGender)
			})
		}
	}
})
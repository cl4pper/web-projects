<template>
	<div class="test">
		<input type="text" v-model="title">
		<br />
		<h1 v-if="empty">{{ altern }}</h1>
		<h1 v-else>{{ title }}</h1>
		<!-- <span v-html="title"></span> // '<h1>Playing with Vue.Js</h1>' -->
		<p v-if="showAuthor">by {{ user.firstName }} {{ user.lastName }}</p>
		<p v-else>by NONE</p>
		<!-- <p v-text="user.firstName"></p> -->
		<hr />
		<button v-on:click="sayHello( 'Hello, mate.' )">Press Here</button>
		<br />
		<input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterPressed" v-model="returnValue">
		<br />
		<button v-on:click="returnBox">Return</button>
		<hr />
		<label>First Name: <input type="text" v-model="user.firstName"></label>
		<br />
		<label>Last Name: <input type="text" v-model="user.lastName"></label>
		<br />
		<p>{{ fullName }}</p>
		<hr />
		<div>
			<ul>
				<li v-for="sport in sports">{{ sport.title }}</li>
			</ul>
		</div>
		<h2>{{ text }}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Test',
		props: {
			text: {
				type: String,
				default: "Message",
			},
		},
		data() {
			return {
				title: 'Playing with Vue.Js',
				altern: 'Nothing here.',
				returnValue: 'Insert here...',
				user: {
					firstName: "Matts",
					lastName: "Souza",
				},
				showAuthor: true,
				empty: false,
				sports: [
					{ title: "Baseball" },
					{ title: "Football" },
					{ title: "Rugby" },
					{ title: "American Football" },
				],
			}
		},
		methods: {
			sayHello: function(text) {
				alert(text)
			},
			returnBox: function() {
				alert(this.returnValue)
			},
			pressKey: function(e) {
				console.log(e.target.value)
			},
			enterPressed: function(e) {
				alert(e.target.value)
			}
		},
		computed: {
			fullName: function() {
				return this.user.firstName + " " + this.user.lastName
			}
		}
	}
</script>

<style>
	ul {
		list-style-type: none;
	}
</style>
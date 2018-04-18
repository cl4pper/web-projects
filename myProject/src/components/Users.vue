<template>
	<div class="users">
		<h1>{{ title }}</h1>
		<form v-on:submit="addContact">
			<input type="text" v-model="newContact.name" placeholder="Name">
			<br />
			<input type="text" v-model="newContact.phone" placeholder="Phone">
			<br />
			<input class="buttonGreen" type="submit" value="Add Contact" />
		</form>
		<hr />
		<p v-for="contact in contacts">
			<input type="checkbox" class="toggle" v-model="contact.contacted">
			<span :class="{contacted: contact.contacted}">{{ contact.name }}: {{ contact.phone }}</span>
			<button v-on:click="removeContact(contact)">Remove</button>
		</p>
	<!--<ul>
			<li v-for="contact in contacts">
				{{ contact.name }}: {{ contact.phone }}
			</li>
		</ul> -->
	</div>
</template>

<script>
	export default {
		name: 'Users',
		props: {
			title: {
				type: String,
				default: "Users",
			}
		},
		data() {
			return {
				newContact: {},
				contacts: [],
				oldContacts: [
					{
						name: "Matts",
						phone: "9999-9999",
						contacted: false
					},
					{
						name: "Arth",
						phone: "9888-9999",
						contacted: false
					},
					{
						name: "James",
						phone: "9999-8888",
						contacted: false
					},
				],
			}
		},
		methods: {
			addContact: function(e) {
				var msg = "Contact added:\n" + "Name: " + this.newContact.name + "\n" + "Phone: " + this.newContact.phone;
				alert(msg);
				this.contacts.push({
					name: this.newContact.name,
					phone: this.newContact.phone,
					contacted: false,
				})
				e.preventDefault(); // evitar refesh da pagina do form - acao padrao
			},
			removeContact: function(cont) {
				this.contacts.splice(this.contacts.indexOf(cont), 1);
			}
		},
		created: function() { // executado antes da DOM
			// url from jsonplaceholder
			this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
				this.contacts = response.data;
			})
		}
	}
</script>

<style scoped>
	ul {
		list-style-type: none;
	}
	.contacted {
		text-decoration: line-through;
	}
</style>
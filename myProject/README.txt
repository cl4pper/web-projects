This folder contains Vue projects for studying purposes. (font: https://www.youtube.com/watch?v=z6hQqgvGI4Y)

TO START APPLICATION:
(vue init webpack PROJECT_NAME)
1. npm install
2. npm run dev
3. READY TO GO!

TO CHANGE PORT: config/index.js -> port

// CONDITIONALS AND LOOPS
data: {
	show: true,
	users: [
		{ name: "Bob" },
		{ name: "Amanda" }
	]
}
<p v-show="show"> This is show </p>

<p v-if="show">This is show</p>
<p v-else>This is not</p>

<li v-for="user in users"> {{user.name}} </li>

// CLASS AND STYLE BINDINGS
data: {
	isActive: true,
	activeColor: 'red'
}

<div v-bind:class="{active: isActive}"></div>
<div v-bind:style="{color: activeColor}"></div>

// COMPONENTS
Vue.component('my-component', { Template: 'This is my component' })

<div id="app">
	<my-component></my-component>
</div>
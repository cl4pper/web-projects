new Vue({
    el: '#app',
    data: {
        actualEvent: {
            eventDate: "April 23th - 24th",
            eventTitle: "Grandma's birthday",
            eventDescript: "As the event's name says...",
        },
        guestName: "",
        guesttList: [],
        submittedClass: "guestsNot",
    },
    methods: {
        submitForm: function() {
            // para transformar a primeira letra em maiuscula
            var firstUppercase = function( str ) {
                return str[0].toUpperCase() + str.slice(1) //...slice(BEGIN,[END])
            }
            var msg = firstUppercase( this.guestName ) + " inserted."
            //alert(msg)
            this.guesttList.push( firstUppercase( this.guestName ) )
            this.guestName = ""
            if( this.guesttList.length > 0 ) {
                this.submittedClass = "guestsOn"
            } else {
                this.submittedClass = "guestsNot"
            }
        },
        getLength: function( arr ) {
            return arr.length
        },
        removeGuest: function( guest ) {
            this.guesttList.splice( this.guesttList.indexOf( guest ), 1)
            if( !(this.guesttList.length > 0) ) {
                this.submittedClass = "guestsNot"
            }
        }
    }
})

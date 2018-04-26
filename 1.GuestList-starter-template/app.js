new Vue({
    el: '#app',
    data: {
        actualEvent: {
            eventDate: "April 23th - 24th",
            eventTitle: "Grandma's birthday",
            eventDescript: "As the event's name says...",
        },
        backupEventTitle: "Event Title",
        eventTitle: "",
        title: "",
        guestName: "",
        eventDsc: "",
        description: "",
        guesttList: [],
        submittedClass: "guestsNot",
        guestNamePreview: {
            paddingLeft: "20px",
            color: "#c0c0c0"
        },
        guestButton: "card-success rounded name-box pointerCursor",
    },
    methods: {
        submitForm: function() {
            if( this.guestName === "" ) {
                alert( "No name to be added!" )
            } else {
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
            }
        },
        submitTitle: function() {
            this.title = this.eventTitle
        },
        submitDescription: function() {
            this.description = this.eventDsc
        },
        getLength: function( arr ) {
            if( arr.length === 0 ) {
                return "no guests"
            } else {
                return arr.length
            }
        },
        removeGuest: function( guest ) {
            this.guesttList.splice( this.guesttList.indexOf( guest ), 1)
            if( !(this.guesttList.length > 0) ) {
                this.submittedClass = "guestsNot"
            }
        },
        changeStatus: function() {
            return true
        },
    }
})

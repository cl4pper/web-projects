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
        eventDsc: "",
        description: "",
        eventCapacity: 0,
        capacity: 0,
        confirmCapacity: false,
        guestName: "",
        guestList: [],
        submittedClass: "guestsNot",
        guestNamePreview: {
            paddingLeft: "20px",
            color: "#c0c0c0"
        },
        buttonStyle: {
            width: "70px",
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
                this.guestList.push( firstUppercase( this.guestName ) )
                this.guestName = ""
                if( this.guestList.length > 0 ) {
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
        submitCapacity: function() {
            // this.capacity = this.eventCapacity
            if( this.eventCapacity < 0 ) {
                this.confirmCapacity = false
                alert( "Capacity must be equal or over 0." )
            } else {
                this.capacity = this.eventCapacity
                this.confirmCapacity = true
            }
        },
        getLength: function( arr ) {
            if( arr.length === 0 ) {
                return "no guests"
            } else {
                return arr.length
            }
        },
        removeGuest: function( guest ) {
            this.guestList.splice( this.guestList.indexOf( guest ), 1)
            if( !(this.guestList.length > 0) ) {
                this.submittedClass = "guestsNot"
            }
        },
        changeStatus: function() {
            return true
        },
    }
})

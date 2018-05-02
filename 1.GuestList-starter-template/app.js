new Vue({
    el: '#app',
    data: {
        actualEvent: {
            eventDate: "April 23th - 24th",
            eventTitle: "Grandma's birthday",
            eventDescript: "As the event's name says...",
        },
        backupEventTitle: "Event Title",
        confirmTitle: false,
        eventTitle: "",
        title: "",
        confirmDescription: false,
        eventDsc: "",
        description: "",
        confirmCapacity: false,
        eventCapacity: 0,
        capacity: 0,
        name: "",
        invitedList: [],
        attendingList: [],
        trashList: [],
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
            if(this.name === "") {
                alert("No name to be added!")
            } else {
                // para transformar a primeira letra em maiuscula
                var firstUppercase = function(str) {
                    return str[0].toUpperCase() + str.slice(1) //...slice(BEGIN,[END])
                }
                var msg = firstUppercase( this.name ) + " inserted."
                //alert(msg)
                this.invitedList.push(firstUppercase(this.name))
                this.name = ""
                if( this.invitedList.length > 0 ) {
                    if ((this.invitedList.length / this.eventCapacity) >= 1) {
                        this.submittedClass = "fullGuests"
                    } else {
                        this.submittedClass = "guestsOn"
                    }
                } else {
                    this.submittedClass = "guestsNot"
                }
            }
        },
        submitTitle: function() {
            this.title = this.eventTitle
            this.confirmTitle = true
        },
        submitDescription: function() {
            this.description = this.eventDsc
            this.confirmDescription = true
        },
        submitCapacity: function() {
            // this.capacity = this.eventCapacity
            if(this.eventCapacity < 0) {
                this.confirmCapacity = false
                alert("Capacity must be equal or over 0.")
            } else {
                this.capacity = this.eventCapacity
                this.confirmCapacity = true
            }
        },
        getLength: function(arr) {
            if(arr.length === 0) {
                return "no guests"
            } else {
                return arr.length
            }
        },
        moveToAttendence: function(guest) {
            this.attendingList.push(guest)
            this.invitedList.splice( this.invitedList.indexOf(guest), 1)
            if(this.invitedList.length > 0) {
                if ((this.invitedList.length / this.eventCapacity) >= 1) {
                    this.submittedClass = "fullGuests"
                } else {
                    this.submittedClass = "guestsOn"
                }
            } else {
                this.submittedClass = "guestsNot"
            }
        },
        moveToTrash: function(guest, lista) {
            this.trashList.push(guest)
            if(lista === 0) {
                this.invitedList.splice(this.invitedList.indexOf(guest), 1)
            } else {
                this.attendingList.splice(this.attendingList.indexOf(guest), 1)
            }
        },
        deleteGuest: function(guest) {
            this.trashList.splice(this.trashList.indexOf(guest), 1)
        },
        changeStatus: function() {
            return true
        },
    }, // methods
    computed: {
        sortInvitedList: function() {
            return this.invitedList.sort()
        }
    }
})

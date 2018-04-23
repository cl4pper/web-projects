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
    },
    methods: {
        submitForm: function() {
            var msg = this.guestName + " inserted."
            //alert(msg)
            this.guesttList.push(this.guestName)
            this.guestName = ""
            console.log(this.guesttList)
        }
    }
})

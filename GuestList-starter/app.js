var Top = new Vue ({
  el:'#top',
  data: {
    appName: "Guests List",
    links: [
      { name: "Facebook", id: 1, url:"https://www.facebook.com"},
      { name: "Gmail", id: 2, url:"https://www.gmail.com" },
      { name: "Hotmail", id: 3, url:"https://www.hotmail.com" },
    ],
    data: "0/0/0",
  },
  computed: {
    actualDate: function() {
      var date = new Date()
      // Dia
      if(date.getDate() < 10) {
        var dd = "0" + date.getDate()
      } else {
        var dd = date.getDate()
      }
      // Mes
      if(date.getMonth() < 10) {
        var mm = "0" + (date.getMonth() + 1)
      } else {
        var mm = date.getMonth() + 1
      }
      var yy = date.getFullYear()
      return (dd + "/" + mm +"/" + yy)
    },
  },
  methods: {
    changeTitle: function() {
      // this.$refs.title.innerText = "Title changed"
      // this.$refs.title.hide
    }
  }
});

var List = new Vue ({
    el: '#list',
    data: {
        actualEvent: {
            eventDate: "April 23th - 24th",
            eventTitle: "Grandma's birthday",
            eventDescript: "As the event's name says...",
        },
        backupEventTitle: "Event Title",
        date:"",
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
        navItem: {
          fontSize: "25px",
        },
        guestButton: "card-success rounded name-box pointerCursor",
        dd: "",
        mm: "",
        yy: "",
        meses: ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        confirmDay: true,
        confirmMonth: true,
        confirmYear: true,
        day: this.dd,
        mon: this.mm,
        yea: this.yy,
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
        changeDay: function() {
          // alert("Change Day")
          this.confirmDay = false
        },
        changeMonth: function() {
          // alert("Change Month")
          this.confirmMonth = false
        },
        changeYear: function() {
          // alert("Change Year")
          this.confirmYear = false
        },
        confirmDate: function() {
          var date = new Date()
          // usado para dias
          if(this.confirmDay === false) {
            if(this.day > 31) {
              alert("Maximum days in a month: 31")
            } else if (typeof(this.day) === "undefined") {
              this.dd = this.dd
              this.confirmDay = true
            } else if (this.day < 0) {
              // this.dd = this.dd
              // this.confirmDay = true
              alert("Dia incorreto!")
            } else {
              this.dd = this.day
              this.confirmDay = true
            }
          // usado para meses
          } else if (this.confirmMonth === false) {
            if(this.mon > 12) {
              this.mm = this.mm = this.meses[11]
              alert("Máximo de meses permitido: 12")
              this.confirmMonth = true
            } else if (typeof(this.mon) === "undefined" ) {
              this.mm = this.mm
              this.confirmMonth = true
            } else if(this.mon < 0) {
              // this.mm = this.mm
              // this.confirmMonth
              alert("Mes incorreto!")
            } else {
              this.mm = this.meses[this.mon - 1]
              this.confirmMonth = true
            }
          // usado para anos
          } else {
            if(typeof(this.yea) === "undefined") {
              this.yy = this.yy
              this.confirmYear = true
            } else if (this.yea < date.getFullYear()) {
              this.yy = this.yy
              this.confirmYear = true
            } else {
              this.yy = this.yea
              this.confirmYear = true
            }
          }
        },
    }, // methods
    computed: {
        sortInvitedList: function() {
            return this.invitedList.sort()
        },
        actualDate: function() {
          var date = new Date()
          // Dia
          if(date.getDate() < 10) {
            this.dd = "0" + date.getDate()
          } else {
            this.dd = date.getDate()
          }
          // Mes
          this.mm = this.meses[date.getMonth()]
          this.yy = date.getFullYear()
          // return (this.dd + " de " + this.mm +" de " + this.yy)
          // this.date = dd + "/" + mm +"/" + yy
        },
    },
})

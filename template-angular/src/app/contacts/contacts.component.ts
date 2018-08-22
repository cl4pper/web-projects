import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    contact: Contact = {
        id: 1,
        name: "Winston",
        number: "+55 3244-4455",
        address: "Gibraltar Base, Any Ocean"
    }

    constructor() { }

    ngOnInit() {
    }

}

import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    heroName = "Winston";

    constructor() { }

    ngOnInit() {
    }

}

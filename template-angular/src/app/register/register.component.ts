import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    contact: Contact = {
        id: 0,
        name: "Name",
        number: "+00 0000 - 0000",
        address: "Anywhere..."
    }

    constructor() { }

    ngOnInit() {
    }

}

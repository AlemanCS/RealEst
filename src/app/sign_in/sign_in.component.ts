import { Component } from '@angular/core';

import { buttons } from '../buttons';

@Component({
    selector: 'app-top-bar',
    templateUrl: './sign_in.component.html',
    styleUrls: ['./sign_in.component.css']
})

export class SignInComponent{
    buttons = buttons;

}




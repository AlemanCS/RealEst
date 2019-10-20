import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './sign_in.component.html',
  styleUrls: ['./sign_in.component.css']
})
export class SignInComponent {
   
   submitted = false;

   onSubmit() { this.submitted = true; }


   constructor(
       public auth: AuthService) {}

}
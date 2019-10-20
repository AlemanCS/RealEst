import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign_in/sign_in.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:'search',component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'sign_in', component: SignInComponent},
  { path: '**', redirectTo: '/sign_in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

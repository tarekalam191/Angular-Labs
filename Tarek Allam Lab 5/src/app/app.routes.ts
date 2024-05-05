import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [

  {path:'',
  component:HomeComponent

},
{
  path:'login',
  component:LoginComponent
},
{

path:'signup',
component:SignUpComponent
},
{
path:'details/:id',
component:DetailsComponent

},
{
  path:'carte',
  component:CartComponent
},
{
  path:'**',
  component:NotFoundComponent
}
];

import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private router:Router,private productCart:CartServiceService){}
@Input()  allProducts:any=[]
getID(id:string)
{
  this.router.navigate(['details',id])
}
addToCart(prod:any){
this.productCart.pushProductOrIncrement(prod)
}}

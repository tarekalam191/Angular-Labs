import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products:any=''
constructor(private productCart:CartServiceService){


  }
  ngOnInit(){
    this.productCart.getProduct().subscribe((data)=>this.products=data)
  }
  incrementTheProduct(prod:any){
    this.productCart.incrementTheProduct(prod)
  }
  decrementTheProduc(prod:any){
  this.productCart.decrementTheProduct(prod)
  }
  removeProduct(id:any){
this.productCart.removeFromCart(id)
  }
}


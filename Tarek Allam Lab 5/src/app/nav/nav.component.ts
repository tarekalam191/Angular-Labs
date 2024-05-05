import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  count:any=''
constructor(private productLength:CartServiceService){}
ngOnInit(){
this.productLength.getProduct().subscribe(data=>this.count=data.length)
this.productLength.updateCounter(this.count)
}

}

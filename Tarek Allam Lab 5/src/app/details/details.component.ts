import { Component ,Input} from '@angular/core';
import { RequestService } from '../services/request.service';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
productDetails:  any='';
// data2:any='';
products:any='';
@Input() id:string=''
constructor(private requestDetails:RequestService,private productCart:CartServiceService){}
ngOnInit(){
this.requestDetails.getProductDetails(this.id).subscribe((data)=>
  {
    this.productDetails=data
  })
}
pushInProduct()
{
  this.productCart.pushProductOrIncrement(this.productDetails)
console.log(this.productDetails)
}
}

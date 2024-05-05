import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

products:any=[]

constructor(private requestService : RequestService){}
ngOnInit(){
  this.requestService.getProducts().subscribe((data)=>this.products=data)
}
}


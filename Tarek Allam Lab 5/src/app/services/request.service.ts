import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get('https://dummyjson.com/products')
  }
  getProductDetails(id:any){
    return this.http.get(`https://dummyjson.com/products/${id}`)

  }
}

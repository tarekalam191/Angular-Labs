import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private counter=new BehaviorSubject<number>(0)
  private addProduct=new BehaviorSubject<any[]>([])
  constructor(){}
  getCounter(){
    return this.counter.asObservable()
  }
  updateCounter(value:number ){
    this.counter.next(value )
  }
  pushProductOrIncrement(val: any) {

    const currentProducts = this.addProduct.getValue();
    const existProduct = currentProducts.findIndex(product =>
      product.id === val.id
    );


    if (existProduct !== -1) {

      const updatedProducts = [...currentProducts];
      if(updatedProducts[existProduct].quantity >= updatedProducts[existProduct].stock){
        return
      }
      updatedProducts[existProduct].quantity++;
      this.addProduct.next(updatedProducts);
    } else {

      const updatedProducts = [...currentProducts, { ...val, quantity: 1 }];
      this.addProduct.next(updatedProducts);
    }
  }
  incrementTheProduct(val:any){
    const currentProducts = this.addProduct.getValue();

const existProduct = currentProducts.findIndex(product =>
      product.id === val.id
    );
    const updatedProducts = [...currentProducts];
    if(updatedProducts[existProduct].quantity >= updatedProducts[existProduct].stock){
      return
    }
    updatedProducts[existProduct].quantity++
    this.addProduct.next(updatedProducts)
  }
  decrementTheProduct(val: any) {
    const currentProducts = this.addProduct.getValue();

    const existProductIndex = currentProducts.findIndex(product =>
      product.id === val.id
    );

    if (existProductIndex !== -1) {
      const updatedProducts = [...currentProducts];
      if (updatedProducts[existProductIndex].quantity > 0) {
        updatedProducts[existProductIndex].quantity--;
      }

      this.addProduct.next(updatedProducts);
    }
  }


  removeFromCart(id: any) {
    const currentProducts = this.addProduct.getValue();
    const updatedProducts = currentProducts.filter((product: any) => product.id !== id);
    this.addProduct.next(updatedProducts);
  }




  getProduct(){
    return this.addProduct.asObservable()
  }
}

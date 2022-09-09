import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { Product } from 'src/app/contracts/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    
    this.httpClientService.get<Product[]>({
      controller:"products"
    }).subscribe(data=>console.log(data));

    /* this.httpClientService.post({
      controller:"products"
    },{
      name:"Kalem",
      stock:100,
      price:15
    }).subscribe(); */

    /* this.httpClientService.put({
      controller:"products",
    },{
      id:"10871962-2ce2-4181-b38e-5c1d5ccff2bc",
      name:"Renkli Kağıt",
      stock:100,
      price:5.5
    }).subscribe(); */
    
    /* this.httpClientService.delete({
      controller:"products"
    },"10871962-2ce2-4181-b38e-5c1d5ccff2bc").subscribe(); */

    /* this.httpClientService.get({
      fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
    }).subscribe(data=>console.log(data)); */
  }

}

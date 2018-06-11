import { Component, OnInit } from '@angular/core';
import { productsServise } from '../product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private prodDetails: {id: number, title: string, description: string, imgPath: string, rating: number, price: number}[] = [];
  private cnt: number;
  constructor(private prodService: productsServise) { }

  ngOnInit() {    
    this.prodDetails = this.prodService.getProduct();    
  }
  
}

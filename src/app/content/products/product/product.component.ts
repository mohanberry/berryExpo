import { Component, OnInit } from '@angular/core';
import { productsServise } from '../../product.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private prodDetails: {id: number, title: string, description: string, imgPath: string, rating: number, price: number}[] = [];

  constructor(private prodService: productsServise) { }

  ngOnInit() {    
    this.prodDetails = this.prodService.getProduct();    
  }
}

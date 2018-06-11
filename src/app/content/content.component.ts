import { Component, OnInit } from '@angular/core';
import { productsServise } from './product.services';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private prodService: productsServise) { }

  ngOnInit() {
  }

}

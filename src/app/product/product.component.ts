import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service'
import { Product } from '../interface/product'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product:Product = {
    id : "",
    name: "",
    color : ""
  };

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit() {
  }

  addProduct() {
    this.productsService.addProducts(this.product).subscribe(()=> this.router.navigate(['/']))
  }

}

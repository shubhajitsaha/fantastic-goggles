import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductsService } from '../service/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  products:Product[] = [];  

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  update(id:string) {
    
  }

  delete(id:string) {
    if(confirm("Are you sure?")) {
      this.productsService.deleteProducts(id).subscribe(
        () => {this.fetchProducts();}
      )
    }
  }

  private fetchProducts() {
    this.productsService.fetchProducts().subscribe(
      (products: Product[]) => {this.products = products}
    )
  }

}

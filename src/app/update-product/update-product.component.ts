import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service'
import { Product } from '../interface/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  public product:Product = {
    id : "",
    name: "",
    color : ""
  };

  constructor(private router: Router, private route:ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((param)=>{
      this.fetchProducts(param['id']);
    });
  }

  updateProduct() {
    this.productsService.updateProducts(this.product).subscribe(()=> this.router.navigate(['/']))
  }

  private fetchProducts(id:string) {
    this.productsService.fetchProducts().subscribe(
      (products: Product[]) => {
        let filteredProducts:Product[] = products.filter(p=>p.id == id);
        if(filteredProducts.length > 0) {
          this.product = filteredProducts[0];
        }
      }
    )
  }
}

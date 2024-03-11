import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-pipeline-new',
  templateUrl: './pipeline-new.component.html',
  styleUrls: ['./pipeline-new.component.css'],
})
export class PipelineNewComponent implements OnInit {
  searchTerm: string = '';
  originalString: string = 'Angular Pipes Example';
  currentDate: Date = new Date();
  price: number = 50.25;
  number: number = 12345.6789;
  percentage: number = 0.75;
  object: any = { name: 'Angular', version: '12.2.0' };
  products: any[] = []; // Define your products array here
  productsapi: any[] = [];
  searchTermapi: string = '';
  constructor(private router: Router,private productService: ProductService) {}

  ngOnInit(): void {
    this.products = [
      { name: 'Product 1', price: 10 },
      { name: 'Product 2', price: 20 },
      { name: 'Product 3', price: 30 },
    ];
    this.fetchProducts();
  }
  
  fetchProducts(): void {
  this.productService.getProducts().subscribe(
    (products) => {
      this.productsapi = products;
    },
    (error) => {
      console.error('Error fetching products:', error);
    }
  );
}
  nextPage() {
    this.router.navigate(['decorator']);
  }
}

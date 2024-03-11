import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../service/product.service';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css'],
})
export class PipelineComponent implements OnInit {
  originalString: string = 'Hello World';
  currentDate: Date = new Date();
  price: number = 123.456;
  number: number = 789.123;
  percentage: number = 0.75;
  object: any = { name: 'John', age: 30 };
  searchTerm: string = '';
  products: any[] = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  nextPage(): void {
    this.router.navigate(['decorator']);
  }
}

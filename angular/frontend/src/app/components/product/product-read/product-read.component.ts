import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]; // array de produtos já criados no backend

  constructor(private productService: ProductService, private router: Router) { }

  // método de inicialização do componente
  // bom lugar para carregar os produtos do backend
  ngOnInit(): void {
    this.productService.read().subscribe(products => { // resposta do backend
      this.products = products; // atribuir a resposta do backend (lista) ao array de products.
    })
  }
}
  
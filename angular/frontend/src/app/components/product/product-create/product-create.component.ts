import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // está sendo alterado dinamicamente no formulário pelo ngModel
  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  // responsável por renderizar o snackBar no componente atual com mensagem específica.
  createProduct(): void {

    const stringLength = this.product.name.length;

    if (stringLength >= 10 && this.product.price) {
      
      this.productService.create(this.product).subscribe(() => { // subscride é quando ocorre a resposta do backend bem sucedida
        this.productService.showMessage('Produto criado!'); // gero a mensagem de produto criado
        this.router.navigate(['/products']); // navego para a tela de produtos
      });
     
    }
    else {
      this.productService.showMessage('Parâmetros de produtos ausentes e/ou inválidos', true)
    }
  
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}

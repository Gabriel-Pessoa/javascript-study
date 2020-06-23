import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importando Router para criar rota a partir do botão
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  
  // conceito de injeção de classe. Injetei o objeto Router (classe), no constructor da minha classe. Disponibilizando os metódos e atributos da superclasse Router.
  // E qualquer alteração na superclasse gera automaticamente mudanças na minha classe, sem precisar de alteração.

  // O Angular cria um instancia dessa classe, disponibilizando os métodos internos. Evento do click dispará evento de navegação.
  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routerUrl: '/products'
    }
  } 

  ngOnInit(): void {
   
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

}

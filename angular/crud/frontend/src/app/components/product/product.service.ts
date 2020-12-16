import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; //Snackbars fornecem mensagens breves sobre os processos de aplicativos.
import { HttpClient } from '@angular/common/http'; // cliente http para chamada api
import { Product } from './product.model'; // interface de propriedades do objeto produto para a tipagem.
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // responsável por criar o snackBar e posicionar
  showMessage(msg: string, isError: boolean = false): void {
    //configurando snackBar
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  // responsável por criar produto no backend.
  // o retorno é um observable disparado pela evento de resposta do backend
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURl, product).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  // retorna a lista de produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURl).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  // função que retorna produto por id
  readById(id: number): Observable<Product> {
    const baseUrlId = `${this.baseURl}/${id}`;
    return this.http.get<Product>(baseUrlId).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  //função que altera produto
  update(product: Product): Observable<Product> {
    const baseUrlProduct = `${this.baseURl}/${product.id}`
    return this.http.put<Product>(baseUrlProduct, product).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  // função que deleta um produto específico
  delete(id: number): Observable<Product> {
    const url = `${this.baseURl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  // função de tratamento de erro
  handleError(e: any): Observable<any> {
    console.log(e) // mostra erro detalhado no console
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY; // observable vazio.
  }

}

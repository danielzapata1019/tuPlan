import { Component, OnInit } from '@angular/core';
import { Categorias } from '../../categorias';
import { CategoriesService } from './categories.service';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  theimage:string='Hi';
  selectedCategoria:Categorias;
  constructor(private http:CategoriesService) { }

  ngOnInit() {
  }
  onSelect(categoria: Categorias): void {
    this.selectedCategoria = categoria;
    this.http.getCategoerias().subscribe(t => console.log(t));
  }

}

import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      a:hover{
        background-color:#0d6efd;
        color:white;
        cursor:pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  placeholder: string = 'Buscar por pais...';
  hayError: boolean = false;
  haySugerencias: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  
  constructor( private paisService: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.haySugerencias = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paisesSugeridos = paises.splice(0,3);
        this.haySugerencias = true;
      }, (err) => {
        this.paisesSugeridos = [];
        this.haySugerencias = false;
      }
    )

  }
}

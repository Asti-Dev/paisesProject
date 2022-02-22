import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( (params) => 
        this.paisService.buscarPaisPorCodigo(params.id),
      ),
      tap(
        console.log
      )
    ).subscribe( pais => this.pais = pais[0] );

      // this.activatedRoute.params
      // .subscribe( params => {
      //   console.log(params.id);
      //   this.paisService.buscarPaisPorCodigo(params.id)
      //   .subscribe(
      //     resp => {
      //       console.log(resp);
      //     }
      //   )
      // })
  }

}

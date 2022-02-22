import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,population,cca3,flags')
  }

  constructor( 
    private http: HttpClient,
  ) { }

  buscarPais( nombrePais: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ nombrePais }`

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisPorCapital( nombreCapital: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ nombreCapital }`

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarPaisPorCodigo( codigoPais: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/alpha/${ codigoPais }`

    return this.http.get<Country[]>(url);
  }

  buscarPorRegion(region: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/region/${ region }`

    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  
}

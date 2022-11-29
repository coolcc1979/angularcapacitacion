import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.com/v3.1/lang/spa')
      .pipe(
        map((response: any) => {
          return response.map((x: any) => {
            return {
              name: x.name.common,
              code: x.cca3
            }
          })
        })
      );
  }
}

import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ConsumingUnit } from '../model/consuming-unit.model';

@Injectable({
  providedIn: 'root'
})
export class ConsumingUnitService {

  apiUrl = 'http://localhost:8080/consuming-units';

  httpOptions =  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getConsumingUnits(): Observable<ConsumingUnit[]> {
    return this.httpClient.get<ConsumingUnit[]>(this.apiUrl);
  }
}

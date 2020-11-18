import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CommandItem } from '../model/command-item.model';

@Injectable({
  providedIn: 'root'
})
export class CommandItemService {

  apiUrl = 'http://localhost:8080/command-items';

  httpOptions =  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getCommandItems(): Observable<CommandItem[]> {
    return this.httpClient.get<CommandItem[]>(this.apiUrl);
  }

  public postCommandItem(commandItem: CommandItem, id: number):Observable<any>{
    return this.httpClient.post<CommandItem>(this.apiUrl.concat("/consumingUnit/").concat(id.toString()), commandItem, this.httpOptions)
  }
}

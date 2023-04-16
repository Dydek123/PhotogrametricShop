import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  public static API_URL = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {
  }

  getAll(url: string, params?: HttpParams): Observable<T[]> {
    return this.http.get<T[]>(ApiService.API_URL + url, {params});
  }

  getById(url: string, id: number): Observable<T> {
    return this.http.get<T>(ApiService.API_URL + url + '/' + id);
  }

  save(url: string, data: T): Observable<T> {
    return this.http.post<T>(ApiService.API_URL + url, data);
  }
}

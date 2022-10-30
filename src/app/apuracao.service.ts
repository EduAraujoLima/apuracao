import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './models/models.interface';

@Injectable({
  providedIn: 'root'
})
export class ApuracaoService {
  readonly url = `https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json`;
  constructor(private http: HttpClient) { }

  getApuracao() {
    return this.http.get<RootObject>(this.url);
  }
}

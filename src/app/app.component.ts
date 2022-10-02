import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApuracaoService } from './apuracao.service';
import { RootObject } from './models/models.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  Number(
    arg0: string | undefined
  ): import('@angular/cdk/coercion').NumberInput {
    throw new Error('Method not implemented.');
  }
  title = 'apuracao';
  resultados$: Observable<RootObject> | undefined;
  porcentagemTotal = 0;
  constructor(private apuracaoService: ApuracaoService) {}
  ngOnInit(): void {
    this.refresh()
  }

  refresh() {
    this.resultados$ = this.apuracaoService
      .getApuracao()
      .pipe(tap((res) => {
        this.porcentagemTotal = Number(res.psi.replace(',', '.'));
        console.log(this.porcentagemTotal)
      }));
  }
}

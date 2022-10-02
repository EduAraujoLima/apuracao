import { Component, OnInit } from '@angular/core';
import { Cand } from '../models/models.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-candidato-card',
  templateUrl: './candidato-card.component.html',
  styleUrls: ['./candidato-card.component.css']
})
export class CandidatoCardComponent implements OnInit {
  @Input() candidato: Cand | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

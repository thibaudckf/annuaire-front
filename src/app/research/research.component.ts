import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../contact/Personne';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  contacts:Personne[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  
}

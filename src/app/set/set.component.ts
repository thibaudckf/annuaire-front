import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Personne } from '../contact/Personne';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {

  id!: number;
  contact!: Personne;
  
 
  
  

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router) { 
                
              }

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getById(this.id).subscribe(
      (contact) => this.contact = contact,
      (erreur) => console.log(erreur)
    );
    
  }

  setPersonne(id: number, formumaire: NgForm) {
    this.apiService.setContact(id, formumaire.value).subscribe(
      (reponse) => this.router.navigate(['/liste']),
      (erreur) => console.log(erreur)
    );
  }

}

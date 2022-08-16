import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Personne } from './Personne';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts!: Observable<Personne[]>;

  constructor(private apiService: ApiService,
              private router: Router){}

  ngOnInit(){  
    this.contacts = this.apiService.getAllContacts();
  }

  public deleteContact(id: number){
    this.apiService.deleteContact(id).subscribe(
      (reponse) => this.router.navigate(['']),
      (erreur) => console.log(erreur)
    );
    window.location.reload();
  }

  public setContact(id: number){
    this.router.navigate([`/set/${id}`]);
  }

}

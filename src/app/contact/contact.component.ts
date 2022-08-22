import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Contact } from "./Personne";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts!: Observable<Contact[]>;


  constructor(private apiService: ApiService,
              private router: Router){}

  ngOnInit(){  
    this.contacts = this.apiService.getAllContacts();
  }

  public deleteContact(id: number){
    this.apiService.deleteContact(id).subscribe();
    window.location.reload();
  }

  public redirectForUpdate(id: number, contact:Contact){
    this.router.navigate([`/set/${id}`]);
  }

  

}

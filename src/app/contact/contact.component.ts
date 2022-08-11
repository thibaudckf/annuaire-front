import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Personne } from './Personne';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts!: Observable<Personne[]>;

  constructor(private apiService: ApiService){}

  ngOnInit(){
    
    this.contacts = this.apiService.getAllContacts();
   
  
  }

}

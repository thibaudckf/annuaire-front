import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';
import { Personne } from '../contact/Personne';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  contacts:Personne[] = [];
  critere!:string;
  chaine!:string;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    
    this.critere = String(this.route.snapshot.paramMap.get('crit'));
    this.chaine = String(this.route.snapshot.paramMap.get('ch'));

    if(this.critere=="prenom"){
      this.getByFirstName();
    }else if(this.critere=="nom"){
      this.getByName();
    }else if(this.critere=="numero"){
      this.getByNum();
    }
  }

  public getByFirstName(){
    this.apiService.getByFirstName(this.chaine).subscribe(
      (contacts) => {
        this.contacts = contacts;
      }
    );
  }

  public getByName(){
    this.apiService.getByName(this.chaine).subscribe(
      (contacts) => {
        this.contacts = contacts;
      }
    );
  }

  public getByNum(){
    this.apiService.getByNum(this.chaine).subscribe(
      (contacts) => {
        this.contacts = contacts;
      }
    );
  }

  public deleteContact(id: number){
    this.apiService.deleteContact(id).subscribe(
      (reponse) => this.router.navigate(['']),
      (erreur) => console.log(erreur)
    );
    window.location.reload();
  }

  public redirectForUpdate(id: number, contact:Personne){
    this.router.navigate([`/set/${id}`]);
  }

  
}

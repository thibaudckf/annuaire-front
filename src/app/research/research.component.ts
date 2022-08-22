import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact/Personne';
import { ApiService } from '../services/api.service';

@Component({
	selector: 'app-research',
	templateUrl: './research.component.html',
	styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

	contacts:Contact[] = [];
	critere!:string;
	chaine!:string;

	constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router) { }

	ngOnInit(): void {
    
		this.critere = String(this.route.snapshot.paramMap.get('critere'));
		this.chaine = String(this.route.snapshot.paramMap.get('chaine'));

		if(this.critere=='firstname'){
			this.getByFirstName();
		}else if(this.critere=='name'){
			this.getByName();
		}else if(this.critere=='phone'){
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
			() => this.router.navigate(['']),
			(erreur) => console.log(erreur)
		);
		window.location.reload();
	}

	public redirectForUpdate(id: number){
		this.router.navigate([`/set/${id}`]);
	}

  
}

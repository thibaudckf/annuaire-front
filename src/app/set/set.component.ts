import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact/Personne';
import { ApiService } from '../services/api.service';


@Component({
	selector: 'app-set',
	templateUrl: './set.component.html',
	styleUrls: ['./set.component.scss'],
})
export class SetComponent implements OnInit {

	id!: number;
	contact!: Contact;
   

	constructor(private readonly apiService: ApiService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) { 
                
	}

	ngOnInit(): void {
		this.id = Number(this.route.snapshot.paramMap.get('id'));
		this.apiService.getById(this.id).subscribe(
			(contact) => this.assignResult,
			(erreur) => console.log(erreur),
		);
    
	}

	assignResult(res: any){
		this.contact = res;
	}

	setContact(id: number, formumaire: NgForm) {
		this.apiService.setContact(id, formumaire.value).subscribe(
			() => this.router.navigate(['/liste']),
			(erreur) => console.log(erreur),
		);
	}

}

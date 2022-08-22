import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import {NgForm} from '@angular/forms';


@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent{

	constructor(private apiService: ApiService,
              private router: Router) 
	{ }


	addContact(form: NgForm) {
		this.apiService.addContact(form.value).subscribe(
			() => this.router.navigate(['/liste']),
			(erreur) => console.log(erreur)
		);
	}

}

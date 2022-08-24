import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss'],
})
export class AddComponent{

	constructor(private readonly apiService: ApiService,
              private readonly router: Router) { }


	addContact(form: NgForm) {
		this.apiService.addContact(form.value).subscribe(
			() => this.router.navigate(['/liste']),
			(erreur) => console.log(erreur),
		);
	}

}

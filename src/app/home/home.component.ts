import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent{

	ngSelect = 'firstname';

	constructor(private router: Router) { }


	public redirectForSearch(form: NgForm){
		this.router.navigate([`/recherche/critere/${form.value.critere}/chaine/${form.value.research}`]);
	}

}

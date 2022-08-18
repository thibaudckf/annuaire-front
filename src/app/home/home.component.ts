import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngSelect = "prenom";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redirectForSearch(form: NgForm){
    console.log(form.value.critere); 
 
    this.router.navigate([`/recherche/critere/${form.value.critere}/chaine/${form.value.recherche}`]);
    
      
  }

}

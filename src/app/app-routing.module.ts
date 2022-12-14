import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResearchComponent } from './research/research.component';
import { SetComponent } from './set/set.component';


const routes: Routes = [
	{
		path: '', 
		component: HomeComponent,
	},
	{
		path: 'not-found', 
		component: NotFoundComponent,
	},
	{
		path: 'liste', 
		component: ContactComponent,
	},
	{
		path: 'add', 
		component: AddComponent,
	},
	{
		path: 'set/:id', 
		component: SetComponent,
	},
	{
		path: 'recherche/critere/:critere/chaine/:chaine', 
		component: ResearchComponent,
	},
	{
		path: '**', 
		component: NotFoundComponent,
	},
  
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }

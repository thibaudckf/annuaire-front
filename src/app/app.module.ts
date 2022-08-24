import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AddComponent } from './add/add.component';
import { SetComponent } from './set/set.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';



@NgModule({
	declarations: [
		AppComponent,
		ContactComponent,
		NotFoundComponent,
		AddComponent,
		SetComponent,
		HomeComponent,
		ResearchComponent,
   
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatCardModule,
		AppRoutingModule,
		MatInputModule,
		FormsModule,
		MatSidenavModule,
		MatPaginatorModule,
		NgxPaginationModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }

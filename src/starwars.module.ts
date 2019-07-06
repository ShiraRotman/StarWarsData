import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CreaturesComponent } from './creatures.component';

@NgModule
({
	declarations: [CreaturesComponent],
	imports: [BrowserModule,HttpClientModule], providers: [],
	bootstrap: [CreaturesComponent]
})
export class StarWarsModule { }
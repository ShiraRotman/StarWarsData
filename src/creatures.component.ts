import { Component,OnInit } from '@angular/core';
import { StarWarsService } from './starwars.service';
import { Creature } from './creature';

@Component
({
	selector: 'sw-creatures',
	templateUrl: './creatures.component.html'
})

export class CreaturesComponent implements OnInit
{
	creatures: Creature[]=null; favored=new Set();
	page: number=1; maxpage: number=0;
	errorText: string=null; fetching: boolean=false;
	
	constructor(private service: StarWarsService) { }
	ngOnInit() { this.fetchCreatures(); }
	
	trackByName(index: number,creature: Creature): string 
	{ return creature.name; }
	
	fetchCreatures()
	{
		this.fetching=true;
		this.service.getCreatures(this.page,data=>
		{
			this.creatures=data.results;
			if (this.maxpage==0)
				this.maxpage=Math.ceil(data.count/data.results.length);
			this.fetching=false;
		},error=>this.errorText=error);
	}
	
	dataRowClicked(creatureName: string)
	{
		if (this.favored.has(creatureName)) this.favored.delete(creatureName);
		else this.favored.add(creatureName);
	}
}
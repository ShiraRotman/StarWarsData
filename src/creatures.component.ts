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
	creatures: Creature[]=null;
	page: number=1; maxpage: number=0;
	
	constructor(private service: StarWarsService) { }
	ngOnInit() { this.fetchCreatures(); }
	
	trackByName(index: number,creature: Creature): string 
	{ return creature.name; }
	
	fetchCreatures()
	{ 
		this.service.getCreatures(this.page,data=>
		{
			this.creatures=data.results;
			if (this.maxpage==0)
				this.maxpage=data.count/data.results.length+1;
		},null);
	}
}
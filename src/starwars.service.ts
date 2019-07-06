import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { properties } from './properties';

@Injectable({providedIn: 'root'})
export class StarWarsService
{
	constructor(private http: HttpClient) { }
	
	getCreatures(page: number=1,success,failure)
	{
		if (page<0)
			throw new RangeError(`The page number must be positive! You supplied ${page}.`);
		this.http.get(`${properties.apiaddress}species/?page=${page}`).subscribe(success,failure);
	}
}
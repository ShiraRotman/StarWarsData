import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { properties } from './properties';

@Injectable({providedIn: 'root'})
export class StarWarsService
{
	constructor(private http: HttpClient) { }
	
	getCreatures(page: number=1,success,failure)
	{
		if (page<0)
			throw new RangeError(`The page number must be positive! You supplied ${page}.`);
		const failcallback=(failure?this.fetchFailed.bind(this,failure):null);
		this.http.get(`${properties.apiaddress}species/?page=${page}`).subscribe(success,failcallback);
	}
	
	private fetchFailed(failure,response: HttpErrorResponse)
	{
		let errorText: string;
		if (response.error instanceof ErrorEvent)
			errorText=response.error.message;
		else errorText=response.message;
		failure(errorText);
	}
}
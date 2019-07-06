import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { StarWarsModule } from './starwars.module';

platformBrowserDynamic().bootstrapModule(StarWarsModule).catch(err=>console.log(err));
import { AppService, Movie } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getMovies(): Movie[];
}

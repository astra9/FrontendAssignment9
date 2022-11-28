import { Observable } from "rxjs";
import { Injectable,Inject,InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "./Category";
import { MenuItems } from "./MenuItems";

export const URL= new InjectionToken("url");
export const URL_CATEGORIES=new InjectionToken("url-categories");

@Injectable()
export class HttpDataSource {
    constructor(private http: HttpClient, 
        @Inject(URL) private url:string,
        @Inject(URL_CATEGORIES) private url_categories:string){}
    
    getAllCategories(): Observable<Category[]>{
        return this.http.get<Category[]>(this.url_categories);
    }

    getItemsForCategory(categoryShortName: string):Observable<MenuItems>{
        return this.http.get<MenuItems>(this.url+categoryShortName+'.json');
    }
}
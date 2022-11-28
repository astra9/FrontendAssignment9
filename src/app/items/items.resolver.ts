import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { HttpDataSource } from "../RESTdata/HTTPclient";

@Injectable({
    providedIn:'root'
})
export class ItemsResolver implements Resolve<any>{
    constructor(private httpClient: HttpDataSource){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.httpClient.getItemsForCategory(route.params["category"]);
    }
}
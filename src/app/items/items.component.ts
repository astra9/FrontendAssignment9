import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "../RESTdata/MenuItem";

@Component({
    selector: "items-component",
    templateUrl: "./items.template.html"
})
export class Items{
    public category: string ="";
    private menuItems: MenuItem[]=Array<MenuItem>();
    
    constructor(private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        this.activatedRoute.data.subscribe(data =>{
            let tmpData =  data['items'];
            this.category = this.activatedRoute.snapshot.params['category'];
            let tmpMenuItems = new Array<MenuItem>();
                for(let i=0; i<tmpData.menu_items.length; i++){
                    let tmpItem=new MenuItem(
                        tmpData.menu_items[i].id,
                        tmpData.menu_items[i].short_name,
                        tmpData.menu_items[i].name,
                        tmpData.menu_items[i].description,
                        tmpData.menu_items[i].price_small,
                        tmpData.menu_items[i].price_large,
                        tmpData.menu_items[i].small_portion_name,
                        tmpData.menu_items[i].large_portion_name
                    )
                    tmpMenuItems.push(tmpItem);
                }
                this.menuItems = [...tmpMenuItems];
        })
    }

    getItems(){
       return this.menuItems;
    }
}
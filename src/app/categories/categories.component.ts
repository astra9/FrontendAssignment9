import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Category } from "../RESTdata/Category";

@Component({
    selector: "categories-component",
    templateUrl: "./categories.template.html"
})
export class Categories{
    constructor(private activatedRoute:ActivatedRoute ){
    }
    public categories: Category[]= new Array<Category>();

    ngOnInit(){
        this.activatedRoute.data.subscribe(data=>{
            let tmpData=data['categories'];
            for(let i=0; i<tmpData.length; i++){
                let tmpCategory=tmpData[i];
                let newCategory=new Category(tmpCategory.id,
                    tmpCategory.short_name, 
                    tmpCategory.name, 
                    tmpCategory.special_instructions, 
                    tmpCategory.url);
                this.categories.push(newCategory);
            }
        });
    }

    getCategories(){
        return this.categories;
    }
}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
    declarations:[
        SearchComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule
    ],
    exports:[
        SearchComponent
    ]
})

export class SearchModule {

}
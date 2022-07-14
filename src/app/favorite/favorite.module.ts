import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FavoriteComponent } from "./favorite.component";

@NgModule({
    declarations:[
        FavoriteComponent
    ],
    imports:[
        CommonModule
    ],
    exports: [
        FavoriteComponent
    ]
})

export class FavoriteModule {

}
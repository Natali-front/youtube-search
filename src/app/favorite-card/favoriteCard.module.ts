import { NgModule } from "@angular/core";
import { FavoriteCardComponent } from "./favoriteCard.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
        FavoriteCardComponent
    ],
    imports: [
        SharedModule,
        CommonModule

    ],
    exports: [
        SharedModule,
        FavoriteCardComponent
    ]
})


export class FavoriteCardModule {

}
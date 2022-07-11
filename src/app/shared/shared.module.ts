import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SafePipe } from "../pipes/safe.pipe";
import { StylefavDirective } from "../directives/stylefav.directive";




@NgModule({
    declarations:[
    SafePipe,
    StylefavDirective
    ],
    exports:[
        FontAwesomeModule,
        SafePipe,
        StylefavDirective
       
    ]
    
})

export class SharedModule {

}
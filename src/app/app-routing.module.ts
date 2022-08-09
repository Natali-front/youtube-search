import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VideoPageComponent } from "./video-page/video-page.component";



const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'videos/:id', component: VideoPageComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
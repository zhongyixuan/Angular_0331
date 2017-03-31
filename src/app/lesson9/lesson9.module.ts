import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routing } from "./lesson9.routing";
import { Lesson9Component } from "./lesson9.component";
import { ShareModule } from "app/share.module";


@NgModule({
    imports: [
        CommonModule, 
        routing,
        ShareModule
    ],
    declarations: [Lesson9Component]
})
export class Lesson9Module { }
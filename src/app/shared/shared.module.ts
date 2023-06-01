import {NgModule} from '@angular/core';
import {
  AppButtonComponent,
  AppContactUsComponent,
  AppHeaderComponent,
  AppImageComponent
} from "./components";
import {NgFor, NgIf} from "@angular/common";
import {OverviewModule} from "./components/overview/overview.module";

@NgModule({
  declarations: [
    AppButtonComponent,
    AppHeaderComponent,
    AppImageComponent,
    AppContactUsComponent,
  ],
  imports: [
    NgFor,
    NgIf,
    OverviewModule
  ],
  entryComponents: [

  ],
  exports: [
    AppButtonComponent,
    AppHeaderComponent,
    AppImageComponent,
    AppContactUsComponent,
    OverviewModule
  ]
})


export class SharedModule {
}


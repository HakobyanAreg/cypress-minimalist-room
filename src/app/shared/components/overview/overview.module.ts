import {NgModule} from "@angular/core";
import {AppOverviewItemComponent} from "./overview-item";
import {AppOverviewComponent} from "./overview.component";
import {NgFor, NgIf} from "@angular/common";

@NgModule({
  declarations: [
    AppOverviewComponent,
    AppOverviewItemComponent
  ],
  imports: [
    NgFor,
    NgIf
  ],
  exports: [
    AppOverviewItemComponent,
    AppOverviewComponent
  ]
})

export class OverviewModule {}

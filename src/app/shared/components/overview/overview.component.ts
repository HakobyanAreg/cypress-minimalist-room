import {Component, Input, OnInit} from "@angular/core";
import {OverviewDataInterface} from "./overview.interface";

@Component({
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.scss']
})

export class AppOverviewComponent {
  @Input() data: OverviewDataInterface[] = []
}

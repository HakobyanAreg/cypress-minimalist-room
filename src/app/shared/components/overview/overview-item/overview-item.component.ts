import {Component, Input, OnInit} from "@angular/core";
import {OverviewDataInterface} from "../overview.interface";

@Component({
  selector: 'app-overview-item',
  templateUrl: 'overview-item.component.html',
  styleUrls: ['overview-item.component.scss']
})

export class AppOverviewItemComponent {
  @Input() data: OverviewDataInterface = {
    title: '',
    descriptions: [],
  }
}

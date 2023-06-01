import {Component} from "@angular/core";
import {OverviewDataInterface} from "../../shared/components/overview/overview.interface";

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.scss']
})

export class AppContentComponent {
  public overviewData: OverviewDataInterface[] = [
    {
      title: 'Project Overview',
      descriptions: [
        'Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. '
      ],
      author: 'Interior Design - Furnitur',
      date: 'July 22 - 2022'
    },
    {
      title: 'Design Process',
      descriptions: [
        'Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.',
        'Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.'
      ]
    }
  ]
}

import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
})

export class AppButtonComponent {
  @Input() name: string = '';
  @Input() background: string = 'blue';
}

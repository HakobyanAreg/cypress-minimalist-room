import {Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class AppFooterComponent {
  private emailValidator =  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
  public email = new FormControl(null, Validators.pattern(this.emailValidator))

}

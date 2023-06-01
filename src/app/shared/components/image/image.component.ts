import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-image',
  templateUrl: 'image.component.html',
  styleUrls: ['image.component.scss']
})

export class AppImageComponent {
  @Input() imagesSrc: string[] = [];

  currentIndex: number = 0;

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.imagesSrc.length - 1;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.imagesSrc.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

}

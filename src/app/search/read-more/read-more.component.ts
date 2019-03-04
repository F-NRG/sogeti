import { Component, ElementRef, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnChanges {
  @Input() text: string;
  @Input() maxLength = 200;
  isCollapsed = true;
  currentText: string;
  hideToggle = true;

  constructor() { }

  ngOnChanges() {
    this.isCollapsed = true;
    this.determineView();
  }
  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();

  }

  determineView() {
    if (!this.text || this.text.length <= this.maxLength) {
        this.currentText = this.text;
        this.isCollapsed = true;
        this.hideToggle = true;
        return;
    }
    this.hideToggle = false;
    if (this.isCollapsed === true) {
        this.currentText = this.text.substring(0, this.maxLength) + '...';
    } else if (this.isCollapsed === false)  {
        this.currentText = this.text;
    }
  }
}



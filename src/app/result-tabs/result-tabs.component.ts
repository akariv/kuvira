import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result-tabs',
  template: `
    <span class='tab'
          [ngClass]='{active: selected === "original"}'
          (click)='select("original")'
          >
      Original
    </span>
    <span class='tab'
          [ngClass]='{active: selected === "transformed"}'
          (click)='select("transformed")'
          >
      Transformed
    </span>
  `,
  styles: [
  ]
})
export class ResultTabsComponent implements OnInit {

  @Input() selected: string;
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(selected) {
    this.change.emit(selected);
  }

}

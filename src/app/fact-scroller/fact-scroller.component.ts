import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fact-scroller',
  templateUrl: './fact-scroller.component.html',
  styleUrls: ['./fact-scroller.component.scss']
})
export class FactScrollerComponent implements OnInit {
  @Input() item: any;
  @Input() evenRow: boolean;
  @Input() rowIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

}

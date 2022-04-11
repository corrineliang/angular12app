import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fact-scroller',
  templateUrl: './fact-scroller.component.html',
  styleUrls: ['./fact-scroller.component.scss']
})
export class FactScrollerComponent implements OnInit {
  @Input() state: any;
  @Input() evenRow: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

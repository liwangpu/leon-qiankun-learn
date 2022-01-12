import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

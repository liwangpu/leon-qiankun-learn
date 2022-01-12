import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

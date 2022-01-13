import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { addGlobalUncaughtErrorHandler, loadMicroApp, registerMicroApps, start } from 'qiankun';


@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App2Component implements OnInit {

    constructor(
        private el: ElementRef
    ) { }

    public ngOnInit(): void {
        loadMicroApp({
            name: 'app2', // app name registered
            entry: '//localhost:9003',
            container: this.el.nativeElement
        });
    }

}

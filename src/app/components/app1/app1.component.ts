import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { addGlobalUncaughtErrorHandler, loadMicroApp, registerMicroApps, start } from 'qiankun';

@Component({
    selector: 'app-app1',
    templateUrl: './app1.component.html',
    styleUrls: ['./app1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App1Component implements OnInit {

    // @ViewChild('container', { static: true })
    // public container: ElementRef;
    constructor(
        private el: ElementRef
    ) { }

    public ngOnInit(): void {
        // loadMicroApp({
        //     name: 'app1', // app name registered
        //     entry: '//localhost:9002',
        //     container: this.el.nativeElement
        // });
    }

}

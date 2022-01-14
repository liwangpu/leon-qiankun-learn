import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { addGlobalUncaughtErrorHandler, loadMicroApp, registerMicroApps, start, MicroApp } from 'qiankun';
import { MicroappStoreService } from 'src/app/services/microapp-store.service';

@Component({
    selector: 'app-app1',
    templateUrl: './app1.component.html',
    styleUrls: ['./app1.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App1Component implements OnInit, OnDestroy {

    private app: MicroApp;
    constructor(
        private el: ElementRef,
        private microStore: MicroappStoreService
    ) { }

    public ngOnDestroy(): void {
        this.app.unmount();
    }

    public ngOnInit(): void {
        this.app = loadMicroApp({
            name: 'app1', // app name registered
            entry: '//localhost:9002',
            container: this.el.nativeElement,
        }, {
            sandbox: true
        });
    }

}

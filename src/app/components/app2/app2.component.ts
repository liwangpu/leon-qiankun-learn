import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { addGlobalUncaughtErrorHandler, loadMicroApp, registerMicroApps, start, MicroApp } from 'qiankun';
import { MicroappStoreService } from 'src/app/services/microapp-store.service';


@Component({
    selector: 'app-app2',
    templateUrl: './app2.component.html',
    styleUrls: ['./app2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class App2Component implements OnInit, OnDestroy {

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
            name: 'app2', // app name registered
            entry: '//localhost:9003',
            container: this.el.nativeElement
        }, {
            sandbox: true
        });
    }

}

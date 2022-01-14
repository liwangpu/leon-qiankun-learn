import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MicroappStoreService } from './services/microapp-store.service';

const menuCollapseStatusKey = 'menuCollapseStatus';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    public isCollapsed = false;
    public constructor(
        private microStore: MicroappStoreService
    ) {
        const menuCollapseStatusKeyStr = localStorage.getItem(menuCollapseStatusKey);
        if (menuCollapseStatusKeyStr) {
            this.isCollapsed = JSON.parse(menuCollapseStatusKeyStr);
        }
    }

    public ngOnInit(): void {
        this.microStore.start();
    }

    public toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
        localStorage.setItem(menuCollapseStatusKey, `${this.isCollapsed}`);
    }

    public loadApp(appName: string): void {

    }
}

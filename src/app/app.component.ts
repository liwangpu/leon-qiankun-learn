import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MicroappStoreService } from './services/microapp-store.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
    
    public constructor(
        // private microStore: MicroappStoreService
    ) {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
        // this.microStore.start();
    }

}

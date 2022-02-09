import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { MicroappStoreService } from 'src/app/services/microapp-store.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {

    public constructor(
        private microStore: MicroappStoreService
    ) {
    }

    public ngOnInit(): void {

    }

    public ngAfterViewInit(): void {
        this.microStore.start();
    }

}

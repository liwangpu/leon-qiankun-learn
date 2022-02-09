import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-empty-content',
    templateUrl: './empty-content.component.html',
    styleUrls: ['./empty-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyContentComponent {
    push(subapp) {
        console.log('push');
        history.pushState(null, subapp, subapp)
    }
}

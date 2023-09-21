import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'lib-feature',
    templateUrl: './feature.component.html',
    styleUrls: ['./feature.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureComponent {
    constructor() {}
}

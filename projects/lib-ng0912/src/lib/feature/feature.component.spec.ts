import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponent } from './feature.component';

describe('FeatureComponent', () => {
    function setupTest() {
        TestBed.configureTestingModule({
            declarations: [FeatureComponent],
        });
        const fixture = TestBed.createComponent(FeatureComponent);
        fixture.detectChanges();
        return { fixture };
    }

    it('should work', () => {
        const { fixture } = setupTest();
        expect(fixture.debugElement.nativeElement.textContent).toEqual('feature works!');
    });
});

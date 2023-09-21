import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureComponent } from './feature.component';
import { Component } from '@angular/core';
import { FeatureModule } from './feature.module';

describe('FeatureComponent', () => {
    @Component({ template: '<lib-feature></lib-feature>' })
    class TestFeatureComponent {}

    function setupTest() {
        TestBed.configureTestingModule({
            declarations: [TestFeatureComponent],
            imports: [FeatureModule],
        });

        const fixture = TestBed.createComponent(TestFeatureComponent);
        fixture.detectChanges();
        return { fixture };
    }

    it('should work', () => {
        const { fixture } = setupTest();
        expect(fixture.debugElement.nativeElement.textContent).toEqual('feature works!');
    });
});

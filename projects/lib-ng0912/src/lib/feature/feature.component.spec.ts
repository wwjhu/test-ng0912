import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TestingModule } from 'lib-ng0912/testing';
import { FeatureModule } from './feature.module';

describe('FeatureComponent', () => {
    @Component({ template: '<lib-feature></lib-feature>' })
    class TestFeatureComponent {}

    function setupTest() {
        TestBed.configureTestingModule({
            declarations: [TestFeatureComponent],
            imports: [FeatureModule, TestingModule.with()],
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

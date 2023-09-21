import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibNg0912Component } from './lib-ng0912.component';

describe('LibNg0912Component', () => {
    let component: LibNg0912Component;
    let fixture: ComponentFixture<LibNg0912Component>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LibNg0912Component],
        });
        fixture = TestBed.createComponent(LibNg0912Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

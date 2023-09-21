import { TestBed } from '@angular/core/testing';

import { LibNg0912Service } from './lib-ng0912.service';

describe('LibNg0912Service', () => {
    let service: LibNg0912Service;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LibNg0912Service);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

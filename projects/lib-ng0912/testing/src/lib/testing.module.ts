import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FeatureService } from 'lib-ng0912';

class MockFeatureService {}

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
})
export class TestingModule {
    static with(): ModuleWithProviders<TestingModule> {
        return { ngModule: TestingModule, providers: [{ provide: FeatureService, useClass: MockFeatureService }] };
    }
}

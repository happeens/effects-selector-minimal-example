import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../store';
import { SomeFeatureEffects } from '../store/some-feature.effects';
import { SomeComponentComponent } from '../some-component/some-component.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('someFeatureModuleState', reducers),
    EffectsModule.forFeature([SomeFeatureEffects])
  ],
  declarations: [SomeComponentComponent],
  exports: [SomeComponentComponent]
})
export class SomeFeatureModule { }

import { Injectable } from '@angular/core';
import { AnotherAction, SomeFeatureActions, AnAction } from './some-feature.actions';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { map, withLatestFrom } from 'rxjs/operators';
import { State, getSomeFeatureState, getSomeValue } from '.';

@Injectable()
export class SomeFeatureEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<State>
  ) {}

  @Effect()
  onAnAction$: Observable<Action> = this.actions$.pipe(
    ofType(SomeFeatureActions.AnAction),
    withLatestFrom(this.store$.select(getSomeValue)),
    map(([action, state]) => {
      console.log('from effect');
      console.dir(state);
      console.dir('\n');

      return new AnotherAction();
    })
  );
}

import { Action } from '@ngrx/store';

export enum SomeFeatureActions {
  AnAction = '[SomeFeature] An Action',
  AnotherAction = '[SomeFeature] Another Action'
}

export class AnAction implements Action {
  readonly type = SomeFeatureActions.AnAction;
}

export class AnotherAction implements Action {
  readonly type = SomeFeatureActions.AnotherAction;
}

export type All =
  | AnAction
  | AnotherAction;

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SomeFeatureState } from '../store/some-feature.reducer';
import { AnAction } from '../store/some-feature.actions';
import { getSomeFeatureState, getSomeValue, State } from '../store';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.css']
})
export class SomeComponentComponent implements OnInit {

  constructor(
    private store$: Store<State>
  ) {}

  ngOnInit() {
    this.store$.dispatch(new AnAction());

    this.store$.select(getSomeFeatureState).subscribe(
      value => {
        console.log(`component: some value from state is ${value.someValue}`);
        console.log('\n');
      }
    );

    this.store$.select(getSomeValue).subscribe(
      value => {
        console.log(`component: some value from selector is ${value}`);
        console.log('\n');
      }
    );
  }

}

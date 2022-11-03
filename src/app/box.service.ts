import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { Box } from 'src/app/models/box';
import { BOX_LIST } from './graphql/graphql.queries';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private _selectedBox = new BehaviorSubject<Box | null>(null);
  readonly selectedBox$ = this._selectedBox.asObservable();

  constructor(private apollo: Apollo) {}

  getBoxes() {
    return this.apollo.query({
      query: BOX_LIST,
    });
  }

  selectBox(box: Box) {
    this._selectedBox.next(box);
  }
}

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { Box } from './models/box';
import { BOX_LIST, BOX_OPEN } from './graphql/graphql.queries';
import { Loot } from './models/loot';

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

  openBox(id: string) {
    return this.apollo.mutate<Loot>({
      mutation: BOX_OPEN,
      variables: {
        input: { boxId: id, amount: 1 },
      },
    });
  }
}

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import {
  BOX_LIST,
  BOX_OPEN,
  USER_CURRENT,
  WALLET_UPDATE,
} from './graphql/graphql.queries';
import { Box } from './models/box';
import { Loot } from './models/loot';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class SteamService {
  private _selectedBox = new BehaviorSubject<Box | null>(null);
  readonly selectedBox$ = this._selectedBox.asObservable();
  private _currentUser = new BehaviorSubject<User | null>(null);
  readonly currentUser$ = this._currentUser.asObservable();

  constructor(private apollo: Apollo) {
    this.fetchUser();
  }

  private fetchUser() {
    this.apollo
      .query<{ currentUser: User }>({
        query: USER_CURRENT,
      })
      .subscribe((response) => {
        this._currentUser.next(response.data.currentUser);
      });
  }

  getWalletSubscription() {
    return this.apollo.subscribe({
      query: WALLET_UPDATE,
    });
  }

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

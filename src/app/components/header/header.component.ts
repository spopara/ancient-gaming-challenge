import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SteamService } from 'src/app/box.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private readonly subs = new Subscription();
  user: User | null = null;

  constructor(private steamService: SteamService) {}

  ngOnInit(): void {
    this.subs.add(
      this.steamService.currentUser$.subscribe((user) => {
        this.user = user;
      })
    );

    this.subs.add(
      this.steamService.getWalletSubscription().subscribe((response) => {
        console.info('WALLET-UPDATE', response);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

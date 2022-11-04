import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SteamService } from './box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly subs = new Subscription();
  title = 'ancient-gaming-chellange';
  loggedIn = false;

  constructor(private steamService: SteamService) {}

  ngOnInit(): void {
    this.subs.add(
      this.steamService.currentUser$.subscribe((user) => {
        this.loggedIn = !!user;
      })
    );
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SteamService } from 'src/app/box.service';
import { Box } from 'src/app/models/box';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxListComponent implements OnInit, OnDestroy {
  private readonly subs = new Subscription();
  boxes: Box[] = [];

  constructor(
    private steamService: SteamService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.steamService.getBoxes().subscribe((response: any) => {
        this.boxes = response?.data?.boxes?.edges || [];
        this.changeDetection.markForCheck();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

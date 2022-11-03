import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BoxService } from 'src/app/box.service';
import { Box } from 'src/app/models/box';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss'],
})
export class BoxDetailsComponent implements OnInit, OnDestroy {
  private readonly subs = new Subscription();
  box: Box | null = null;
  bounce = false;

  constructor(private boxService: BoxService, private router: Router) {}

  ngOnInit(): void {
    this.subs.add(
      this.boxService.selectedBox$.subscribe((box: Box | null) => {
        if (!box) {
          this.router.navigate(['']);
        }

        this.box = box;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  handleOpen() {
    this.bounce = true;
  }
}

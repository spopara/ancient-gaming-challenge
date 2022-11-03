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
  loading = false;

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
    if (!this.box) {
      return;
    }

    this.subs.add(
      this.boxService.openBox(this.box.node.id).subscribe((response) => {
        this.loading = response.loading;

        if (response.data) {
          const items = response.data.openBox.boxOpenings
            .map(
              (bo) =>
                `• ${bo.itemVariant?.name || bo.itemVariant?.id} (${
                  bo.itemVariant?.value
                })`
            )
            .join('\n');
          window.alert(`You received following items:\n${items}`);
        }
      })
    );
  }
}

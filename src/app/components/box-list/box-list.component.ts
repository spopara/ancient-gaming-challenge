import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/box.service';
import { Box } from 'src/app/models/box';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss'],
})
export class BoxListComponent implements OnInit {
  boxes: Box[] = [];

  constructor(private boxService:BoxService) {}

  ngOnInit(): void {
    this.boxService.getBoxes()
      .subscribe((response: any) => {
        this.boxes = response?.data?.boxes?.edges || [];
      });
  }
}

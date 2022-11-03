import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Box } from 'src/app/models/box';
import { BOX_LIST } from '../../graphql/graphql.queries';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss'],
})
export class BoxListComponent implements OnInit {
  boxes: Box[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .query({
        query: BOX_LIST,
      })
      .subscribe((response: any) => {
        this.boxes = response?.data?.boxes?.edges || [];
        console.log(response);
      });
  }
}

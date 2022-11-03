import { Component, Input, OnInit } from '@angular/core';
import { Box } from 'src/app/models/box';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() box!: Box;

  constructor() { }

  ngOnInit(): void {
  }

}

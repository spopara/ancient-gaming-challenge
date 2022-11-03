import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoxService } from 'src/app/box.service';
import { Box } from 'src/app/models/box';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() box!: Box;

  constructor(private router: Router, private boxService: BoxService) {}

  ngOnInit(): void {}

  handleClick() {
    this.boxService.selectBox(this.box);
    this.router.navigate(['/box-details']);
  }
}

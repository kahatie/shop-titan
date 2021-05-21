import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-item',
  templateUrl: './resources-item.component.html',
  styleUrls: ['./resources-item.component.css']
})
export class ResourcesItemComponent implements OnInit {
  @Input() uid: string;
  @Input() type: string;
  @Input() quantity: number;

  constructor() {}

  ngOnInit() {}
}

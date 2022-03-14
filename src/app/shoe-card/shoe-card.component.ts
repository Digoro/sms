import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrls: ['./shoe-card.component.scss']
})
export class ShoeCardComponent implements OnInit {
  @Input() shoe;
  @Output() removeEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  remove(shoe) {
    this.removeEvent.emit(shoe.data.prdtNo ? shoe.data.prdtNo : shoe.data);
  }

}

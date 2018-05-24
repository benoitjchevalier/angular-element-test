import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-zz-buttonn',
  templateUrl: './zz-buttonn.component.html',
  styleUrls: ['./zz-buttonn.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ZzButtonnComponent implements OnInit {

  /**
   * @prop title
   * a title
   */
  title = 'ssada';

  constructor() { }

  ngOnInit() {
  }

}


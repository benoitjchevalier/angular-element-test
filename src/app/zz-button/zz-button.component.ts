import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zz-button',
  templateUrl: './zz-button.component.html',
  styleUrls: ['./zz-button.component.css'],
  encapsulation: ViewEncapsulation.Native
})

/**
 * @class ZzButtonComponent
 * a component for zz buttoing stuff
 */
export class ZzButtonComponent implements OnInit {

  /**
   * @prop title
   * button from zz
   */
  title = 'button';

  /**
   * @prop buttonprop from zz
   * @private
   */
  title2 = 'button';

  /**
   * inputreturnValue returns a value
   *
   * @event inputreturnValueEvent
   */
  @Output()
  inputreturnValue = new EventEmitter();

  /**
   * inputreturnValue returns a value, no @Output
   *
   * @event inputreturnValueEvent2
   */
  inputreturnValue2 = new EventEmitter();

   /**
   * @output: An output event for the item - otherValue
   */
  @Output()
  otherValue = new EventEmitter();

  /**
   * @method Open
   * @description opens the thingy
   */
  open() {

  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, ElementRef, Renderer, ContentChildren } from '@angular/core';
import { Item } from 'ionic-angular';

@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeader {
  
  constructor(public element: ElementRef, public renderer: Renderer) {

  }
}
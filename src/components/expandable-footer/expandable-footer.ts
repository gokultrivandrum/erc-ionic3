import { Component } from '@angular/core';

/**
 * Generated class for the ExpandableFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expandable-footer',
  templateUrl: 'expandable-footer.html'
})
export class ExpandableFooter {

  text: string;

  constructor() {
    console.log('Hello ExpandableFooterComponent Component');
    this.text = 'Hello World';
  }

}

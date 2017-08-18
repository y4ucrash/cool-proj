import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
  <div><h1>{{title}}</h1>
  <pm-chores></pm-chores>
  </div>`
})
export class AppComponent {
  title = 'Someone has to do it. - Abraham Lincoln.';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular12app';

  items = Array.from({length: 100000}).map((_, i) => {
    return {name: `agent #${i}`, description: `schedule #${i}`, content: `content #${i}`};
  });
}

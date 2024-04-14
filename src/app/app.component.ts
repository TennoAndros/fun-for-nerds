import { Component, Input } from '@angular/core';
import { InputWordComponent } from './components/input-word/input-word.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputWordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Andreas';
}

import { Component } from '@angular/core';
import { EvenLengthWordsComponent } from '../even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from '../odd-length-words/odd-length-words.component';

@Component({
  selector: 'app-input-word',
  standalone: true,
  imports: [EvenLengthWordsComponent, OddLengthWordsComponent],
  templateUrl: './input-word.component.html',
  styleUrl: './input-word.component.css',
})
export class InputWordComponent {
  value: string = '';
  oddValue: string = '';
  evenValue: string = '';
  oddWord: string[] = [];
  evenWord: string[] = [];
  userInput: string = '';

  onInputChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;

    if (this.value.length % 2 === 0) {
      this.evenValue = this.value;
      this.oddValue = ' ';
    } else {
      this.oddValue = this.value;
      this.evenValue = ' ';
    }
    this.userInput = this.value;
  }

  onSubmit() {
    if (this.value.length % 2 === 0) {
      this.evenWord.push(this.value);
    } else {
      this.oddWord.push(this.value);
    }
  }
}

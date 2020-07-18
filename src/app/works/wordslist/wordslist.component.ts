import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordslist',
  templateUrl: './wordslist.component.html',
  styleUrls: ['./wordslist.component.scss']
})
export class WordslistComponent implements OnInit {
  word: string = '';
  wordList: Array<string> = [];
  badWords: string = '';
  validWord: boolean = true;
  validText: boolean = true;
  text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addWord(): void {
    this.validWord = true;
    if (this.word) {
      this.wordList.push(this.word);
      this.badWords = this.wordList.join(', ')
    }
    else {
      this.validWord = false;
    }
    this.word = ''
  }

  reset(): void {
    this.wordList = [];
    this.badWords = '';
    this.text = '';
    this.validWord = true;
    this.validText = true;
  }

  cenzor(): void {
    this.validWord = true;
    this.validText = true;
    if(this.wordList.length){
      if(this.text){
        let words = this.text.split(' ');
        this.wordList.forEach(value => {
          words.forEach(val => {
            if(value.toLowerCase() === val.toLowerCase()){
              words[words.indexOf(val)] = words[words.indexOf(val)].replace(/./g, '*');
            }
          });
        });
        this.text = words.join(' ');
      }
      else{
        this.validText = false;
      }
    }
    else{
      this.validWord = false;
    }
  }
}


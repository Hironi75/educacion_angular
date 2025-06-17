import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FooterComponent } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-juego',
  imports: [NgFor, NgIf, Header, FooterComponent],
  templateUrl: './juego.html',
  styleUrl: './juego.css'
})
export class Juego {
  wordList: string[] = ['ANGULAR', 'EDUCACION', 'BOLIVIA', 'PLATAFORMA', 'ESTUDIANTE', 'ALQU'];
  word: string = '';
  displayedWord: string[] = [];
  guessedLetters: string[] = [];
  alphabet: string[] = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  attemptsLeft: number = 6;
  gameStatus: 'playing' | 'won' | 'lost' = 'playing';

  constructor() {
    this.restartGame();
  }

  guessLetter(letter: string) {
    if (this.guessedLetters.includes(letter) || this.gameStatus !== 'playing') return;
    this.guessedLetters.push(letter);
    if (this.word.includes(letter)) {
      this.updateDisplayedWord();
      if (!this.displayedWord.includes('_')) {
        this.gameStatus = 'won';
      }
    } else {
      this.attemptsLeft--;
      if (this.attemptsLeft === 0) {
        this.gameStatus = 'lost';
        this.displayedWord = this.word.split('');
      }
    }
  }

  updateDisplayedWord() {
    this.displayedWord = this.word.split('').map(l => this.guessedLetters.includes(l) ? l : '_');
  }

  restartGame() {
    this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.guessedLetters = [];
    this.attemptsLeft = 6;
    this.gameStatus = 'playing';
    this.updateDisplayedWord();
  }
}

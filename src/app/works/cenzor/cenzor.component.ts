import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent {
  public placeholder: string = 'word here..'
  public placeholder2: string = 'word here..'
  public addWords: string = '';
  public textArea: string = '';
  public badWords = 'java tottenham ';
  public isRed = false;
  public isRed2 = false;
  
  btAdd(): void {
    if(this.addWords !== ''){
      let add = this.badWords;
      this.badWords = `${add}${this.addWords} `;
      this.addWords = '';
      this.placeholder = 'word here..';
      this.isRed = false;   
    }
    else {
      this.isRed = true;    
      this.placeholder = 'Please write a word!';
    }
  }

  btReset(): void {
    this.badWords = '';
  }

  btCenzor(): void {
    if(this.textArea !== ''){
      this.placeholder2 = 'word here..';
      this.isRed2 = false;    
      let text: string = this.textArea;
      let textArr: string[] = text.split(' ');
      textArr.forEach((elem: any, ind) => {
        if(this.badWords.includes(elem)){
          this.textArea = '';
          let newElem: any = '';
          for(let i=0; i<elem.length; i++){
            newElem = `${newElem}*`
          }
          elem = newElem;
          textArr[ind] = newElem;
          textArr.forEach((elem) => {
            this.textArea += `${elem} `;
          })
        }
      })
    }
    else {
      this.isRed2 = true;    
      this.placeholder2 = 'Please write a word!';
    }
  }
}

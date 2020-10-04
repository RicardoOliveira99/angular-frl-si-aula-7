import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor(private bitcoin: BitcoinService) {
   
  }
  

  start(ms: number){
    if(!this.timer){
      this.timer = setInterval(
        () => {
          this.counter++;
        }, ms
      );
      
    }
  }
  stop(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer = null;
     
    }
  }
  getCount(){
    return this.counter;
  }
}
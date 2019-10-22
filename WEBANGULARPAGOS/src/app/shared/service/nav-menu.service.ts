import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavMenuService {
  isShownCloseSesion = false;
  isShownOptionUser = false;
  constructor() {
    this.hideCloseSesion(true);
    this.hideOptionUser(false);
  }

  hideCloseSesion(e) { this.isShownCloseSesion = e; }
  hideOptionUser(e) { this.isShownOptionUser = e;}
 
}

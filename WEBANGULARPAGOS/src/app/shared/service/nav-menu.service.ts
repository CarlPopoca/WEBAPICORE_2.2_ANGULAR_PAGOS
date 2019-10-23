import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavMenuService {
  isShownCloseSesion = false;
  isShownOptionUser = false;
  constructor() {

  }

  showCloseSesion(e) { this.isShownCloseSesion = e; }
  showOptionUser(e) { this.isShownOptionUser = e;}
 
}

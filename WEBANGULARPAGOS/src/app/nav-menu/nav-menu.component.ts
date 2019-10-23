import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../shared/service/nav-menu.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
 
  isExpanded = false;

  constructor(public serviceNavMenu: NavMenuService) {
   
  }
  ngOnInit() {
 
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

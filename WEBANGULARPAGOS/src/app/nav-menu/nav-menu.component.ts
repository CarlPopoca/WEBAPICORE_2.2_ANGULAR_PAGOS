import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../shared/service/nav-menu.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isShown = true;
  isExpanded = false;

  constructor(public serviceNavMenu: NavMenuService) {
   
  }
  ngOnInit() {
    var token = localStorage.getItem("token");

    if (token != null) {
      this.isShown = !this.isShown;
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

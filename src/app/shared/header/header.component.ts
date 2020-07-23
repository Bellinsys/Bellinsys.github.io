import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Bellinsys";
  mobile: boolean = false;
  
  @Input() menuopen: boolean;
  @Output() menuopenChange = new EventEmitter<boolean>();

  constructor(private sidenavService: SidenavService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/images/linkedin.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/images/twitter.svg'));
   } 

  ngOnInit(): void {
    if (window.screen.width < 768) { // 768px portrait
      this.mobile = true;
    }
    console.log(this.mobile)
  }

  clickMenu(){
    this.sidenavService.toggle();
    this.menuopenChange.emit(!this.menuopen);
  }

}

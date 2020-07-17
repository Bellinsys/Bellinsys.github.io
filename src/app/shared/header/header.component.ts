import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Bellinsys";
  
  @Input() menuopen: boolean;
  @Output() menuopenChange = new EventEmitter<boolean>();

  constructor(private sidenavService: SidenavService) { } 

  ngOnInit(): void {
  }

  clickMenu(){
    this.sidenavService.toggle();
    this.menuopenChange.emit(!this.menuopen);
  }

}

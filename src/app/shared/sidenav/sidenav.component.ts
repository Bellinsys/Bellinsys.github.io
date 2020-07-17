import { Component, ViewChild, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SideNavComponent implements OnInit, AfterViewInit {

  @Input() menuopen: boolean;
  @Output() menuopenChange = new EventEmitter<boolean>();

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav);

  }

  close() {
    this.sidenavService.close();
    this.menuopenChange.emit(!this.menuopen);
  }

}

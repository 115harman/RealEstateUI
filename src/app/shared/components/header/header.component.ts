import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() showMenuButton : boolean = false;

  constructor(private _helperService: HelperService) { 
  }

  ngOnInit() {
    
  }
}

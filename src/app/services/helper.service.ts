import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  public toogleSideBar = new BehaviorSubject<boolean>(false);
  public showSideBarButton = new BehaviorSubject<boolean>(false);

  constructor() { }
}

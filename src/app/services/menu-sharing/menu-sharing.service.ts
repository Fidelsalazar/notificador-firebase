import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuSharingService {
  private menuItemSource = new BehaviorSubject<string>('');

  currentMenuItem = this.menuItemSource.asObservable();

  changeMenuItem(item: string) {
    this.menuItemSource.next(item);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  menuOpened: boolean = false;

  constructor() {}
}

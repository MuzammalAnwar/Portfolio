import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scrollToId(id: string, offset: number = 0): void {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }
}

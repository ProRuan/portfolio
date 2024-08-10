import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  headline: string = '';
  subheadline: string = '';
  contactText: string = '';
  contactLine: string[] = [];

  constructor(private langData: LanguageService) {
    this.set();
  }

  set() {
    let lang = this.langData.get();
    this.headline = lang.headlines[3];
    this.subheadline = lang.problemText;
    this.contactText = lang.contactText;
    this.contactLine = lang.contactLine;
  }
}

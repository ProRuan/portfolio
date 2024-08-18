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

/**
 * Represents a contact component.
 */
export class ContactComponent {
  /**
   * Creates a contact component.
   * @param langData - The language data to apply.
   */
  constructor(private langData: LanguageService) {}

  /**
   * Prints the text based on the set language.
   * @returns - The text to print.
   */
  print() {
    return this.langData.get();
  }
}

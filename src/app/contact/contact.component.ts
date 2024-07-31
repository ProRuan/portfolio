import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}

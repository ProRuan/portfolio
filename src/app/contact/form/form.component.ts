import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../shared/services/language.service';
import { Contact } from '../../shared/interfaces/contact';
import { Checklist } from '../../shared/interfaces/checklist';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  http = inject(HttpClient);

  emailPat = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;
  firstCheck = true;
  mailTest = true;
  sent = false;
  contact: Contact = { name: '', email: '', message: '' };
  classes: Contact = { name: '', email: '', message: '' };
  checklist: Checklist = {
    name: false,
    email: false,
    message: false,
    checkbox: false,
  };

  constructor(private langData: LanguageService) {}

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  update() {
    return this.langData.get();
  }

  focus(key: string, className: string) {
    if (this.classes[key] == '') {
      this.classes[key] = className;
    }
  }

  blur(key: string) {
    if (this.contact[key].length == 0) {
      this.classes[key] = '';
    }
  }

  verify(ngForm: NgForm) {
    this.verifyInput(ngForm, 'name', 'error');
    this.verifyInput(ngForm, 'email', 'error');
    this.verifyInput(ngForm, 'message', 'empty');
  }

  verifyInput(ngForm: NgForm, key: string, className: string) {
    if (ngForm.value[key]) {
      let condition = this.getCondition(ngForm, key);
      this.updateInput(key, condition, className);
    }
  }

  getCondition(ngForm: NgForm, key: string) {
    if (key == 'message') {
      return ngForm.value.message.length > 19;
    } else if (key == 'email') {
      return ngForm.value.email.match(this.emailPat);
    } else if (key == 'name') {
      return ngForm.value.name.length > 1;
    }
  }

  updateInput(key: string, condition: boolean, className: string) {
    this.classes[key] = this.getValClass(condition, className);
    this.checklist[key] = this.getBoolean(condition);
  }

  getValClass(condition: boolean, wrong: string): string {
    return condition ? 'done' : wrong;
  }

  getBoolean(condition: boolean) {
    return condition ? true : false;
  }

  /**
   * Set the boolean value of the checkbox.
   */
  agree() {
    let checked = this.checklist.checkbox;
    this.checklist.checkbox = !checked ? true : false;
  }

  /**
   * Provide the checkbox image.
   * @returns - The path of the checkbox image.
   */
  getCheckbox() {
    if (this.checklist.checkbox) {
      return '.../../../../assets/img/check_button_checked.svg';
    } else {
      return '.../../../../assets/img/check_button.svg';
    }
  }

  /**
   * Update the class of the checkbox.
   * @returns - The class to apply.
   */
  updateCheckClass() {
    if (!this.checklist.checkbox && !this.firstCheck) {
      return 'show';
    } else {
      this.setFirstCheck();
      return '';
    }
  }

  setFirstCheck() {
    if (this.checklist.checkbox && this.firstCheck) {
      this.firstCheck = false;
    }
  }

  // Reset style!!!
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.sendPost(ngForm);
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.resetStyle();
      this.confirm();
    }
  }

  sendPost(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contact)).subscribe({
      next: (response) => {
        ngForm.resetForm();
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => console.info('send post complete'),
    });
  }

  /**
   * Reset the style of the form.
   */
  resetStyle() {
    this.classes.name = '';
    this.classes.email = '';
    this.classes.message = '';
    this.firstCheck = true;
    this.checklist.checkbox = false;
  }

  isDisabled() {
    return !this.isFormComplete() ? true : false;
  }

  isFormComplete() {
    for (const [key, value] of Object.entries(this.checklist)) {
      if (value != true) {
        return false;
      }
    }
    return true;
  }

  confirm() {
    this.sent = true;
    setTimeout(() => {
      this.sent = false;
    }, 2000);
  }

  showConfirmation() {
    return this.sent ? 'show' : '';
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../shared/services/language.service';
import { Contact } from '../../shared/interfaces/contact';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  http = inject(HttpClient);

  nameClass = '';
  emailClass = '';
  messageClass = '';

  firstCheck = true;
  mailTest = true;
  contact: Contact = { name: '', email: '', message: '' };
  classes: Contact = { name: '', email: '', message: '' };
  checklist = {
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
    this.updateNameClass(ngForm);
    this.updateEmailClass(ngForm);
    this.updateMessageClass(ngForm);
  }

  updateNameClass(ngForm: NgForm) {
    if (ngForm.value.name) {
      let condition = ngForm.value.name.length > 1;
      this.nameClass = this.getValClass(condition, 'error');
      this.checklist.name = this.getBoolean(condition);
    }
  }

  getValClass(condition: boolean, wrong: string): string {
    return condition ? 'done' : wrong;
  }

  getBoolean(condition: boolean) {
    return condition ? true : false;
  }

  updateEmailClass(ngForm: NgForm) {
    if (ngForm.value.email) {
      let pattern = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;
      let condition = ngForm.value.email.match(pattern);
      this.emailClass = this.getValClass(condition, 'error');
      this.checklist.email = this.getBoolean(condition);
    }
  }

  updateMessageClass(ngForm: NgForm) {
    if (ngForm.value.message) {
      let condition = ngForm.value.message.length > 19;
      this.messageClass = this.getValClass(condition, 'empty');
      this.checklist.message = this.getBoolean(condition);
    }
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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.sendPost(ngForm);
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.resetStyle();
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
    this.nameClass = '';
    this.emailClass = '';
    this.messageClass = '';
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
}

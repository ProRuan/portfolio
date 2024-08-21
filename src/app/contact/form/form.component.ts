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

/**
 * Represents a form component.
 */
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

  /**
   * Creates a form component.
   * @param langData - The language data to apply.
   */
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

  /**
   * Prints the text based on the set language.
   * @returns - The text to print.
   */
  print() {
    return this.langData.get();
  }

  /**
   * Focus the input.
   * @param key - The key of the classes value.
   * @param className - The class to apply.
   */
  focus(key: string, className: string) {
    if (this.classes[key] == '') {
      this.classes[key] = className;
    }
  }

  /**
   * Blurs the input.
   * @param key - The key of the classes value.
   */
  blur(key: string) {
    if (this.contact[key].length == 0) {
      this.classes[key] = '';
    }
  }

  /**
   * Verifies the form.
   * @param ngForm - The form to verify.
   */
  verify(ngForm: NgForm) {
    this.verifyInput(ngForm, 'name', 'error');
    this.verifyInput(ngForm, 'email', 'error');
    this.verifyInput(ngForm, 'message', 'empty');
  }

  /**
   *
   * @param ngForm - The form to verify.
   * @param key - The key of the contact value.
   * @param className - The class to apply.
   */
  verifyInput(ngForm: NgForm, key: string, className: string) {
    if (ngForm.value[key]) {
      let condition = this.getCondition(ngForm, key);
      this.updateInput(key, condition, className);
    }
  }

  /**
   * Provides the condition of the input validation.
   * @param ngForm - The form to verify.
   * @param key - The key of the contact value.
   * @returns - The condition of the input validation.
   */
  getCondition(ngForm: NgForm, key: string) {
    if (key == 'message') {
      return ngForm.value.message.length > 19;
    } else if (key == 'email') {
      return ngForm.value.email.match(this.emailPat);
    } else if (key == 'name') {
      return ngForm.value.name.length > 1;
    }
  }

  /**
   * Updates the input values.
   * @param key - The key of the contact value.
   * @param condition - The condition of the input validation.
   * @param className - The class to apply.
   */
  updateInput(key: string, condition: boolean, className: string) {
    this.classes[key] = this.getValClass(condition, className);
    this.checklist[key] = this.getBoolean(condition);
  }

  /**
   * Provides the class related to the input validation.
   * @param condition - The conditon of the input validation.
   * @param wrong - The name of the error class.
   * @returns - The class to apply.
   */
  getValClass(condition: boolean, wrong: string): string {
    return condition ? 'done' : wrong;
  }

  /**
   * Provides a boolean value.
   * @param condition - The condition to verify.
   * @returns - True or false.
   */
  getBoolean(condition: boolean) {
    return condition ? true : false;
  }

  /**
   * Sets the boolean value of the checkbox.
   */
  agree() {
    let checked = this.checklist.checkbox;
    this.checklist.checkbox = !checked ? true : false;
  }

  /**
   * Provides the path of the checkbox image.
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
   * Updates the class of the checkbox.
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

  /**
   * Sets the value of the first check.
   */
  setFirstCheck() {
    if (this.checklist.checkbox && this.firstCheck) {
      this.firstCheck = false;
    }
  }

  /**
   * Submits the form.
   * @param ngForm - The form to submit.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.sendPost(ngForm);
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.resetForm(ngForm);
    }
  }

  /**
   * Sends the post.
   * @param ngForm - The submitted form.
   */
  sendPost(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contact)).subscribe({
      next: (response) => {
        this.resetForm(ngForm);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => console.info('send post complete'),
    });
  }

  /**
   * Resets the form.
   * @param ngForm - The form to reset.
   */
  resetForm(ngForm: NgForm) {
    ngForm.resetForm();
    this.resetStyle();
    this.confirm();
  }

  /**
   * Resets the style of the form.
   */
  resetStyle() {
    this.classes.name = '';
    this.classes.email = '';
    this.classes.message = '';
    this.firstCheck = true;
    this.checklist.checkbox = false;
  }

  /**
   * Verifies, if the button is disabled.
   * @returns - True or false.
   */
  isDisabled() {
    return !this.isFormComplete() ? true : false;
  }

  /**
   * Verifies, if the form is complete.
   * @returns - True or false.
   */
  isFormComplete() {
    for (const [key, value] of Object.entries(this.checklist)) {
      if (value != true) {
        return false;
      }
    }
    return true;
  }

  /**
   * Confirms that the message has been successfully sent.
   */
  confirm() {
    this.sent = true;
    setTimeout(() => {
      this.sent = false;
    }, 2000);
  }

  /**
   * Verifies, if the message has been successfully sent.
   * @returns - The class to apply.
   */
  isMessageSent() {
    return this.sent ? 'show' : '';
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Conditional } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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
  firstCheck = false;
  checked = false;
  mailTest = true;

  contact = {
    name: '',
    email: '',
    message: '',
  };

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
   * Update the contact data classes.
   * @param ngForm - The providing form.
   */
  update(ngForm: NgForm) {
    this.updateNameClass(ngForm);
    this.updateEmailClass(ngForm);
    this.updateMessageClass(ngForm);
  }

  /**
   * Update the validation class of the name.
   * @param ngForm - The providing form.
   */
  updateNameClass(ngForm: NgForm) {
    if (ngForm.value.name) {
      let condition = ngForm.value.name.length > 1;
      this.nameClass = this.getValClass(condition);
    }
  }

  /**
   * Provide the validation class.
   * @param condition - The condition to verify.
   * @returns - The validation class.
   */
  getValClass(condition: boolean): string {
    return condition ? 'done' : '';
  }

  /**
   * Update the validation class of the email.
   * @param ngForm - The providing form.
   */
  updateEmailClass(ngForm: NgForm) {
    if (ngForm.value.email) {
      let pattern = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;
      let condition = ngForm.value.email.match(pattern);
      this.emailClass = this.getValClass(condition);
    }
  }

  /**
   * Update the validation class of the message.
   * @param ngForm - The providing form.
   */
  updateMessageClass(ngForm: NgForm) {
    if (ngForm.value.message) {
      let condition = ngForm.value.message.length > 19;
      this.messageClass = this.getValClass(condition);
    }
  }

  /**
   * Set the boolean value of the checkbox.
   */
  agree() {
    this.checked = !this.checked ? true : false;
  }

  /**
   * Provide the checkbox image.
   * @returns - The path of the checkbox image.
   */
  getCheckbox() {
    if (this.checked) {
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
    if (!this.checked && this.firstCheck) {
      return 'show';
    } else {
      if (this.checked && !this.firstCheck) {
        this.firstCheck = true;
      }
      return '';
    }
  }

  /**
   * Sumbit the form.
   * @param ngForm - The form to submit.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.sendPost(ngForm);
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.resetStyle();
    } else {
      this.setInputClass(ngForm);
    }
  }

  /**
   * Send the post.
   * @param ngForm - The form to submit.
   */
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
    this.firstCheck = false;
    this.checked = false;
  }

  /**
   * Set the input classes.
   * @param ngForm - The providing form.
   */
  setInputClass(ngForm: NgForm) {
    let input = ngForm.controls;
    this.nameClass = input['name'].valid ? 'done' : 'error';
    this.emailClass = input['email'].valid ? 'done' : 'error';
    this.messageClass = input['message'].valid ? 'done' : 'empty';
  }
}

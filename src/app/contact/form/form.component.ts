import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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

  contactData = {
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

  update(ngForm: NgForm) {
    this.setNameClass(ngForm);
    this.updateEmailClass(ngForm);
    this.updateMessageClass(ngForm);
    // console.log(ngForm);
  }

  setNameClass(ngForm: NgForm) {
    if (ngForm.value.name) {
      if (ngForm.value.name.length > 1) {
        this.nameClass = 'done';
      } else {
        this.nameClass = '';
      }
    }
  }

  updateEmailClass(ngForm: NgForm) {
    if (ngForm.value.email) {
      let pattern = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;
      if (ngForm.value.email.match(pattern)) {
        this.emailClass = 'done';
      } else {
        this.emailClass = '';
      }
    }
  }

  updateMessageClass(ngForm: NgForm) {
    if (ngForm.value.message) {
      if (ngForm.value.message.length > 19) {
        this.messageClass = 'filled';
      } else {
        this.messageClass = '';
      }
    }
  }

  updateCheckClass() {
    if (this.checked) {
      if (!this.firstCheck) {
        this.firstCheck = true;
      }
      return '';
    } else if (this.firstCheck) {
      return 'show';
    } else {
      return '';
    }
  }

  agree() {
    this.checked = !this.checked ? true : false;
  }

  getSrc() {
    if (this.checked) {
      return '.../../../../assets/img/check_button_checked.svg';
    } else {
      return '.../../../../assets/img/check_button.svg';
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
      let input = ngForm.controls;
      this.nameClass = input['name'].valid ? 'done' : 'error';
      this.emailClass = input['email'].valid ? 'done' : 'error';
      this.messageClass = input['message'].valid ? 'filled' : 'empty';
    }
  }

  /**
   * Send the post.
   * @param ngForm - The form to submit.
   */
  sendPost(ngForm: NgForm) {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }

  resetStyle() {
    this.nameClass = '';
    this.emailClass = '';
    this.messageClass = '';
    this.firstCheck = false;
    this.checked = false;
  }
}

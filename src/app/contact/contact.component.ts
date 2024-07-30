import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  nameClass = '';
  emailClass = '';
  messageClass = '';

  invalidName = false;
  invalidEmail = false;
  emptyMessage = false;
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
    if (ngForm.value.name.length > 1) {
      this.nameClass = 'done';
    } else {
      this.nameClass = '';
    }
  }

  updateEmailClass(ngForm: NgForm) {
    let pattern = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;
    if (ngForm.value.email.match(pattern)) {
      this.emailClass = 'done';
    } else {
      this.emailClass = '';
    }
  }

  updateMessageClass(ngForm: NgForm) {
    if (ngForm.value.message.length > 20) {
      this.messageClass = 'filled';
    } else {
      this.messageClass = '';
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
    this.invalidName = false;
    this.invalidEmail = false;
    this.emptyMessage = false;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.sendPost(ngForm);
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
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
}

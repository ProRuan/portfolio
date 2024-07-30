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
    } else {
      if (!ngForm.value.name) {
        this.invalidName = true;
      }
      if (!ngForm.value.email) {
        this.invalidEmail = true;
      }
      if (!ngForm.value.message) {
        this.emptyMessage = true;
      }
      // console.log(ngForm);
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

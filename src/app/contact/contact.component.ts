import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import emailjs from 'emailjs-com';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isSent: boolean = false;
  confirmationMessage: string = ''

  constructor(public scrollService: ScrollService){}
  
  sendEmail(form: NgForm) {
    emailjs.sendForm(
      'service_wuic8ya',
      'template_0edbe79',
      document.querySelector('form') as HTMLFormElement,
      'dJjCWBpL_fIs-H6TB'
    ).then(() => {
      this.confirmationMessage = 'Your message was sent!'
      this.isSent = true;
      form.resetForm();
      setTimeout(() => { this.isSent = false; }, 3000);
    }, () => {
      this.isSent = true;
      this.confirmationMessage = 'An error occurred, please try again!'
    });
  }
}

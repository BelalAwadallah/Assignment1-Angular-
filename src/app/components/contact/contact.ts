import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ContactData {
  userName: string;
  userAge: number;
  userEmail: string;
  userPassword: string;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(2)]],
      userAge: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactData: ContactData = this.contactForm.value;
      
      const existingData = JSON.parse(localStorage.getItem('contactData') || '[]');
      existingData.push(contactData);
      localStorage.setItem('contactData', JSON.stringify(existingData));
      
      console.log('Data saved:', contactData);
      alert('Message sent successfully!');
      
      
      this.contactForm.reset();
    }
  }
}
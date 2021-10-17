import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UrlServiceService } from '../url-service.service';
import { URL } from '../URLModal';

@Component({
  selector: 'app-generate-url',
  templateUrl: './generate-url.component.html',
  styleUrls: ['./generate-url.component.css'],
})
export class GenerateUrlComponent implements OnInit {
  click: boolean = false; //This property binding is for button
  toggleButton: boolean = true; //This property binding is for outputField
  inputValue: boolean = false; //This property binding is for inputField
  outputField: string = ''; //This property binding is for outputField
  urlForm: FormGroup;
  constructor(private router: Router, private urlService: UrlServiceService) {
    this.urlForm = new FormGroup({
      longUrl: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      shortUrl: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
      count: new FormControl({ value: 0, disabled: true }, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {}

  randomStr(len: number, arr: string): any {
    var ans = '';
    for (var i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  }

  generate() {
    this.toggleButton = true;
    this.inputValue = true;
    this.outputField =
      'http://customShortUrl//' + this.randomStr(4, '1234ifef');
    this.urlForm.get('shortUrl')?.setValue(this.outputField);
    this.urlForm.get('longUrl')?.disable(); // just to disable the button
    this.urlForm.get('shortUrl')?.disable(); // just to disable the button
    console.log(this.urlForm.value);
    this.urlService.saveUrl(this.urlForm.value).subscribe(
      () => {
        setTimeout(() => {
          this.router.navigate(['/totalUrl']);
        }, 2000);
      },
      () => {
        alert('Something went Wrong');
      }
    );
  }
}

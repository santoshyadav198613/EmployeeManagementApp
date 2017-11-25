import { Directive } from '@angular/core';

import {
  Validator, AbstractControl,
  ValidationErrors, NG_VALIDATORS
} from '@angular/forms';

@Directive({
  selector: '[appPasswordvalidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordvalidatorDirective, multi: true }]
})
export class PasswordvalidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control !== undefined && control.value !== null && control.value !== undefined) {
      if (control.value.length > 5 || control.value.length < 3) {
        return { passwordValid: false }
      }
      return null;
    }
    return null;
  }

}

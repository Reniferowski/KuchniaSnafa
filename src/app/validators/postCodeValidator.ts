import { AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {
  static postCodeValidator(control: AbstractControl): ValidationErrors {
    const postCode = control.value;
    const regexp = new RegExp(/^[0-9]{2}-[0-9]{3}$/);
    return regexp.test(postCode)? null as any: {invalid: true};
  }
}

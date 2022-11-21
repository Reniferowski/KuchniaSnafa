import { FormControl} from '@angular/forms';

export function postCodeValidator(control: FormControl): {[key: string]: any} {
  const surnameValue = control.value;
  const regexp: RegExp=/^[a-z]+$/i;
  return regexp.test(surnameValue)? {onlyLetters: false} : {onlyLetters: true};
}

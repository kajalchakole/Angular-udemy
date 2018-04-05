import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannnotContainSpace(control : AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)
            return { cannnotContainSpace : true};
        return null;
    }
}
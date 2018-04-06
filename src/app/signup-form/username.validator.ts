import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "url";
import { reject } from "q";

export class UsernameValidators {
    static cannnotContainSpace(control : AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)
            return { cannnotContainSpace : true};
        return null;
    }

    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => { 
            setTimeout(() => {
                if (control.value === 'mosh') {
                    resolve({ shouldBeUnique : true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
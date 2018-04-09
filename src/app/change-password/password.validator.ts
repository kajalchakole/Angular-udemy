import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator {
    static validOldPassword(control : AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            if(control.value !== "1234") resolve({validOldPassword : true});
            else resolve(null);
        });
    }

    static passwordShouldMatch(control : AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value) return {passwordShouldMatch : true};

        return null;
    }
}
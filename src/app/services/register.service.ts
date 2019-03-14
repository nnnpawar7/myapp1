import { Injectable } from '@angular/core';
import { of } from 'rxjs';


@Injectable()

export class registration {
    dummyData(): any {
        return of({
            username: 'Nilesh',
            cpassword: 'qwert',
            password: 'qwert',
            address: {
                city: 'Satara',
                state: 'Maharashtra',
                zip: '412802'
            }
        })
    }
}
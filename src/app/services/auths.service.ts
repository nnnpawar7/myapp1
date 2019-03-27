import { Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class Auths{
    isAuthenticated():Boolean{
       return true
    }
}
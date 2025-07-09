import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  accessToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

  constructor() {}

  estaAutenticado(): boolean {
    return !!sessionStorage.getItem("access-token");

  }

  login(email: string, senha: string): boolean{
    if(email === "admin@admin.com.br" && senha === "123456"){
      sessionStorage.setItem("access-token", this.accessToken);
      return true;
    }
    return false;
  }

  logout(){
    sessionStorage.clear();
  }




}

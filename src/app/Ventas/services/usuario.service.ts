import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { Observable } from "rxjs"; 
import { IUsuario } from "../interface/usuario.interface";


@Injectable({
    providedIn : 'root'
})

export class UsuarioService {
 
    url : string = 'http://localhost:8080/usuarios'

    constructor(
        private http: HttpClient
    ){

    }

    getall(){
        return this.http.get<[]>(`${this.url}`);
    }

    crear(campos : IUsuario){  
        return this.http.post(`${this.url}`, campos);
    }

    update(campos : IUsuario){  
        return this.http.put(`${this.url}/${campos.id}`, campos);
    }

    delete(value: number){ 
      return this.http.delete(`${this.url}/${value}`);
    }

}
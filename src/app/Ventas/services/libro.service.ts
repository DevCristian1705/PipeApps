import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { Observable } from "rxjs";
import { ILibro } from "../interface/libro.interface";


@Injectable({
    providedIn : 'root'
})

export class LibroService {
 
    url : string = 'http://localhost:8080/libros'

    constructor(
        private http: HttpClient
    ){ 
    }

    getall(){
        return this.http.get<[]>(`${this.url}`);
    }

    crear(campos : ILibro){  
        return this.http.post(`${this.url}`, campos);
    }

    update(campos : ILibro){  
        return this.http.put(`${this.url}`, campos);
    }

    delete(value: number){
        return this.http.delete(`${this.url}/${value}` );
    }


}
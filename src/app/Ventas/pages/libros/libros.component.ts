import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ILibro } from '../../interface/libro.interface';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  Libros : ILibro[]=[];
  FormLibro : FormGroup;
  DialogEditar : boolean = false; 
  idLibro : number= 0;

  constructor(
      private apiService: LibroService
  ) {
    this.builform();
   }

  ngOnInit(): void {
    this.onListarLibros();
  }

  private builform(){ 
    this.FormLibro = new FormGroup({
      Titulo: new FormControl(null, Validators.required),
      Precio: new FormControl(null, Validators.required), 
    });
  }


  onListarLibros(){
    this.apiService.getall().subscribe(resp => {
      this.Libros = resp;
    })
  }

  
  onCrear(){
    const {Titulo, Precio} = this.FormLibro.value; 
    if(!Titulo){
      alert("Ingresa un titulo");
      return;
    }
 
    if(!Precio || Precio <= 0){
      alert("Asigna un precio valido.");
      return;
    }

    let GuardarLibro : ILibro = { 
      titulo: Titulo,
      precio: Precio
    }
 
    this.apiService.crear(GuardarLibro).subscribe(() => { 
      this.onListarLibros();
      this.FormLibro.reset();
    }); 
  
  }

  onEditar(){
    const {Titulo, Precio} = this.FormLibro.value; 

    let GuardarLibro : ILibro = {
      id : this.idLibro,
      titulo: Titulo,
      precio: Precio
    }
 
    this.apiService.update(GuardarLibro).subscribe(() => { 
      this.DialogEditar= false;
      this.onListarLibros(); 
      alert("Se edito el libro con éxito.");
      this.FormLibro.reset();
    }); 
  }
 

  onActualizarLibro(lib : ILibro){  
    this.idLibro = lib.id 
    this.DialogEditar = true;
    this.FormLibro.patchValue({ 
      Titulo : lib.titulo,
      Precio : lib.precio
    })   
  }
 
 
  onEliminarLibro(id : number){   
    this.apiService.delete(id).subscribe(() => { 
      this.onListarLibros();
    }); 
  }




}

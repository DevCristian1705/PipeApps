import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from '../../interface/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: any[]=[];
  formUsu : FormGroup;
  DialogEditar : boolean = false;
  idUsuario : number = 0;

  constructor(
    private apiservice: UsuarioService
  ) { 
    this.builForm();
  }

  ngOnInit(): void {
    this.onPintarUsuarios(); 
  }

  private builForm() { 
    this.formUsu = new FormGroup({
      Nombre: new FormControl(null, Validators.required),
      Apellido: new FormControl(null, Validators.required),
      Email: new FormControl(null, Validators.required), 
    });
  }


  onPintarUsuarios(){
    this.apiservice.getall().subscribe(resp => { 
      this.usuarios = resp
    })
  }

  onCrear(){ 
    const {Nombre,  Apellido , Email} = this.formUsu.value;

    let Campos : IUsuario = {
      nombre : Nombre,
      apellido : Apellido,
      email : Email,
    } 
    this.apiservice.crear(Campos).subscribe(() => { 
      this.onPintarUsuarios();
      this.formUsu.reset();
    }); 
  }

  
  onEditar(){  
    const {Nombre,  Apellido , Email} = this.formUsu.value;

    let Campos : IUsuario = {
      id : this.idUsuario,
      nombre : Nombre,
      apellido : Apellido,
      email : Email,
    } 
    this.apiservice.update(Campos).subscribe(() => { 
      this.onPintarUsuarios();
      this.formUsu.reset();
    }); 
  }


  onActualizarUsuario(usu : IUsuario){  
    this.DialogEditar = true;
    this.idUsuario = usu.id

    this.formUsu.patchValue({
      Nombre: usu.nombre,
      Apellido : usu.apellido,
      Email : usu.email
    }) 
  }



  onEliminarUsuario(id : number){   
    this.apiservice.delete(id).subscribe(() => { 
      this.onPintarUsuarios();
    }); 
  }


}


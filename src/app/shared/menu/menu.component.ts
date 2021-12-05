import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

 items: MenuItem[];

  constructor() { }


 
  ngOnInit() {
    this.items = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
                items: [
                    {
                        label: 'Textos y fechas', 
                        icon: 'pi pi-align-left', 
                        routerLink: '/'
                    }, 
                    {
                        label: 'Numeros', 
                        icon: 'pi pi-dollar', 
                        routerLink: 'numeros'
                    }, 
                    {
                        label: 'No Comunes', 
                        icon: 'pi pi-globe', 
                        routerLink: 'no-comunes'
                    }, 
                    {
                        label: 'Libros', 
                        icon: 'pi pi-book', 
                        routerLink: 'libros'
                    }, 
                    {
                        label: 'Usuarios', 
                        icon: 'pi pi-user', 
                        routerLink: 'usuarios'
                    }, 
                ]
        },
        {
            label: 'Pipes Personalizados',
            icon: 'pi pi-cog'
        }
    ];
  }

}

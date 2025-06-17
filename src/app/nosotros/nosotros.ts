import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer';
import { Header } from '../header/header';

@Component({
    selector: 'app-nosotros',
    standalone: true,
    imports: [Header,FooterComponent],
    templateUrl: './nosotros.html',
    styleUrl: './nosotros.css'
})


export class NosotrosComponent {
    // Aquí puedes agregar lógica para la sección Nosotros si es necesario
}

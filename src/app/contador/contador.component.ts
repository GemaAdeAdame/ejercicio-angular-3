import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  cantidad: number = 0;
  errorMensaje: string = '';
  
  incrementarCantidad() {
    this.cantidad++;
    this.errorMensaje = '';
  }

  decrementarCantidad() {
    if (this.cantidad > 0) {
      this.cantidad--;
    } else {
      this.errorMensaje = 'No se puede decrementar por debajo de 0'; 
    }
  }

}

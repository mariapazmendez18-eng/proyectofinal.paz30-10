import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Productos } from '../../pages/productos/productos'; 
 


@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  @Input() producto!: ProductoCard;
  @Output() agregarAICarrito = new EventEmitter<Productos>();
  
  onAgregar(){
    alert("TU COMPRA TUVO EXITOS, SE AGREGO AL CARRITO||",)
    this.agregarAICarrito.emit(this.producto);
  }
}

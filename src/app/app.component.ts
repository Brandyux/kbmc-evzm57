import { Component } from "@angular/core";
import { Gasto } from "./gasto";
 
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nombreGasto = "";
  cantidadGasto = 0;
  gastos = [];
  presupuesto = 0;
  saldo = 0;
  saldoInicialIngresado = false;
 
  ingresarSaldoInicial(): void {
    this.saldo = this.presupuesto;
    this.saldoInicialIngresado = true;
  }
 
  agregarGasto(): void {
    const gasto = new Gasto(this.nombreGasto, this.cantidadGasto);
    this.gastos.push(gasto);
    this.saldo = this.saldo - gasto.cantidad;
    this.nombreGasto = "";
    this.cantidadGasto = 0;
  }

   eliminarGasto(indiceGasto: number, cantidadGasto: number): void {
    this.gastos.splice(indiceGasto, 1);
    this.saldo += cantidadGasto;
  }
}
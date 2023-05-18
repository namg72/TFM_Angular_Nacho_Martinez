// To parse this data:
//
//   import { Convert } from "./file";
//
//  = Co(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Productos {
    idProducto:     string,
    tipoProducto:   string,
    familia:        string,
    subfamilia:     string,
    codigoBarras?:   null | string,
    nombreProducto: string,
    precioCompra:   number | null,
    ivaCompra:      number | null,
    precioVenta:    number | null,
    precioVentaIva: number | null,
    cantidad?:number,
    Total?:number,
 


}


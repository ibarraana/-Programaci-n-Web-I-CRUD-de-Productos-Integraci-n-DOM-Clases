export default class Producto {
  static items = []

  codigo;
  nombre;
  precio;

  constructor(codigo, nombre, precio) {
    this.codigo = codigo + ""
    this.nombre = nombre
    this.precio = Number(precio)
  }

  static crear(codigo, nombre, precio) {
    const p = new Producto(codigo, nombre, precio)
    this.agregar(p)
    return p
  }

  static agregar(producto) {
    this.items.push(producto);
  }

  static eliminarPorCodigo(codigoInformacion) {
    let eliminado = false

    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].codigo == codigoInformacion) {
        this.items.splice(i, 1)
        eliminado = true
        break
      }

    }

    return eliminado
  }

  static existeCodigo(codigo) {
    let existe = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].codigo == codigoInformacion) {
        existe = true
        break
      }

    }

    return existe
  }
}

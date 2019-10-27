import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroEspecialista'
})
export class FiltroEspecialistaPipe implements PipeTransform {

  transform( arreglo: any[],
             texto: string,
             columna: string): any[] {

    if ( texto === '' ) {
      return arreglo;
    }

    texto = texto.toLowerCase();

    // console.log(arreglo);
    // return arreglo;

    return arreglo.filter( item => {
      return item[columna].toLowerCase()
              .includes( texto );
    });

  }

}

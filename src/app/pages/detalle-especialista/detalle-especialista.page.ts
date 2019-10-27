import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-especialista',
  templateUrl: './detalle-especialista.page.html',
  styleUrls: ['./detalle-especialista.page.scss'],
})
export class DetalleEspecialistaPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  valorSegmento: string;

  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {
    this.segment.value = 'datos';
    this.valorSegmento = 'datos';
  }

  segmentChanged( evento ){
    this.valorSegmento = evento.detail.value;
    console.log(this.valorSegmento);
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

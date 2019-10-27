import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {

  constructor( private alertCtrl: AlertController ) { } 

  ngOnInit() {
  }

  async cancelarOperacion() {
    const cancelar = await this.alertCtrl.create({
      header: '¿Deseas cancelar?',
      subHeader: 'Si cancelas, se realizará un cobro adicional en tu próxima busqueda de especialista',
      buttons: [
        {
          text: 'Si',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Si');
          },
        },
        {
          text: 'No',
          handler: (blah) => {
            console.log('No');
          }
        }
      ]
    });

    await cancelar.present();
  }

}

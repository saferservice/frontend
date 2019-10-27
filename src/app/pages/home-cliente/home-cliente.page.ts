import { Component, OnInit } from '@angular/core';
import { PopoverController, MenuController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({ 
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.page.html',
  styleUrls: ['./home-cliente.page.scss'],
})
export class HomeClientePage implements OnInit {

  constructor(private popoverCtrl: PopoverController,
              private menuCtrl: MenuController) { }

  ngOnInit() {
    // this.menuCtrl.close();
    // this.menuCtrl.enable(true, 'primerMenu');
  }

  async mostrarPop( evento ) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios'
      // backdropDismiss: false
    });

    await popover.present();

    // const { data } = await popover.onDidDismiss();
    // const { data } = await popover.onWillDismiss();

    console.log( evento );
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-especialistas',
  templateUrl: './mostrar-especialistas.page.html',
  styleUrls: ['./mostrar-especialistas.page.scss'],
})
export class MostrarEspecialistasPage implements OnInit {

  especialidades: any[] = [];
  textoBuscar = '';

  constructor( private dataService: DataService,
               private navCtrl: NavController,
               private menuCtrl: MenuController ) { }

  ngOnInit() {
    // this.menuCtrl.enable(true, 'primerMenu');
    this.dataService.getEspecialistas()
      .subscribe( especialidades => {
        console.log( especialidades );
        this.especialidades = especialidades;
      });
  }

  buscar( evento ) {
    // console.log( evento );
    this.textoBuscar = evento.detail.value;
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

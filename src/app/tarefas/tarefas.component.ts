import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../user/service.service';
import {listTarefas} from '../model/Tarefas';


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(private Serv:ServiceService) { }
x: listTarefas[];

  ngOnInit() {
    this.findAll();
  }
  findAll(){
    this.Serv.getTarefas().subscribe((tarOut:listTarefas[])=>{
      this.x=tarOut;
    })
  }

}

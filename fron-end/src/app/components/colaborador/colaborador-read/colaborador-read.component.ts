import { ColaboradorService } from './../colaborador.service';
import { Colaborador } from './../colaborador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaborador-read',
  templateUrl: './colaborador-read.component.html',
  styleUrls: ['./colaborador-read.component.css']
})

export class ColaboradorReadComponent implements OnInit {

  colaboradores: Colaborador[] = [];
  displayedColumns = ['id', 'name', 'cpf', 'action']

  constructor(private colaboradorService: ColaboradorService) {}

  ngOnInit(): void {
    this.colaboradorService.read().subscribe(colaboradores => {
      this.colaboradores = colaboradores
      console.log(colaboradores)
    })
  }

}
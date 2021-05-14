import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from './../colaborador.service';
import { Colaborador } from './../colaborador.model';

@Component({
  selector: 'app-colaborador-read',
  templateUrl: './colaborador-read.component.html',
  styleUrls: ['./colaborador-read.component.css']
})
export class ColaboradorReadComponent implements OnInit {

  // colaboradores: Colaborador[]

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    // this.colaboradorService.read().subscribe(this.colaboradores => {
    //   this.colaboradores = this.colaboradores
    // })
  }

}

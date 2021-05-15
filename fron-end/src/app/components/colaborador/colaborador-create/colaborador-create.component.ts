import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from './../colaborador.service'
import { Router } from '@angular/router';
import { Colaborador } from './../colaborador.model';

@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.css']
})
export class ColaboradorCreateComponent implements OnInit {

  colaborador: Colaborador = {
    name: '',
    cpf: '',
  }

  constructor(
    private colaboradorService: ColaboradorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createColaborador(): void {
    
    this.colaboradorService.create(this.colaborador).subscribe(() => {
      this.colaboradorService.showMessage('Operação realizada com sucesso!')
      this.router.navigate(['/listcoffe'])
    })

  }

  cancel(): void {
    this.router.navigate(['/listcoffe'])
  }

}

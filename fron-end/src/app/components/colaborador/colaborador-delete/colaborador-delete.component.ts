import { Component, OnInit } from '@angular/core';
import { Colaborador } from './../colaborador.model';
import { ColaboradorService } from './../colaborador.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colaborador-delete',
  templateUrl: './colaborador-delete.component.html',
  styleUrls: ['./colaborador-delete.component.css']
})
export class ColaboradorDeleteComponent implements OnInit {

  colaborador: Colaborador;

  constructor( 
    private colaboradorService: ColaboradorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.colaboradorService.readById(id).subscribe(colaborador => {
      this.colaborador = this.colaborador
    })    
  }

  deleteColaborador(): void {
    this.colaboradorService.delete(this.colaborador.id!).subscribe(() => {
      this.colaboradorService.showMessage('Exclusão efetuada com sucesso"')
      this.router.navigate(["/listcoffe"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/listcoffe"]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Colaborador } from '../colaborador.model';
import { ColaboradorService } from '../colaborador.service';

@Component({
  selector: 'app-colaborador-update',
  templateUrl: './colaborador-update.component.html',
  styleUrls: ['./colaborador-update.component.css']
})
export class ColaboradorUpdateComponent implements OnInit {

  colaborador: Colaborador

  constructor(
    private colaboradorService: ColaboradorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.colaboradorService.readById(id).subscribe((colaborador) => {
      this.colaborador = colaborador
    });    
  }

  updateColaborador(): void {
    this.colaboradorService.update(this.colaborador).subscribe(() => {
      this.colaboradorService.showMessage("Atualização efetuada com Sucesso!")
      this.router.navigate(['/listcoffe']);
    })
  }

  cancel(): void {
    this.router.navigate(['/listcoffe'])
  }

}

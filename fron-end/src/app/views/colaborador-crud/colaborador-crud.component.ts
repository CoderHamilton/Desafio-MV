import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaborador-crud',
  templateUrl: './colaborador-crud.component.html',
  styleUrls: ['./colaborador-crud.component.css']
})
export class ColaboradorCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToColaboradorCreate(): void {
    this.router.navigate(['/colaborador/create'])
  }

}

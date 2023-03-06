import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alios-bread-crumbs-item',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
  providers: []
})
export class BreadCumbsComponent implements OnInit{

  breads: String[] = [];

  ngOnInit(): void {
    this.breads = [
      "Cadastro",
      "Admissão do Cooperado",
      "Nova Admisão de Cooperado",
    ]
  }   
}

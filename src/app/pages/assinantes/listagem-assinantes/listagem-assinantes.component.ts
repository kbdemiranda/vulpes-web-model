import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {AssinanteComponent} from "../../../components/assinante/assinante.component";

interface Assinante {
  id: number;
  nome: string;
  email: string;
}

@Component({
  selector: 'app-listagem-assinantes',
  standalone: true,
  imports: [
    NgForOf,
    AssinanteComponent
  ],
  templateUrl: './listagem-assinantes.component.html',
  styleUrl: './listagem-assinantes.component.scss'
})

export class ListagemAssinantesComponent {

  assinantes: Assinante[] = [
    { id: 1, nome: 'Bruce Wayne', email: 'bruce@wayneenterprises.com' },
    { id: 2, nome: 'Clark Kent', email: 'clark@dailyplanet.com' },
    { id: 3, nome: 'Diana Prince', email: 'diana@themyscira.com' },
    { id: 4, nome: 'Barry Allen', email: 'barry@ccpd.com' },
    { id: 5, nome: 'Hal Jordan', email: 'hal@ferrisaircraft.com' },
    { id: 6, nome: 'Arthur Curry', email: 'arthur@atlantis.com' }
  ];
}

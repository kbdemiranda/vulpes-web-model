import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-assinante',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './assinante.component.html',
  styleUrl: './assinante.component.scss'
})
export class AssinanteComponent {

  @Input() assinante!: { id: number, nome: string, email: string };

}

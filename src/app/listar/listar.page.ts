import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Tarefa } from '../models/tarefa.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  tarefas!: Tarefa[];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router) { }

  ngOnInit(): void {
    
      this.firebaseService.listar().subscribe(
        resultado => {
          this.tarefas = resultado;
        }
      );
    
  }
  
  

  novaTarefa() {
    this.router.navigateByUrl('/header/cadastrar');
  }

  busca() {
    this.router.navigateByUrl('/header/pesquisar');
  }
}

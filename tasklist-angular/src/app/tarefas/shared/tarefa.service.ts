import { Injectable } from '@angular/core';

import { Tarefa } from './';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  // retorna todos os dados de tarefas - uma array
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  // reponsavel por cadastrar uma nova tarefa
  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    // tarefa.id = new Date().getTime();
    tarefa.id = tarefas.length + 1;
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  // buscar tarefa
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  //
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  //
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  // remove a tarefa - retorna todas com o valor de id diferente da que deseja excluir
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}

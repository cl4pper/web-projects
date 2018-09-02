export class Tarefa {

	constructor(
		public id?: number,
		public nome?: string,
		public concluida?: boolean) {}
}

// o sinal de "?" torna os atributos como nao obrigatorios na criacao do objeto
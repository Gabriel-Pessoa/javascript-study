export interface Filme {
  id?: number; //Não posso colocor como obrigatório se não eu vou ter que setar toda vez que for enviar para o backend
  titulo: string;
  urlFoto?: string;
  dtLancamento: Date;
  descricao?: string;
  nota: number;
  urlIMDb?: string;
  genero: string;
}

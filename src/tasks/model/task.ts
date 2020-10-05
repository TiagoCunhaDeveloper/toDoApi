import { ModelMapper, JsonProperty } from "@roit/roit-model-mapper";

export class Endereco {
  logradouro: string = undefined;
  complemento: string = undefined;
}

export class Task {
  id: number = undefined;
  description: string = undefined;
  completed: boolean = undefined;
  cep: number = undefined;
  @JsonProperty({ clazz: Endereco })
    endereco: Endereco = undefined;
}
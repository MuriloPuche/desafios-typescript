type pessoa = {
  nome: string,
  idade: number,
  profissao: Profissao
}

enum Profissao {
  Atriz,
  Padeiro
}


let pessoa1: pessoa = {
nome: "maria",
idade: 29,
profissao: Profissao.Atriz
};

let pessoa2: pessoa = {
  nome: "roberto",
  idade: 19,
  profissao: Profissao.Padeiro
};

let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}
let filmes = [{nome: "ratatouille", classificação: `14`},
            {nome: "Harry Potter e a Pedra Filosofal", classificação:`14`},
            {nome: "Jogos Vorazes", classificação:`16`},
            {nome: "300", classificação:`18`},
            {nome:"Mad Max", classificação:`18`}];


let idade = Number(prompt(`Por Favor digite sua idade`));



for (let item in filmes){
  if (idade >= filmes[item].classificação){
    console.log(filmes[item].nome);
  
}
}
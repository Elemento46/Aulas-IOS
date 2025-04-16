// 2. Sistema de Exibição de Mensagem com switch - Verificação de Dia da Semana

let diaSemana = 5

switch (diaSemana) {
    case 1:
        console.log("Eu odeio Segundas-Feiras... Sou o Garfield");
        break;
    case 2:
        console.log("Terça-feira, semana vai ser longa");
        break;
    case 3:
        console.log("Quarta!! Metade da semana já foi");
        break;
    case 4:
        console.log("Só mais um dia Tropa, bora!");
        break;
    case 5:
        console.log("Até que em fim é sexta-feira em");
        break;
    case 6:
        console.log("Sabadão de bobeira");
        break;
    case 7:
        console.log("Domingo a noite... Depressão");
        break;

    default:
        console.log("Erro! Não estou encontrando esse dia da Semana ;-;");
        break;
}
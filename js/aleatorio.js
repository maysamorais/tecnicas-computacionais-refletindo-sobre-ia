const nomes = ["Maysa", "Thaina", "emilly", "Victor", "André", "Larissa", "Regiane"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)

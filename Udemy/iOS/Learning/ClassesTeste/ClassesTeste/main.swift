//
//  main.swift
//  ClassesTeste
//
//  Created by Genilson do Carmo Silva on 04/08/23.
//

let inimigos = Inimigo()
print("\n\tinimigos")
inimigos.movimento()
inimigos.forcaAtaque = 12
inimigos.ataque()
inimigos.roubar = 2
print("Os inimigo roubaram \(inimigos.roubar) casas")
inimigos.gritoGuerra(grito: "Vamos vencer")

let soldado = Guerreiro()
print("\n\tSoldados")
soldado.movimento()


let cavalos = Cavalos()

print("\n\t Os cavalos")
cavalos.movimento()
cavalos.ataque()


print("\n")



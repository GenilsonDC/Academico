def executa(funcao, *args):
    return funcao(*args)
# ⚠️ Nao é recomendado fazer uma funcao diretamente usando lambda, ex: soma = lambda parametro : parametro
# é recomendade fazer uma funcao antes como no exemplo do executa
# ⚠️O problema da lambda é que o objetivo é ser enxuta, entao um parceiro da equipe pode ter dificuldade de interpretar

# def soma(x, y):
#     return x + y


# def cria_multiplicador(multiplicador):
#     def multiplica(numero):
#         return numero * multiplicador
#     return multiplica


# duplica = cria_multiplicador(2)


duplica = executa(
    lambda m: lambda n: n * m,
    2  # é necessario ja passar o parametro do multiplicadpor para evitar erro de missing 1 positional required argument: 'm'
)
print(duplica(2))

print(
    executa(
        lambda x, y: x + y,  # Nao tem return, ja é retornado na mesma linha
        2, 3
    ),
)

print(
    executa(
        lambda *args: sum(args),
        1, 2, 3, 4, 5, 6, 7
    )
)

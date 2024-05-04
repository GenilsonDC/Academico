from datetime import datetime, timedelta

tamanhoVeiculo = 'P'
tempoPequeno = 30  # minutos
tempoMedio = 45
tempoAlto = 60
dataAtual = datetime.now()

if tamanhoVeiculo == 'P':
    tempoEstimado = dataAtual + timedelta(minutes=tempoMedio)
    print(f'\nChegada: {dataAtual} | Previsão de saida: {tempoEstimado}\n')
elif tamanhoVeiculo == 'M':
    tempoEstimado = dataAtual + timedelta(minutes=tempoMedio)
    print(f'\nChegada: {dataAtual} | Previsão de saida: {tempoEstimado}\n')
elif tamanhoVeiculo == 'G':
    tempoEstimado = dataAtual + timedelta(minutes=tempoAlto)
    print(f'\nChegada: {dataAtual} | Previsão de saida: {tempoEstimado}\n')

from datetime import datetime

dataHoraAtual = datetime.now()
dataHoraSTRen = '2024-11-27 11:32:47'
dataHoraSTRptBR = '07/11/2024 11:32:47'
mascaraPTBR = '%d/%m/%Y %H:%M:%S'
mascaraEN = '%Y-%m-%d %H:%M:%S'

print(dataHoraAtual)
print()
print(dataHoraAtual.strftime(mascaraPTBR))
print()

print(dataHoraAtual.strftime(mascaraEN))
print()

print(datetime.strptime(dataHoraSTRen, mascaraEN))
print()
print(datetime.strptime(dataHoraSTRptBR, mascaraPTBR))
print()

soAno = dataHoraAtual.strftime('%Y')
print(soAno)
print()

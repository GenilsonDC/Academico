# instalada a lib pytz
from datetime import datetime

import pytz

dataJP = datetime.now(pytz.timezone("Japan"))
dataEUA = datetime.now(pytz.timezone("America/Chicago"))
dataSP_BR = datetime.now(pytz.timezone("America/Sao_Paulo"))
dataMA_BR = datetime.now(pytz.timezone("America/Manaus"))

print('Japão:', dataJP.strftime('%d/%m/%Y - %H:%M'))
print()

print('Chicago EUA:', dataEUA.strftime('%d/%m/%Y - %H:%M'))
print()

print('São Paulo Brasil:', dataSP_BR.strftime('%d/%m/%Y - %H:%M'))
print()

print('Manaus Brasil:', dataMA_BR.strftime('%d/%m/%Y - %H:%M'))
print()

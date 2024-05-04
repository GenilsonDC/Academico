from datetime import date, datetime, time

data = date(2024, 12, 1)
print('date: ', data)
print()
print('data.today: ', data.today())
print()

dataEtempo = datetime(2024, 7, 29, 9, 32, 45)
print("datetime: ", dataEtempo)
print()
print("datetime.today: ", dataEtempo.today())
print()
print("datetime.now: ", dataEtempo.now())
print()

tempo = time(7, 58, 59)
print('time: ', tempo)
print()

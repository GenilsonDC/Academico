for i in range(10):
    if i == 2:
        print(f" i é {i}, pulando")
        continue
    if i == 9:
        print(f"Seu i é 9, seu ELSE não executará !")
        break
    for j in range(1, 3):
        print(f"{i} -- {j}")
else:
    print(f"FOR comnpleto com sucesso !")

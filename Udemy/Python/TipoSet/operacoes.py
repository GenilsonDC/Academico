# **************************** Operadores úteis****************************

s1 = {1, 2, 3, 4}
s2 = {2, 3, 4, 5}

# ************** união | união (union)  ****************************
s3 = s1 | s2
print(s3)  # {1, 2, 3, 4, 5}

# ************** - left join  ***************************************
s3 = s1 - s2
print(s3)  # {1}
s3 = s2 - s1
print(s3)  # {5}

# ************** & (intersection) ***********************************
s3 = s1 & s2
s3 = s2 & s1
print(s3)  # {2, 3, 4} independente da órdem dos sets

# **************  ^ simétrica Itens que não estão em ambos **********
s3 = s1 ^ s2
print(s3)  # {1, 5}

# # ************** EVEN / ODD **************
# # ------------ ------------
# number = int(input("Witch number do you want to check? "))

# if number % 2 == 0:
#     print("This is an even number.")
# else:
#     print("This is an odd number.")

# # ************** BMI **************
# # # -------------- ----------------
# height = float(input("Enter your height in m: "))
# weight = float(input("Enter your weight in hg: "))
# bmi = round(weight / height**2)

# if bmi < 18.5:
#     print(f"Your BMI is {bmi}, you are underweight.")
# elif bmi < 25:
#     print(f"Your BMI is {bmi}, you have a normal weight.")
# elif bmi < 30:
#     print(f"Your BMI is {bmi}, you are slightly overweight")
# elif bmi < 35:
#     print(f"Your BMI is {bmi}, you are obese.")
# else:
#     print(f"Your BMI is {bmi}, you are clinically obese.")


# # ************** - Leap Year - **************
# year = int(input("Which year do you want to check? "))

# if year % 4 == 0:
#     if year % 4 == 0 and year % 100 == 0:
#         if year % 400 == 0:
#             print(f"{year} Leap year.")
#         else:
#             print(f"{year} Not leap year.")
#     else:
#         print(f"{year} Leap year.")
# else:
#     print(f"{year} Not leap year.")

# ************** - Pizza Order Practice  - **************
# print("Welcome to Python Pizza Deliveries!")
# size = input("What size pizza do you want? S, M, or L ")
# add_pepperoni = input("Do you want pepperoni? Y or N ")
# extra_cheese = input("Do you want extra cheese? Y or N ")

# pizza = 0
# s = 15
# m = 20
# l = 25
# ec = 1

# if size == "S" or size == "s":
#     pizza += s
#     ppr = 2
#     if add_pepperoni == "Y" or add_pepperoni == "y":
#         pizza += ppr
#     if extra_cheese == "Y" or extra_cheese == "y":
#         pizza += ec


# elif size == "M" or size == "m":
#     pizza += m
#     ppr = 3
#     if add_pepperoni == "Y" or add_pepperoni == "y":
#         pizza += ppr
#     if extra_cheese == "Y" or extra_cheese == "y":
#         pizza += ec


# elif size == "L" or size == "l":
#     pizza += l
#     ppr = 3
#     if add_pepperoni == "Y" or add_pepperoni == "y":
#         pizza += ppr
#     if extra_cheese == "Y" or extra_cheese == "y":
#         pizza += ec

# print(f"Your final bill is: ${pizza}.")


# ************** - Love Calculator  - **************
print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")

name1 = name1.lower()
name2 = name2.lower()

t1 = name1.count("t")
r1 = name1.count("r")
u1 = name1.count("u")
e1 = name1.count("e")
true1 = (t1+r1+u1+e1) * 10

l1 = name1.count("l")
o1 = name1.count("o")
v1 = name1.count("v")
e2 = name1.count("e")
love1 = l1+o1+v1+e2
total1 = true1 + love1

t2 = name2.count("t")
r2 = name2.count("r")
u2 = name2.count("u")
e3 = name2.count("e")
true2 = (t2+r2+u2+e3) * 10

l2 = name2.count("l")
o2 = name2.count("o")
v2 = name2.count("v")
e4 = name2.count("e")
love2 = l2+o2+v2+e4
total2 = true2 + love2

total = total1 + total2


if total < 10 or total > 90:
    print(f"Your score is {total}, you go together like coke and mentos.")
elif total >= 40 and total <= 50:
    print(f"Your score is {total}, you are alright together.")
else:
    print(f"Your score is {total}.")


# Name 1	                Name 2	            Score
# Catherine Zeta-Jones      Michael Douglas    	99
# Brad Pitt	                Jennifer Aniston	73
# Prince William	        Kate Middleton	    67
# Angela Yu	                Jack Bauer	        53
# Kanye West	            Kim Kardashian	    42

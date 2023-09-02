# ************** EVEN / ODD **************
# ------------ ------------
number = int(input("Witch number do you want to check? "))

if number % 2 == 0:
    print("This is an even number.")
else:
    print("This is an odd number.")

# ************** BMI **************
# # -------------- ----------------
height = float(input("Enter your height in m: "))
weight = float(input("Enter your weight in hg: "))
bmi = round(weight / height**2)

if bmi < 18.5:
    print(f"Your BMI is {bmi}, you are underweight.")
elif bmi < 25:
    print(f"Your BMI is {bmi}, you have a normal weight.")
elif bmi < 30:
    print(f"Your BMI is {bmi}, you are slightly overweight")
elif bmi < 35:
    print(f"Your BMI is {bmi}, you are obese.")
else:
    print(f"Your BMI is {bmi}, you are clinically obese.")


# ************** - Leap Year - **************
year = int(input("Which year do you want to check? "))

if year % 4 == 0:
    if year % 4 == 0 and year % 100 == 0:
        if year % 400 == 0:
            print(f"{year} Leap year.")
        else:
            print(f"{year} Not leap year.")
    else:
        print(f"{year} Leap year.")
else:
    print(f"{year} Not leap year.")

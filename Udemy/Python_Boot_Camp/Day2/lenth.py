# ************** - Calculate 1 input - **************
# 🚨 Don't change the code below 👇
# two_digit_number = input("Type a two digit number: ")
# # 🚨 Don't change the code above 👆

# ####################################
# #Write your code below this line 👇

# a = two_digit_number[0]
# b = two_digit_number[1]
# c = int(a) + int(b)

# print(c)

# # ************** - BMI Calculator - **************
# # 🚨 Don't change the code below 👇
# height = input("enter your height in m: ")
# weight = input("enter your weight in kg: ")
# # 🚨 Don't change the code above 👆

# #Write your code below this line 👇
# bmi = (float (weight)) / (float(height) ** 2)
# print(bmi.__round__())

# # ************** - Life in Weeks Calculator - **************
# # 🚨 Don't change the code below 👇
# age = input("What is your current age? ")
# # 🚨 Don't change the code above 👆


# #Write your code below this line 👇
# ageLeft = 90 - int(age)
# days = ageLeft * 365
# weeks = 52*ageLeft
# months = ageLeft * 12

# print(f"You have {days} days, {weeks} weeks, and {months} months left.")


# # ************** - Tip Calculator - **************
#If the bill was $150.00, split between 5 people, with 12% tip. 

#Each person should pay (150.00 / 5) * 1.12 = 33.6
#Format the result to 2 decimal places = 33.60

#Tip: There are 2 ways to round a number. You might have to do some Googling to solve this.💪

#Write your code below this line 👇
print("Welcome to the tip calculator!")
bill = input("What was the total bill? ")
tip = input("How much tip would you like to give? 10, 12 or 15? ")
person = input("How many people to split the bill? ")
tipValue = int(bill) * (int(tip) / 100)
total = ( int(bill) + tipValue) / int(person)
print(f"Each person should pay: {total}")

totalFormat = round(total, 2)
print(f"Each person should pay: {totalFormat}")

totalFormat2 = "{:.2f}".format(total)
print(f"Each person should pay: {total}")
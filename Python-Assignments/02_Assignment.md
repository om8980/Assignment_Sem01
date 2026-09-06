## Answers:

---

```python

# Q.1

age = "25"
print(type(int(age)))

# Q.2

marks = "75.5"
print(type(float(marks)))

# Q.3

number = 50
print(type(float(number)))

# Q.4

marks = 85.9
print(type(int(marks)))

# Q.5

roll_number = 101
print(type(str(roll_number)))

# Q.6

a = "18"
b = "92.5"
c = 100
d = 45.8

print(type(int(a)), type(float(b)), type(str(c)), type(int(d)))

# Q.7

# 1. 20
# 2. 10
# 3. 25
# 4. <class 'int'>
# 5. <class 'int'>
# 6. <class 'str'>

# Q.8

age = 19
new_age = age + 1

print("Age:", new_age)

# Q.9

marks = "90"
print(type(int(marks)))

# Q.10

price = "1499.50"

Total_Amount = float(price) + 99.50

print(Total_Amount)

# Q.11

a = 20
b = 6

print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a//b)
print(a%b)
print(a**b)

# Q.12

# 1. 3.4
# 2. 3
# 3. 2

# Q.13

# 1. 20

# Q.14

# 1. 10

# Q.15

# Q.16

Notebook = 80
Pen = 20
Pencil = 10

Total_Amount = Notebook+Pen+Pencil

# Q.17

notebooks = 50*3
pens = 15*2
calculator = 500
total_Bill = notebooks+pens+calculator

print("Notebook Cost:", notebooks)
print("Pen Cost:", pens)
print("Calculator Cost:", calculator)
print("Total Bill:", total_Bill)

# Q.18

complete_groups = 47//5
students_left_over = 47%5

print("Complete Groups:", complete_groups)
print("Students Left:", students_left_over)

# Q.19

python = 85
maths = 78
physics = 92

total = python+maths+physics
average = (python+maths+physics)/3

print(total)
print(average)

# Q.20

english = 78
maths = 85
python = 92
physics = 81
chemistry = 74

total_marks = english+maths+python+physics+chemistry
percentage = ((english+maths+python+physics+chemistry)*100)/500

print(total_marks)
print(percentage)

# Q.21

number = 583
once = number%10
print("Once Digit:", once)

# Q.22

number = 583
tens = (number//10)%10
print("Tens Digit:", once)

# Q.23

number = 583
hundred = number//100
print("Hundreds Digit:", once)

# Q.24

number = 746
once = number%10
tens = (number//10)%10
hundred = number//100
print("Once Digit:", once)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundred)

# Q.25

number = 5829
once = number%10
tens = (number//10)%10
hundred = (number//100)%10
thousands = number//1000 
print("Once Digit:", once)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundred)
print("Thousands Digit:", thousands)

# Q.26

number = 583
once = number%10
tens = (number//10)%10
hundred = number//100
print("Once Digit:", once)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundred)
print("Sum of Digits:", once+tens+hundred)

# Q.27

number = 4726
once = number%10
tens = (number//10)%10
hundred = (number//100)%10
thousands = number//1000 
print("Once Digit:", once)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundred)
print("Thousands Digit:", thousands)
print("Sum of Digits:", once+tens+hundred+thousands)

# Q.28

number = 234
once = number%10
tens = (number//10)%10
hundred = number//100
print("Once Digit:", once)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundred)
print("Product of Digits:", once*tens*hundred)

# Q.29

number = 583
once = number%10
tens = (number//10)%10
hundred = number//100
print("Original Number", number)
print("Reversed Number:", once, tens, hundred)

# Q.30

number = 4726
once = number%10
tens = (number//10)%10
hundred = (number//100)%10
thousands = number//1000
print("Original Number:",number)
final=once*1000+tens*100+hundred*10+thousands
print("Reversed Number:", final)
Final = str(once)+str(tens)+str(hundred)+str(thousands)
print("Reversed Number:", Final)


# Two Method to create reversed number

# 1st. final = once*1000+tens*100+hundred*10+thousands
#      print("Reversed Number:", final)

# 2nd. final = str(once)+str(tens)+str(hundred)+str(thousands)
#              print("Reversed Number:", final)


# Q.31

number = 5834

thousands = (number//1000)*1000
hundred = ((number//100)%10)*100
tens = ((number//10)%10)*10
once = number%10

print("Thousands Place:", thousands)
print("Hundre Place:", hundred)
print("Tens Place:", tens)
print("Once Place:", once)

# Q.32

number = 583

hundred = (number//100)%10
once = number%10
diff = hundred-once

print("Difference:", diff)

# Q.33

number = 583
ones = number%10

print("Ones Digit:", ones)

# Q.34

number = 9365

once = number%10
tens = (number//10)%10
hundred = (number//100)%10
thousands = number//1000 
print("Once Digit:", once)
print("Tens Digit:", tens)
print("Hundreds Digit:", hundred)
print("Thousands Digit:", thousands)

# Q.35

hundreds = 5
tens = 8
ones = 3

number_1 = (hundreds*100)+(tens)*10+ones
                                                # 2 method Use.
number_2 = str(hundreds)+str(tens)+str(ones)

print(number_1)
print(number_2)

# Q.36

principal = 10000
rate = 5
time = 2

interest = (principal*rate*time)/100

print("Simple interest:", interest)

# Q.37

length = 15
width = 8

area = length*width
perimeter = (length+width)*2

print("Area:", area)
print("Perimeter:", perimeter)

# Q.38

pi = 3.14
radius = 7

area = pi*(radius**2)
print("Are:", area)

# Q.39

celsius = 35
fahrenheit = (celsius*9/5) + 32
print("Fahrenheit:", fahrenheit)

# Q.40

second = 367
minutes = second//60
remaining_second = second%60

print("Minutes", minutes)
print("Seconds:", remaining_second)

# Q.41

total_seconds = 7384

hours = total_seconds//3600
minutes = total_seconds//60    # This question probably wrong.
seconds = total_seconds%60

print("Hours", hours)
print("Minutes", minutes)
print("Seconds", seconds)

# Q.42

basic_salary = 25000
hra = 5000
travel = 2500
tax = 3000

print("Gross Salary:", basic_salary+hra+travel+tax)
print("Net Salary:", basic_salary+hra+travel-tax)

# Q.43

km = 120
average = 20
price = 100

fuel_required = km/average
fuel_cost = fuel_required*price

print("Fuel required:", fuel_required)
print("Total fuel cost:", fuel_cost)

# Q.44

price = 2500
discount = 10

print("Discount Amount:", (price*10)/100)
print("Final Price:", price-((price*10)/100))

# Q.45

price = 1200
quantity = 4

print("Price:", price)
print("Quantity:", quantity)
print("Total Price:", price*quantity)

# Q.46

python_marks = 85
math_marks = 78
physics_marks = 91

total = python_marks + math_marks + python_marks
average = total/3

print("Total marks:", total)
print("Average marks:", average)

# Q.47

price = 1500
quantity = 2
tax_rate = 5

total = price + quantity + tax_rate
tax_amount = ((price*quantity)*5)/100
final_bill = total-tax_amount

print("Subtotal:", total)
print("Tax amount:", tax_amount)
print("Final bill:", final_bill)

# Q.48

price = 2000
discount = 15
gst = 18

discount_amount = (price*discount)/100
price_after_discount = (price-discount_amount)
gst_amount = (price*18)/100
final_price = price - discount_amount - gst_amount

print(discount_amount)
print(price_after_discount)
print(gst_amount)
print(final_price)

# Q.49

price = 500
quantity = 3

total = price + quantity

print("Total:", total)

# Q.50

marks1 = 80
marks2 = 75
marks3 = 90

total = marks1 + marks2 + marks3

print("Total Marks:", total)

# Q.51  Nice Question.

a = "50"
b = int(a)

# 1. 50
# 2. 50
# 3. <class 'str'>
# 4. <class 'int'>

# Q.52  Nice Question

# 1. 99.99
# 2. 99

# Q.53

# 1. 17
# 2. 7
# 3. 60
# 4. 2.4
# 5. 2
# 6. 2

# Q.54

# 1. 20
# 2. 30
# 3. 7
# 4. 2.5

# Q.55

# 1. 4
# 2. 8
# 3. 6

# Q.56

student_name = "Ravi"
marks = 85

total = marks + 5

print("Student:", student_name)
print("Marks:", total)
print("Type:", type(total))

# Q.57

number = 746

ones = number%10
tens = (number//10)%10
hundreds = number//100

print("Ones:", ones)
print("Tens:", tens)
print("Hundreds:", hundreds)

# Q.58

price = 2000
discount = 15

discount_amount = (price * discount) / 100
final_price = price - discount_amount

print("Discount:", discount_amount)
print("Final Price:", final_price)

# Q.59

student_name = "Rahul"
marks1 = 85
marks2 = 90
marks3 = 78

total = marks1 + marks2 + marks3
average = total / 3

print("Student:", student_name)
print("Total Marks:", total)
print("Average:", average)
print("Marks Type:", type(total))

# Q.60

# Part-A

number = 5836

thousands = (number//1000)
hundreds = (number//100)%10
tens = (number//10)%10
once = number%10
sum_digit = thousands + hundreds + tens + once
reversed = str(once) + str(tens) + str(hundreds) + str(thousands)

print("Thousands digit:", thousands)
print("Hundreds digit:", hundreds)
print("Sum digit:", sum_digit)
print("Reversed number:", reversed)

# Part-B

price = 1250
quantity = 4
discount = 10

subtotal = (1250*4)
discount_amount = (subtotal*10)/100
final_amount = (subtotal-discount_amount)

print("Subtotal:", subtotal)
print("Discount amount:", discount_amount)
print("Final amount:", final_amount)

# "Thank You"

```

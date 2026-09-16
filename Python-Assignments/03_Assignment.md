# Answers:

```python


# Q.1

# pradicted answer:

# 1. True
# 2. False
# 3. False
# 4. True 
# 5. True
# 6. False

# Q.2

# pradicted answer:

# 1. True 
# 2. False
# 3. False
# 4. True
# 5. True

# Q.3

# 1. True 
# 2. True
# 3. False
# 4. True

# Q.4

# 1. True 
# 2. False
# 3. True

# Q.5

# 1. 30
# 2. 15
# 3. 40
# 4. 4

# Q.6

# marks = 50

# marks +=10
# marks -=5
# marks *=2

# Q.7

# 1. True 
# 2. False
# 3. False

# Q.8

word = "computer"

print("p" in word)
print("x" in word)
print("c" not in word)

# Q.9

# 1. True
# 2. False
# 3. True
# 4. False

# Q.10

fruit = "apple"
language = "Python"
fruit2 = "banana"

print("a" in fruit)
print("a" in language)
print("a" in fruit2)

# Q.11

mail1 = "rahul@gmail.com"
mail2 = "student@yahoo.com"
mail3 = "rahulgmail.com"

print("@" in mail1)
print("@" in mail2)
print("@" in mail3)

# Q.12

# 1. 65
# 2. 97
# 3. 122
# 4. 48
# 5. 57
# 6. 64

# Q.13

# 1. A
# 2. B
# 3. a
# 4. b
# 5. 0
# 6. 9
# 7. @

# Q.14

print(ord("A"))
print(ord("a"))

# 1. 'a' is larger then 'A'
# 2. 'b' is larger then 'B'

# Q.15

print(ord("A"))
print(ord("a"))
print(ord("0"))

# Q.16

letter = input("Enter uppercase letter: ")

next_letter = chr(ord(letter) + 1)

print(next_letter)

# Q.17

# 1. True
# 2. True
# 3. True
# 4. True

# Q.18

# 1.☃
# 2.♥
# 3.₹

# Q.19

text = "PYTHON"

print(text[0])
print(text[1])
print(text[-1])
print(text[-2])

# Q.20

text = "COMPUTER"

print(text[0])
print(text[3])
print(text[-1])
print(text[-3])

# Q.21

# 1. P
# 2. T
# 3. N
# 4. O

# Q.22

name = input("Name:")

print("First character:", name[0])
print("Last character:", name[-1])

# Q.23

word = "PROGRAM"

# 1. P
# 2. O
# 3. M
# 4. G

# Q.24

text = "PYTHON"

# 1. PYTH
# 2. THO
# 3. YTHON

# Q.25

text = "PROGRAMMING"

# 1.PROG
# 2.RAMMING
# 3.PROGRAMMING

# Q.26

# text = "COMPUTER"

# 1. PUTER
# 2. COMPU
# 3. MPUT

# Q.27

# 1. PTO
# 2. YHN
# 3. NOHTYP #........Good question........#

# Q.28   nice question

name = input("Name:")

print(name[::-1])

# Q.29

name = input("Name:")
print(name[0::2])

# Q.30  nice question

name = input("Name:")

print("First three characters:", name[:3])
print("Last three characters:", name[-3:])

# Q.31

# 1. CEG
# 2. IGE
# 3. JHFDB

# Q.32

text = "BTECH-CSE-2026"

print(text[0:5])
print(text[6:9])
print(text[10:])

# Q.33

text = "Python is easy"
print(text.split())

# this code separates the "space"

# Q.34

# ['apple', 'banana', 'mango']

# Q.35

# ['Python', 'is', 'easy']

# Q.36 Quary che?

# name = "Rahul Kumar Sharma"

print(name.split())
print(name.split(" "))   #defferance su che aa bane ma?

# Q.37

name = input("Input:", )

first, last = name.split()

print("First Name:",first)
print("First Name:",last)

# Q.38

number = input("Name:")
first, second, third = map(int,number.split())    # map valo concept new che jo je.
print("Sum:", first + second + third)

# Q.39

name = input("Name:")

name, age, course, city = name.split(",")

print("Name:", name)
print("Age:", age)
print("Course:", course)
print("City:", city)

# Q.40

mail = input("Email:")

username, domain = mail.split("@")

print("Username:", username)
print("Domain:", domain)

# Q.41

name = "Python is very powerful"

one, two, three, four, = name.split()

print("First Name:", one)
print("Last Name:", four)

# Q.42

print("Hello\n World")

# Q.43

print("Name:\t Rahul")
print("Age:\t 20")
print("City:\t Ahemdabad")

# Q.44

print("C:\\Python\\Programs")

# Q.45

print("It\'s Python")

# Q.46

print("He Said \"Hello\"")

# Q.47

# Python
# Programming

# Q.48

print("Student Details\n Name:\t Rahul\n Age:\t 20\n Course: B.Tech")

# Q.49

# 1. 2026-09-09

# Q.50  nice question

# Hello Python

# Q.51

print(10,20,30,sep="-", end="\n")
print(40, 50, 60, sep="-")

# Q.52

name = "Rahul"
age = 18
city = "Ahemdabad"
course = "B.Tech"

print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"Course: {course}")

# Q.53  new things

num = float(input("Number:"))
print(f"Output:{num:.2f}")

# Remember = :.2 exactly 2 digits after the decimal point.

# Q.54

age = int(input("Enter age: "))
print("Age after 5 years:", age+5)

# Q.55

print("It\'s Python")

# Q.56

text = "Python"
print(text[1:4])

# Q.57

a, b = map(int, input("Number:").split(","))
print(a, b)

# Q.58

a, b = map(int, input("Number:").split(","))
print(a+b)

# Q.59

print("C:\\new\\test")

# Q.60  Nice question

name = input("Name:")
a, b, c = map(int, input("Marks:").split())

total = a + b + c
average = total/3
print(f"Name: {name}")
print(f"Total: {total}")
print(f"Average: {average}")

# Q.61

a, b, c, d = input("Input:").split("-")
print("Degree:", a)
print("Batch:", b)
print("Branch:", c)
print("Roll Number:", d)

# Q.62

name = input("Name:")
a, b, c = name.split()
print(f"{a.lower()}.{c.lower()}")

# Q.63

a, b, c, d = input("Input:").split()
print(f"First Word: {a}")
print(f"Last Word: {d}")

# Q.64

email = input("Email:")
a, b = email.split("@")
print("@ Present:", "@"in(email))
print("Username:", a)
print("Domain:", b)

# Q.65

char = input("Input:")
code = ord(char)
previous = chr((code-1))
next = chr((code+1))

print("Character:", char)
print("Code:", code)
print("Previous:", previous)
print("Next:", next)

# Q.66 nice question

product = "Pen"
price = 20
quantity = 5
discount = 10

subtotal = price*quantity
discount_amount = (subtotal*discount) / 100
final_total = subtotal - discount_amount

print(f"Product: {product}\n" f"Price: {price:.2f}\n" f"Quantity: {quantity}\n" f"Discount: {discount:.2f}\n" f"Subtotal: {subtotal:.2f}\n" f"Final Total: {final_total:.2f}")

# Q.67

date = input("Date:")
a, b, c = date.split("-")

print("Day:", a)
print("Month:", b)
print("Year:", c)

print(date[6:10])

# Q.68  nice question

name = "Python Programming"
a, b = name.split()
print("First word:", a)
print("Second Word:", b)
print("First Word Reversed:", a[::-1])
print("Second Word Reversed:", b[::-1])

# Q.69

code = input("Enter Code: ")

parts = code.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll = parts[3]

print(f"Degree: {degree}")
print(f"Batch: {batch}")
print(f"Branch: {branch}")
print(f"Roll: {roll}")
print(f"Code: {degree}/{branch}/{roll}")

# Q.70

name = input("Name:")
a, b, c = name.split()

print(f"Original: {name}")
print(f"First Name: {a}")
print(f"Last Name: {c}")
print(f"First Name (Upper Part): {a[0:3].upper()}")
print(f"Last Name (Lower Part): {c[1:4].lower()}")
print(f"Full Name Reversed: {name[::-1]}")

# Thank you!


```

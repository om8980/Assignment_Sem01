```python

# Topic-1 Basic if

# Q.1

num = int(input("Number:"))

if num>0:
    print("positive number")

# Q.2

age = int(input("Age:"))

if age>=18:
    print("Eligible to Vote")

# Q.3

tem = int(input("Temperature:"))

if tem>40:
    print("High Temperature")

# Q.4

num = int(input("Number:"))

if num%5==0:
    print("Divisible by 5")

# Q.5

order = int(input("Amount:"))

if order>=1000:
    print("Free Delivery")

# Q.6

character = input("Character")

if character=="A":
    print("You entered A")

# Q.7

password = input("Password :")

if len(password)>=8:
    print("Strong Length")

# Q.8

num = int(input("Number: "))

if 100<num<999:
    print("Three Digit Number")


# Topic-2 if & else -----------------------------------------------------------------------------------------------


# Q.9

num = int(input("Number:"))

if num%2==0:
    print("Even")

else:
    print("Odd")

# Q.10

mark = int(input("Marks:"))

if mark>=40:
    print("Pass")
else:
    print("Fail")

# Q.11

age = int(input("Age:"))

if age>=18:
    print("Adult")
else:
    print("Minor")

# Q.12

num = int(input("Number: "))

if num>0:
    print("Positive")
else:
    print("Non-Positive")

# Q.13

num = int(input("Number: "))

if num%3==0:
    print("Divisible by 3")
else:
    print("Not Divisible by 3")

# Q.14

correct_password = input("Enter Password:")

if correct_password=="python123":
    print("Login Successful")
else:
    print("Invalid Password")

# Q.15

user = input("Enter username:")

if user=="admin":
    print("Welcome Admin")
else:
    print("Invalid Username")

# Q.16

num1 = int(input("Number-1:"))
num2 = int(input("Number-2:"))

if num1>num2:
    print(num1)
elif num1<num2:
    print(num2)
else:
    print("Both are Equal")
   
# Q.17

tem = input("Enter Temperature:")

if tem>30:
    print("Hot")
else:
    print("Comfortable")

# Q.18

amt = int(input("Amount:"))

if amt>=500:
    print("Discount Available")
else:
    print("Not Discount")

# Topic-3  if-elif-else ---------------------------------------------------------------------------------------

# Q.19

mark = int(input("Marks :"))

if 90<=mark<=100:
    print("A")
elif 80<=mark<=89:
    print("B")
elif 70<=mark<=79:
    print("C")
elif 60<=mark<=69:
    print("D")
else:
    print("F")

# Q.20

tem = int(input("Temperature:"))

if tem>=40:
    print("Very Hot")
elif 30<=tem<=39:
    print("Hot")
elif 20<=tem<=29:
    print("Warm")
else:
    print("Cold")

# Q.21

color = input("Enter Colour :")

if color=="red":
    print("Stop")
elif color=="yellow":
    print("Wait")
elif color=="green":
    print("Go")
else:
    print("Invalid Signal")

# Q.22

unit = int(input("Enter Units:"))

if 0<=unit<=100:
    print("Low Usage")
elif 101<=unit<=300:
    print("Medium Usage")
elif 301<=unit<=500:
    print("High Usage")
else:
    print("Very High Usage")

# Q.23

age = int(input("Enter Your Age :"))

if age<5:
    print("Free Ticket")
elif 5<=age<=12:
    print("Child Ticket")
elif 13<=age<=59:
    print("Regular Ticket")
else:
    print("Senior Ticket")

# Q.24

bmi = float(input("Enter BMI :"))

if bmi<18.5:
    print("Underweight")
elif 18.5<=bmi<=24.9:
    print("Normal")
elif 25<=bmi<=29.9:
    print("Overweight")
else:
    print("Obese")

# Q.25

month = int(input("Enter Month :"))

if month==[1,3,5,7,8,10,12]:
    print("31 Days")
elif month==[4,6,9,11]:
    print("30 Days")
elif month==2:
    print("28 or 29 Days")
else:
    print("Invalid Month")

# Q.26

num1 = int(input("Enter No.1"))
num2 = int(input("Enter No.2"))
operator = input("Operator:")

if operator == "+":
    print(num1 + num2)
elif operator == "-":
    print(num1 - num2)
elif operator == "*":
    print(num1 * num2)
elif operator == "/":
    print(num1 / num2)
else:
    print("Invalid Operator")

# Q.27

num = int(input("Number:"))

if num==1:
    print("Monday")
elif num==2:
    print("Tuesday")
elif num==3:
    print("Wednesday")
elif num==4:
    print("Thirsday")
elif num==5:
    print("Friday")
elif num==6:
    print("Saturday")
elif num==7:
    print("Sunday")
else:
    print("Invalid")

# Q.28

score = int(input("Score :"))

if score>=90:
    print("Excellent")
elif 75<=score<=89:
    print("Very Good")
elif 60<=score<=74:
    print("Good")
elif 40<=score<=59:
    print("Average")
else:
    print("Needs Improvement")

# Topic 4 (Logical Condition) -----------------------------------------------------------------------------------

# Q.29

mark = int(input("Marks:"))
atte = int(input("Attendance:"))

if mark>=60 and atte>=75:
    print("Eligible")

# Q.30

mark = int(input("Marks:"))
income = int(input("Income:"))

if mark>=85 or income<=300000:
    print("Scholarship Available")
else:
    print("No Scholarship")

# Q.31

day = input("Day Name:")

if day=="Saturday" or day=="Sunday":
    print("Weekend")
else:
    print("Weekday")

# Q.32

user = input("Username:")
password = int(input("Password:"))

if user=="student" and password=="python123":
    print("Access Granted")
else:
    print("Access Denied")

# Q.33

location = input("Location:")

if location=="Ahmedabad" or location=="Gandhinagar":
    print(" Delivery Available")
else:
    print(" Delivery Unavailable")

# Q.34

num = int(input("Number:"))

if 10<num<50:
    print("Inside Range")
else:
    print("Outside Range")

# Q.35

amount = int(input("Amount:"))
otp = int(input("OTP:"))

if amount>=50000 and otp==1234:
    print("Transaction Approved")
else:
    print("Transaction Declined")

# Topic 5 Nested if -----------------------------------------------------------------------------------------------

# Q.36

user = input("Username:")
password = input("Password:")

if user=="admin":

    if password=="admin1234":
        print("Login Successful")
    else:
        print("Wrong Password")

else:
    print("Invalid Username")

# Q.37  nice question

age = int(input("Age:"))

if age>=18:

    status = input("Status:")

    if status=="pass":
        print("License Approved")
    else:
        print("Test Not Passed")

else:
    print("Age Not Eligible")

# Q.38  nice question.

account_balance = int(input("Acount Balance:"))
withdrawal_amount = int(input("Withdrawal Amount:"))

if withdrawal_amount<=account_balance:
    if withdrawal_amount % 100 == 0:
        print("Withdrawal Successful")
    else:
        print("Enter Amount in Multiples of 100")
else:
    print("Insufficient Balance")

# Q.39

attendence = int(input("Attendence:"))
mark = int(input("Marks:"))

if attendence>=75:

    if mark>=40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible Due to Attendance")

# Q.40

account_type = input("Account-Type:")
balance = int(input("Balance:"))

if account_type=="savings":
    if balance>=1000:
        print("Minimum Balance Maintained")
    else:
        print("Minimum Balance Not Maintained")
else:
    print("Unsupported Account")

# Q.41

amount = int(input("Order Amount:"))
method = input("Payment Method:")

if amount>=500:

    if method=="card":
        print("Card Payment Accepted")
    elif method=="upi":
        print("UPI Payment Accepted")
    else:
        print("Unsupported Payment Method")

else:
    print("Minimum Order Amount Not Reached")

# Q.42

year = int(input("Year:"))
attendence = int(input("Attendence:"))

if year==[2, 3, 4]:
    if attendence>=75:
        print("Room Eligible")
    else:
        print("Attendance Too Low")
else:
    print("Not Eligible by Year")

# Q.43

plan = input("Plan:")
use = int(input("Monthly Usage:"))

if plan=="basic":

    if use>100:
        print("Recommend Upgrade")
    else:
        print("Basic Plan Is Sufficient")

else:
    print("Already on Higher Plan")
    
# Q.44

a = int(input("Number1"))
b = int(input("Number2"))
c = int(input("Number3"))

if a>b>c:
    print("A is Greatest")
elif b>a>c:
    print("B is Greatest")
elif c>a>b:
    print("C is Greatest")
elif a==b>c:
    print("A and B are Equal and Greatest")
elif a==c>b:
    print("A and C are Equal and Greatest")
elif b==c>a:
    print("B and C are Equal and Greatest")
else:
    print("All are Equal")

# Q.45

mark = int(input("Marks:"))
attendence = int(input("Attendence:"))

if attendence>=75:

    if mark>=90:
        print("A")
    elif 75<=mark<=89:
        print("B")
    elif 60<=mark<=74:
        print("C")
    elif 40<=mark<=59:
        print("D")
    else:
        print("F")

else:
    print("Not Eligible")

# Q.46

salary = int(input("Salary:"))
rating = int(input("Performance:"))

if salary>=30000:
    if rating==5:
        print("Bonus: 20%")
    elif rating==4:
        print("Bonus: 15%")
    elif rating==3:
        print("Bonus: 10%")
    else:
        print("Bonus: 5%")
else:
    print("Not Eligible for Bonus")

# Q.47  error aave che baki che?

age = int(input("Age:"))
distance = input("Distance:")

if age<5:
    print("Free")

elif 5<=age<=59:
    print("Regular")

    if distance<=10:
        print("Short Distance")
    else:
        print("Long Distance")

else:
    print("Senior")

# Q.48

stock = int(input("Stock :"))
pay_stutas = input("Payment Status :")

if stock>0:

    if pay_stutas=="paid":
        print("Order Confirmed")
    elif pay_stutas=="pending":
        print("Payment Pending")
    else:
        print("Invalid Payment Status")
        
else:
    print("Out of Stock")

# Q.49

age = int(input("Age:"))
ticket_type = input("Ticket Type:")

if age<5:
    print("Free Travel")

elif 5<=age<=59:
    print("Regular Passenger")
    
    if ticket_type=="AC":
        print("AC Ticket")
    elif ticket_type=="Sleeper":
        print("Sleeper Ticket")
    else:
        print("Invalid Ticket Type")

else:
    print("Senior Passenger")

# Topic 7 match-case -----------------------------------------------------------------------------------------

# Q.50

menu = [1,2,3,4]
print("Menu:", menu)
num = int(input("Enter Menu Number :"))

match num:
    case 1:
        print("Add")
    case 2:
        print("View")
    case 3:
        print("Upadate")
    case 4:
        print("Delete")
    case _:
        print("Invalid Choice")

# Q.51

n = [1,2,3,4,5,6,7]
print("Numbers:", n)
num = int(input("Number :"))

match num:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case 3:
        print("Wednesday")
    case 4:
        print("Thirsday")
    case 5:
        print("Friday")
    case 6:
        print("Saturday")
    case 7:
        print("Sunday")
    case _:
        print("Invalid Day")

# Q.52

num1 = int(input("Number1 :"))
num2 = int(input("Number2 :"))
op = input("Operater :")

match op:
    case "+":
        print(num1+num2)
    case "-":
        print(num1-num2)
    case "*":
        print(num1*num2)
    case "/":   
        print(num1/num2)
    case _:
        print("Invalide")

# Q.53

color = input("Colour:")

match color:
    case "red":
        print("Stop")
    case "yellow":
        print("Wait")
    case "green":
        print("Go")
    case _:
        print("Invalid Signal")

# Q.54

grade = input("Grade :")

match grade:
    case "A":
        print("Excellent Performance")
    case "B":
        print("Very Good Performance")
    case "C":
        print("Good Performance")
    case "D":
        print("Needs Improvement")
    case "E":
        print("Failed")
    case _:
        print("Invalid Grade")

# Q.55

code = int(input("Service Code :"))

match code:
    case 1:
        print("Check Balance")
    case 2:
        print("Recharge")
    case 3:
        print("Data Usage")
    case 4:
        print("Customer Support")
    case _:
        print("Invalid Service")

# Q.56

num = int(input("Month Number :"))

match num:
    case 1:
        print("January")
    case 2:
        print("February")
    case 3:
        print("March")
    case 4:
        print("April")
    case 5:
        print("May")
    case 6:
        print("June")
    case 7:
        print("January")
    case 8:
        print("August")
    case 9:
        print("September")
    case 10:
        print("October")
    case 11:
        print("November")
    case 12:
        print("December")
    case _:
        print("Invalid Month")

# Q.57

extension = input("File Extension :")

match extension:
    case "py":
        print("Python File")
    case "txt":
        print("Text File")
    case "pdf":
        print("PDF File")
    case "jpg":
        print("Image File")
    case _:
        print("Unknown File")


# Topic 8 Conditional Statements + Previous Concepts--------------------------------------------------------------


# Q.58

id = input("ID :").split("-")
print(id)
print("Degree:", id[0])
print("Batch:", id[1])
print("Branch:", id[2])
print("Roll Number:", id[3])

if id[2]=="CSE":
    print("CSE Student")
else:
    print("Non CSE Student")

# Q.59

email = input("Email :").split("@")
print(email)

if email[1]=="gmail.com":
    print("Gmail User")
else:
    print("Other Email Provider")

# Q.60 Nice Question

name = input("Name :").split()
print(name)
user = name[0] + "." + name[2]
print("Username :", user)

if "." in user:
    print("Valid Username Format")
else:
    print("Invalid Username Format")

# Q.61

num = int(input("Number :"))

if num>0:
    if len(str(num))==1:
        print("One Digit")
    elif len(str(num))==2:
        print("Two Digits")
    elif len(str(num))==3:
        print("Three Digits")
    else:
        print("Four or Digits")

# Q.62

price = int(input("Price:"))
quantity = int(input("Quntity:"))

subtotal = price*quantity
print("Subtotal:", subtotal)

if subtotal>=5000:
    print("Discount: 20%")
    print("Final:", subtotal - (subtotal*20)/100)
elif 2000<=subtotal<=4999:
    print("Discount: 10%")
    print("Final:", subtotal - (subtotal*10)/100)
else:
    print("No Discount")

# Q.63

unit = int(input("Units:"))

if unit<=100:
    print("Rate: ₹5")
    print("Bill:", unit*5)
elif 101<=unit<=300:
    print("Rate: ₹7")
    print("Bill:", unit*7)
else:
    print("₹10")
    print("Bill", unit*10 )

# Q.64
balance = 10000

print("1. Check Balance")
print("2. Deposit")
print("3. Withdraw")
print("4. Exit")

choice = int(input("Enter your choice: "))

match choice:

    case 1:
        print("Balance:", balance)
    case 2:
        deposite = int(input("Deposite:"))
        balance = balance + deposite
        print("Deposite Successful, Balance:", balance)
    case 3:
        amount = int(input("Enter withdrawal amount: "))

        if amount <= balance:
            balance = balance - amount
            print("Withdrawal Successful, Balance:", balance)
        else:
            print("Insufficient Balance")

    case 4:
        print("Thank you for using ATM")

    case _:
        print("Invalid Choice")

# Q.65

items = int(input("Items:"))

match items:
    case 1:
        print("Pizza")
        quantity = int(input("Quantity:"))
        total = quantity*250
        print("Total:", total)
        if total>=500:
            discount = (total*10)/100
            print("Discount:", f"{discount:.2f}")
            final = total - discount
            print("Final:", f"{final:.2f}")
    case 2:
        print("Burger")
        quantity = int(input("Quantity:"))
        total = quantity*150
        print("Total:", total)
        if total>=500:
            discount = (total*10)/100
            print("Discount:", f"{discount:.2f}")
            final = total - discount
            print("Final:", f"{final:.2f}")
    case 3:
            print("Pasta")
            quantity = int(input("Quantity:"))
            total = quantity*200
            print("Total:", f"{total:.2f}")
            if total>=500:
                discount = (total*10)/100
                print("Discount:", discount)
                final = total - discount
                print("Final:", f"{final:.2f}")
    case 4:
            print("Sandwich")
            quantity = int(input("Quantity:"))
            total = quantity*120
            print("Total:", total)
            if total>=500:
                discount = (total*10)/100
                print("Discount:", f"{discount:.2f}")
                final = total - discount
                print("Final:", f"{final:.2f}")

# Q.66

mark1, mark2, mark3 = map(int, input("Marks:").split())
attendence = int(input("Attendence:"))
average = (mark1 + mark2 + mark3)/3

if attendence>=75:
    if average>=90:
        print("Outstanding")
    elif 75<=average<=89:
        print("Very Good")
    elif 60<=average<=74:
        print("Good")
    elif 40<=average<=59:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible")


# Q.67  Nice Question.

distance = int(input("Diatance:"))
ride_type = input("Ride Type:")

match ride_type:
    case "normal":
        if distance>=20:
            extra = (15*10)/100+15
            fare = distance*extra
            print("Fare:", f"{fare:.2f}")
        else:
            fare = distance*15
            print("Fare:", f"{fare:.2f}")
            
    case "premium":
        if distance>=20:
            extra = (25*10)/100+25
            fare = distance*extra
            print("Fare:", f"{fare:.2f}")
        else:
            fare = distance*25
            print("Fare:", f"{fare:.2f}")

# Q.68

score = int(input("Score:"))
percentage = int(input("12th Percentage:"))
category = input("Category:")

match category:
    case "general":
        if score>=80 and percentage>=75:
            print("Admission Eligible")
        else:
            print("Admission Not Eligible")
    case "obc":
        if score>=70 and percentage>=70:
            print("Admission Eligible")
        else:
            print("Admission Not Eligible")
    case "sc":
        if score>=60 and percentage>=60:
            print("Admission Eligible")
        else:
            print("Admission Not Eligible")
    case _:
        print("Not Valid") 


# Topic 9 Debugging Conditional Programs ---------------------------------------------------------------------------


# Q.69

age = int(input("Enter age: "))

if age >= 18:
    print("Eligible")
else:
    print("Not Eligible")

# Q.70

marks = int(input("Enter marks: "))

if marks >= 40:
    if marks >= 90:
        print("A")
    elif marks >= 75:
        print("B")
    else:
        print("Pass")
else:
    print("Fail")


# Topic 10 Output Prediction & Execution Flow


# Q.71

marks = 85

if marks >= 40:
    print("Pass")
elif marks >= 75:
    print("Very Good")
else:
    print("Fail")

# Because in this program if condition already apply successfuly at that time program is not moving forward.

# Q.72

marks = 85

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")

#Output -    95 - A
        #    85 - B
        #    50 - Pass
        #    30 - Fail

# Explanation - Python checks conditions from top to bottom. as soon as 1st condition is True at that time python skipped elif conditions.

# Q.73

# 1. Entry Allowed.
# 2. ID Required

# Q.74

# 1. Add
# 3. Delete
# 5. Invalid Choice

# Q.75

# 1. Grade B
# 2. Grade A
# 3. Grade Pass
# 4. Not Eligible

# Thank You!

```

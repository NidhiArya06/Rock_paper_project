from time import strftime

recenttime = strftime("%H:%M:%S")
Recenttime = int(strftime("%H"))
name = input("Enter your name:")

if (4>Recenttime<12):
      print("Good Morning",name,"its",recenttime)
elif (12>=Recenttime<=5):
      print("Good Afternoon",name,"its",recenttime)
elif (5>=Recenttime<=7):
      print("Good Evening",name,"its",recenttime)
else:
      print("Good Night",name,"its",recenttime)
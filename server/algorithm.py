import random as r

inputsGlobal = [0]
functionGlobal = ""
functionGlobal_display = ""
outputsGlobal = []

def initInputArr():
    forRange = 3
    for i in range(forRange):
        rand = r.randint(1, 10)
        if (rand in inputsGlobal) == False:
            inputsGlobal.append(rand)
        else:
            forRange += 1

initInputArr()
print("Random input list: ", inputsGlobal)


def generateFunc(maxTerms):
    arithmetic = ("+", "-", "*", "^")
    function = []
  
    forRange = r.randint(2,maxTerms)
    for i in range(forRange):
        
        if i % 2 != 0:
            function.append(r.randint(1,10))
        else:
            function.append("x")
        if i != forRange - 1:
            function.append(arithmetic[r.randint(0,len(arithmetic)-1)])
        
    
    return function


functionGlobal = generateFunc(4)

functionGlobal_display = ''.join(map(str, functionGlobal))
""""x" +"""

print("Function: ", functionGlobal_display)



def generateOutput(inputArr, functionArr):
  outputArr = []
  
 
  for j in range(len(inputArr)):
   x = int(inputArr[j])
   xInit = x
       
   for i in range(len(functionArr)-1):
    if functionArr[i] == "+":
        if functionArr[i+1] == "x":
            x = x + xInit
        else:
            x = x + functionArr[i+1]
      
    if functionArr[i] == "-":
        if functionArr[i+1] == "x":
            x = x - xInit
        else:
            x = x - functionArr[i+1]
      
    if functionArr[i] == "*":
        if functionArr[i+1] == "x":
            x = int(x) * int(xInit)
        else:
            x = x * functionArr[i+1]
      
    if functionArr[i] == "/":
        if functionArr[i+1] == "x":
            if xInit != 0:
                x = x / xInit
            else:
                x = x / 1
        else:
            if functionArr[i+1] != 0:
                x = x / functionArr[i+1]
            else:
                x = x / 1
    
    if functionArr[i] == "^":
        if functionArr[i+1] == "x":
            x = x ** xInit
        else:
            x = x ** functionArr[i+1]
        
   outputArr.append(round(x, 2))      
    
  return outputArr

outputsGlobal = generateOutput(inputsGlobal, functionGlobal)
print("Solved: ", outputsGlobal)


def checkFuncStatic(inputfunction):
    if inputfunction == ''.join(map(str, functionGlobal)):
        return True
    else:
        return False

def checkFuncDynamic(inputfunction):
    user = generateOutput(inputsGlobal, inputfunction)
    real = generateOutput(inputsGlobal, functionGlobal)

    if user == real:
        return True
    else:
        return False



def withParentheses(functionArr):
    withParentheses = []
    forRange =  len(functionArr)/2 + 1
    for i in range(int(forRange)):
        withParentheses.append("(")

    for i in range(len(functionArr)):
        if i % 2 == 0:
            withParentheses.append(str(functionArr[i]) + ")")
        else:
            withParentheses.append(str(functionArr[i]))
    return withParentheses

print("With Parentheses: ", ''.join(map(str, withParentheses(functionGlobal))))










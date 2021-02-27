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
    arithmetic = ["+", "-", "*", "/", "^"]
    function = []
  
    forRange = r.randint(2,maxTerms)
    for i in range(forRange):
        
        if i % 2 != 0:
            function.append(r.randint(1,10))
        else:
            function.append("x")
        if i != forRange - 1:
            function.append(arithmetic[r.randint(0,4)])
        
    
    return function


functionGlobal = generateFunc(4)

functionGlobal_display = ''.join(map(str, functionGlobal))
""""x" +"""

print("Function: ", functionGlobal_display)



def generateOutput(inputArr, functionArr):
  outputArr = []
  
 
  for j in range(len(inputArr)):
   x = inputArr[j]
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
            x = x * xInit
        else:
            x = x * functionArr[i+1]
      
    if functionArr[i] == "/":
        if functionArr[i+1] == "x":
            x = x / xInit
        else:
            x = x / functionArr[i+1]
    
    if functionArr[i] == "^":
        if functionArr[i+1] == "x":
            x = x ** xInit
        else:
            x = x ** functionArr[i+1]
        
   outputArr.append(x)      
    
  return outputArr

outputsGlobal = generateOutput(inputsGlobal, functionGlobal)
print("Solved: ", outputsGlobal)


    


def withParentheses(functionArr):
    withParentheses = []
    for i in range(len(functionArr)):
        withParentheses.append("(")

    for i in range(len(functionArr)):
        #if i % 2 == 0:
        withParentheses.append(str(functionArr[i-1]) + ")")
    return withParentheses
        
print("With Parentheses: ", ''.join(map(str, withParentheses(functionGlobal))))



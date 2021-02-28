import random as r

inputsGlobal = [0]
functionGlobal = ""
functionGlobal_display = ""
outputsGlobal = []


def initInputArr():
    forRange = 3
    for i in range(forRange):
        rand = r.randint(1, 9)
        if (rand in inputsGlobal) == False:
            inputsGlobal.append(rand)
        else:
            forRange += 1


# initInputArr()
# print("Random input list: ", inputsGlobal)


def generateFunc(maxTerms):
    arithmetic = ("+", "-", "*", "^")
    function = []

    forRange = r.randint(2, maxTerms)
    for i in range(forRange):

        if i % 2 != 0:
            function.append(r.randint(1, 9))
        else:
            function.append("x")
        if i != forRange - 1:
            function.append(arithmetic[r.randint(0, len(arithmetic) - 1)])

    return function


# functionGlobal = generateFunc(4)


# functionGlobal_display = ''.join(map(str, functionGlobal))
# print("Function: ", functionGlobal_display)


def generateOutput(inputArr, functionArr):
    if functionArr is str:
        functionArr = list(functionArr)

    if functionArr[0] != "x":
        temp = functionArr[2]
        functionArr[2] = functionArr[0]
        functionArr[0] = temp

    outputArr = []

    for j in range(len(inputArr)):
        x = int(inputArr[j])
        xInit = x

        for i in range(len(functionArr) - 1):
            if functionArr[i] == "+":
                if functionArr[i + 1] == "x":
                    x = x + xInit
                else:
                    x = x + functionArr[i + 1]

            if functionArr[i] == "-":
                if functionArr[i + 1] == "x":
                    x = x - xInit
                else:
                    x = x - functionArr[i + 1]

            if functionArr[i] == "*":
                if functionArr[i + 1] == "x":
                    x = int(x) * int(xInit)
                else:
                    x = x * functionArr[i + 1]

            if functionArr[i] == "/":
                if functionArr[i + 1] == "x":
                    if xInit != 0:
                        x = x / xInit
                    else:
                        x = x / 1
                else:
                    if functionArr[i + 1] != 0:
                        x = x / functionArr[i + 1]
                    else:
                        x = x / 1

            if functionArr[i] == "^":
                if functionArr[i + 1] == "x":
                    x = x ** xInit
                else:
                    x = x ** functionArr[i + 1]

        outputArr.append(round(x, 2))

    return outputArr


# outputsGlobal = generateOutput(inputsGlobal, functionGlobal)
# print("Solved: ", outputsGlobal)


def withParentheses(functionArr):
    withParentheses = []
    forRange = len(functionArr) / 2 - 1
    for i in range(int(forRange)):
        withParentheses.append("(")

    for i in range(len(functionArr)):
        if i % 2 == 0 and (i != len(functionArr) - 1) and (i != 0):
            withParentheses.append(str(functionArr[i]) + ")")
        else:
            withParentheses.append(str(functionArr[i]))
    return withParentheses


def checkFuncStatic(inputFunction, realFunction):
    realFunction = ''.join(map(str, realFunction))
    realFunctionParentheses = ''.join(map(str, withParentheses(realFunction)))

    # print(inputFunction, withParentheses(realFunction))
    if inputFunction == realFunction or inputFunction == realFunctionParentheses:
        return True
    else:
        return False


# Does not Work

def checkFuncDynamic(inputFunction, realFunction, inputs):
    inputFunctionList = []
    for i in range(len(inputFunction)):
        if ord(inputFunction[i]) >= 48 and ord(inputFunction[i]) <= 57:
            inputFunctionList.append(int(inputFunction[i]))
        else:
            inputFunctionList.append(str(inputFunction[i]))
    print(inputFunctionList)

    real = generateOutput(inputs, realFunction)
    # print("real: ", real)
    user = generateOutput(inputs, inputFunctionList)
    # print("user: ", user)
    print(realFunction)

    if user == real:
        return True
    else:
        return False


# Wont work until checkFuncSynamic works
def universalCheck(inputFunction, realFunction, inputs):
    if checkFuncDynamic(inputFunction, realFunction, inputs) == True or checkFuncStatic(inputFunction,
                                                                                        realFunction) == True:
        return True
    else:
        return False

from algorithm import *

initInputArr()
print("Inputs: ", inputsGlobal)

functionGlobal = generateFunc(3)

functionGlobal_display = ''.join(map(str, functionGlobal))


print("Function: ", functionGlobal_display)

outputsGlobal = generateOutput(inputsGlobal, functionGlobal)
print("Outputs: ", outputsGlobal)

print("With Parentheses: ", ''.join(map(str, withParentheses(functionGlobal))))

userFunc = input("Guess: ")

print("Dynamic: ", checkFuncDynamic(userFunc, functionGlobal, inputsGlobal))
print("Static: ", checkFuncStatic(userFunc, functionGlobal))
print("Univeral: ", universalCheck(userFunc, functionGlobal, inputsGlobal))

# inputList = [0, 1, 9, 6]
# function = "x*2"
# function = list(function)

# outputs = generateOutput(inputList, function)
# print("Solved: ", outputs)

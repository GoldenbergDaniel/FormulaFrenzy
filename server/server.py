from algorithm import *

initInputArr()
print("Random input list: ", inputsGlobal)




functionGlobal = generateFunc(2)

functionGlobal_display = ''.join(map(str, functionGlobal))
""""x" +"""

print("Function: ", functionGlobal_display)





outputsGlobal = generateOutput(inputsGlobal, functionGlobal)
print("Solved: ", outputsGlobal)


print("With Parentheses: ", ''.join(map(str, withParentheses(functionGlobal))))



# inputList = [0, 1, 9, 6]
# function = "x*2"
# function = list(function)

# outputs = generateOutput(inputList, function)
# print("Solved: ", outputs)
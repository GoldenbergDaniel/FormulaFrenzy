from algorithum import *

initInputArr()
print("Random input list: ", inputsGlobal)




functionGlobal = generateFunc(4)

functionGlobal_display = ''.join(map(str, functionGlobal))
""""x" +"""

print("Function: ", functionGlobal_display)




outputsGlobal = generateOutput(inputsGlobal, functionGlobal)
print("Solved: ", outputsGlobal)


print("With Parentheses: ", ''.join(map(str, withParentheses(functionGlobal))))

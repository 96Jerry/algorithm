a, b = input(), input()

result1 = int(b[2]) * int(a)
result2 = int(b[1]) * int(a)
result3 = int(b[0]) * int(a)
result = result1 + result2*10 + result3*10**2

print(result1)
print(result2)
print(result3)
print(result)
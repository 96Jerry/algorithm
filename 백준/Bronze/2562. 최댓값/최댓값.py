a=[0]*9
for i in range(9):
    a[i]=int(input())
print(max(a))
print(a.index(max(a))+1)

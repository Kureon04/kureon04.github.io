original = str(input("Write something: "))
inverse = ''
i = 1
while i < len(original) + 1:
    inverse  = inverse  + original[-i]
    i = i + 1
print("inverted string: " + inverse)

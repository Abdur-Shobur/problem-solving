def palindrome_number(x):
    if x < 0:
        return False

    original = str(x)
    left = 0
    right = len(original)-1

    while left <= right:
        if original[left] != original[right]:
            return False
        left += 1
        right -= 1

    return True


# Example usage:
number = 121
result = palindrome_number(number)
print(result)  # Output: True

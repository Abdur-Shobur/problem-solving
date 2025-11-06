def twoSum(numbers, target):
    numMap = {}

    for i in range(len(numbers)):
        complement = target-numbers[i]

        if complement in numMap:
            return [numMap[complement], i]
        numMap[numbers[i]] = i

    return []


# Example usage:
numbers = [2, 7, 11, 15]
target = 9
result = twoSum(numbers, target)
print(result)  # Output: [0, 1]

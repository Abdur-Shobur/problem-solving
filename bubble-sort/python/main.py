my_array = [1, 4, 32, 25, 23, 252, 34, 26, 31, 2, 23,
            45, 12, 34, 23, 4, 2, 12, 34, 3, 24, 22, 34, 3, 24]


def bubbleSort(array):

    n = len(array)
    for i in range(n-1):
        for j in range(n-1-i):
            if (array[j] < array[j+1]):
                array[j], array[j+1] = array[j+1], array[j]

    return array


print('sort ', bubbleSort(my_array))

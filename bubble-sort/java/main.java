public class main {
    public static void main(String[] args) {

        int[] my_array = { 1, 4, 32, 25, 23, 252, 34, 26, 31, 2, 23, 45, 12, 34, 23, 4, 2, 12, 34, 3, 24, 22, 34, 3,
                24 };

        int n = my_array.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                if (my_array[j] > my_array[j + 1]) {
                    int temp = my_array[j + 1];
                    my_array[j + 1] = my_array[j];
                    my_array[j] = temp;
                }

            }

        }

        for (int num : my_array) {
            System.out.print(num + " ");
        }

    }

}
/*=====================
- 0.  Run Hello world
=======================*/
// public class main {
//     public static void main(String[] args) {
//         System.out.println("Hello World");
//     }
// }

public class main {
    public static void main(String[] args) {
        // System.out.println("hello");
        // greet("Hello");
        // System.out.println(reverseString("Hello Test"));
        reverseLoopString("Hello Test");

    }

    // New function
    public static void greet(String x) {
        System.out.println(x);
    }

    // reverse string
    public static String reverseString(String x) {
        return new StringBuilder(x).reverse().toString();
    }

    // reverse string using loop
    public static void reverseLoopString(String str) {
        String reverse = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            reverse += str.charAt(i);
        }

        System.out.println(reverse);
    }

}
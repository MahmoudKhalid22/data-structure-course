import java.util.Scanner;

 class Main {
    public static void main(String[] args) {
        int[] array = new int[100];
        int position, i, n;

        // Input the number of elements in the array
        @SuppressWarnings("resource")
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of elements in the array: ");
        n = scanner.nextInt();

        // Input the elements of the array
        System.out.printf("Enter %d elements: ", n);
        for (i = 0; i < n; i++) {
            array[i] = scanner.nextInt();
        }

        // Input the location where you wish to delete element
        System.out.print("Enter the location where you wish to delete element: ");
        position = scanner.nextInt();

        if (position >= n + 1) {
            System.out.println("Deletion not possible.");
        } else {
            for (i = position - 1; i < n - 1; i++) {
                array[i] = array[i + 1];
            }
            System.out.print("Final array is: ");
            for (i = 0; i < n - 1; i++) {
                System.out.print(array[i] + " ");
            }
        }
        scanner.close();
    }
}

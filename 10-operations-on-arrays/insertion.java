import java.util.Scanner;

public class insertion {
    public static void main(String[] args) {
        int[] arr = new int[50];
        int n, pos, item, i;

        // Input the size of the array
        System.out.print("Enter the size of the array: ");
        @SuppressWarnings("resource")
        Scanner scanner = new Scanner(System.in);
        n = scanner.nextInt();

        // Input the elements of the array
        System.out.print("Enter the elements of the array: ");
        for (i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        // Input the position and value of the new element to be inserted
        System.out.print("Enter the position and value of the new element to be inserted: ");
        pos = scanner.nextInt();
        item = scanner.nextInt();

        // Shift the elements after the insertion position to the right
        for (i = n - 1; i >= pos - 1; i--) {
            arr[i + 1] = arr[i];
        }

        // Insert the new element at the desired position
        arr[pos - 1] = item;

        // Increment the size of the array
        n++;

        // Print the updated array
        System.out.print("The updated array is: ");
        for (i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }

        scanner.close();
    }
}

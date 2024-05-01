import java.util.Scanner;

class Main{
public static void main(String[] args) {

    

    int[] data = new int[10];
    int i = 0, ub;
    System.out.println("Enter the Size of Array");
    @SuppressWarnings("resource")
    Scanner sc = new Scanner(System.in);
    ub = sc.nextInt();
      
    for (i = 0; i < ub; i++) {
        data[i] = sc.nextInt();
    }
    
    // Traverse the array and print each element
    for (i = 0; i < 5; i++) {
        System.out.print(data[i] + " ");
    }
    
    sc.close();
}
}
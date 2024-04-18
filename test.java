public class test {
    // Nested stack class
    private static class Stack {
        private int[] array;
        private int top;
        private int capacity;

        // Constructor
        public Stack(int size) {
            capacity = size;
            array = new int[capacity];
            top = -1;
        }

        // Push method
        public void push(int item) {
            if (top == capacity - 1) {
                System.out.println("Stack Overflow");
                return;
            }
            array[++top] = item;
        }

        // Pop method
        public int pop() {
            if (top == -1) {
                System.out.println("Stack Underflow");
                return -1;
            }
            return array[top--];
        }

        // Peek method
        public int peek() {
            if (top == -1) {
                System.out.println("Stack is empty");
                return -1;
            }
            return array[top];
        }

        // Check if stack is empty
        public boolean isEmpty() {
            return (top == -1);
        }
    }

    public static void main(String[] args) {
        // Testing the stack
        Stack stack = new Stack(5);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println(stack.pop()); // Should print 3
        System.out.println(stack.peek()); // Should print 2
        System.out.println(stack.isEmpty()); // Should print false
    }
}

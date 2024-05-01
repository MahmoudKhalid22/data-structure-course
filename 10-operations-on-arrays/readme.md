## Operations on Arrays in Data Structures

Arrays are a fundamental data structure that allows for the storage and manipulation
of a collection of elements of the same data type. In addition to traversal,
arrays can support a variety of operations that make them useful in a wide range of applications.
Here are some common operations on arrays in data structures:

1. Traversal: Array traversal refers to the process of accessing each element of an array in a
   sequential order from the beginning to the end or from the end to the beginning.

2. Insertion: Insertion is the process of adding a new element to an array. Depending on the application, the new element can be inserted at the beginning, end, or any other location within the array. When inserting an element, the other elements in the array may need to be shifted to accommodate the new element.

3. Deletion: Deletion is the process of removing an existing element from an array. Depending on the application, the element to be deleted can be at any location within the array. When deleting an element, the other elements in the array may need to be shifted to fill the gap left by the deleted element.

4. Search: Search is the process of finding a specific element within an array. This is done by comparing the target element with each element in the array until a match is found. There are various search algorithms that can be used, such as linear search and binary search.

5. Sorting: Sorting is the process of arranging the elements in an array in a specific order. The most common sorting algorithms are bubble sort, insertion sort, selection sort, merge sort, and quicksort. Sorting an array can help with searching and other operations, as it allows for efficient data processing.

6. Access: Access is the process of retrieving the value of an element from an array. This is done by specifying the index of the desired element within the array. Array access is fast and efficient, as it does not require traversal of the entire array.

Traversal: Array traversal refers to the process of accessing each element of an array in a sequential order from the beginning to the end or from the end to the beginning.

Insertion: Insertion is the process of adding a new element to an array. Depending on the application, the new element can be inserted at the beginning, end, or any other location within the array. When inserting an element, the other elements in the array may need to be shifted to accommodate the new element.

Deletion: Deletion is the process of removing an existing element from an array. Depending on the application, the element to be deleted can be at any location within the array. When deleting an element, the other elements in the array may need to be shifted to fill the gap left by the deleted element.

Search: Search is the process of finding a specific element within an array. This is done by comparing the target element with each element in the array until a match is found. There are various search algorithms that can be used, such as linear search and binary search.

Sorting: Sorting is the process of arranging the elements in an array in a specific order. The most common sorting algorithms are bubble sort, insertion sort, selection sort, merge sort, and quicksort. Sorting an array can help with searching and other operations, as it allows for efficient data processing.

Access: Access is the process of retrieving the value of an element from an array. This is done by specifying the index of the desired element within the array. Array access is fast and efficient, as it does not require traversal of the entire array.

### Traversal Operation

Array traversal refers to the process of accessing each element of an array in a sequential order. In data structures, an array is a collection of similar data items that are stored in contiguous memory locations. Traversing an array involves visiting each element of the array in a specified order, typically from the beginning to the end or from the end to the beginning.

Algorithm for Traversing an Array
Traversal (data,LB,UB)

Here data is array name and LB is Lower Bound (start) index of the first element of an array. UB is Upper Bound (End) is the index of the last element

- Step 1: Start
- Step 2: [Initialize variable. ] Set i = LB
- Step 3: Repeat steps 4 and 5 While i <= UB
- Step 4: Apply process (Print ) to data[i].
- Step 5: Increment i=i+1
- Step 6: End of loop
- Step 7: Stop

### Insertion Operation

Insertion in an array refers to the process of adding a new element to a specific position within the array while shifting the existing elements to make room for the new element.

Here's a simple algorithm in simple language to perform an insertion in an array:

Define the array and the element to be inserted.
Determine the position where the element should be inserted.
Shift the elements after the insertion position to the right by one index to make room for the new element.
Insert the new element at the desired position.
Update the length of the array.
Algorithm to Insert an element in an Array
Here size is the array size. Position (pos) is location where element to be inserted and Item is new value in the array

### Deletion Operation

Deletion in an array means removing an element from an array and shifting the remaining elements to fill the empty space.

Here is the algorithm to delete an element from an array in C:

Initialize the array and the index of the element to be deleted.
Traverse the array from the index of the element to be deleted until the end of the array.
Shift each element one position to the left.
Decrement the size of the array by 1.

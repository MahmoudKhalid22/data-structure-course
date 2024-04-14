## What is Algorithm Complexity?

Algorithm complexity refers to the number of steps an algorithm needs to take in order to solve a particular problem. When given an input of size n, an algorithm's complexity is determined by how long it would take to complete a particular problem. If an algorithm needs to scale, even for very large values of n, it should still be able to compute the result in a finite and reasonable amount of time. Because of this, complexity is estimated asymptotically as n gets closer to infinity. While complexity is typically measured in terms of time, it can also be measured in terms of space, or more specifically, in terms of the amount of memory used by the algorithm.

### Examples to Understand Algorithm Complexity

- If there is a big, unsorted list and you are seeking for a certain item, you will likely compare each item. Search time is proportional to the list size. In this case, complexity is linear.

- On the other hand, searching for a word in a dictionary will be quicker since the words are arranged in order, you are aware of the order, and you can quickly determine whether you need to turn to earlier or later pages. This is an illustration of logarithmic complexity.

- No matter how many words there are in the dictionary, selecting the first word from it always takes a Constant amount of time. The complexity of joining the end of a bank queue is also constant regardless of how lengthy the queue is.This is an illustration of constant complexity.

- The difficulty increases quadratically if you are requested to find all duplicates in an unsorted list. It is linearly complex to search for duplicates of a single item. If we apply this rule to every item, complexity takes a quadratic form.

### What is the time space trade off?

A space-time tradeoff is a strategy used in computer science to either solve a problem or calculation quickly by using more storage space, or slowly and carefully by using very little space.

An algorithm or software in this situation trades off more space usage for less time. Thus, space refers to the amount of data storage used (RAM, HDD, etc.) and time refers to the amount of time used to complete a certain activity (computation time or response time)

Need of Time Space Tradeoff
Less time by using more memory
Solving a problem in very little space by spending a long time.

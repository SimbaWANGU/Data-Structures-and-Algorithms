# Subarray Division

Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

## Sample Input 0
s = [1,2,1,3,2]
d = 3
m = 2

output = 2

### Explanation
Lily wants to give Ron  m=2 squares summing to d=3. The following two segments meet the criteria

## Sample Input 1

s = [1,1,1,1,1,1]
d = 3
m = 2

output = 0

### Explanation
Lily only wants to give Ron m=2 consecutive squares of chocolate whose integers sum to d=3. There are no possible pieces satisfying these constraints.
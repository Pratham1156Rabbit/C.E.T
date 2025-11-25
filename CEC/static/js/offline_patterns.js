console.log("offline_patterns.js loaded");

// Common code patterns and their explanations
const codePatterns = {
    python: {
        'for_loop': {
            pattern: /for\s+(\w+)\s+in\s+(\w+):/,
            explanation: 'This is a for loop that iterates over elements in a collection. The variable $1 takes each value from $2 one by one.'
        },
        'if_statement': {
            pattern: /if\s+(.+):/,
            explanation: 'This is an if statement that checks if the condition $1 is true. If true, the code block below will execute.'
        },
        'function_def': {
            pattern: /def\s+(\w+)\((.*)\):/,
            explanation: 'This defines a function named $1 that takes parameters $2. The code block below contains the function\'s implementation.'
        },
        'bubble_sort': {
            pattern: /for\s+i\s+in\s+range\(len\((\w+)\)\):\s+for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):\s+if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:\s+(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            explanation: 'This is a Bubble Sort algorithm implementation. It repeatedly steps through the list $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the list is sorted.'
        },
        'binary_search': {
            pattern: /while\s+low\s*<=\s*high:\s+mid\s*=\s*\(low\s*\+\s*high\)\s*\/\/\s*2\s+if\s+(\w+)\[mid\]\s*==\s*target:\s+return\s+mid\s+elif\s+(\w+)\[mid\]\s*<\s*target:\s+low\s*=\s*mid\s*\+\s*1\s+else:\s+high\s*=\s*mid\s*-\s*1/,
            explanation: 'This is a Binary Search algorithm. It searches for a target value in a sorted array $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        },
        'fibonacci': {
            pattern: /if\s+n\s*<=\s*1:\s+return\s+n\s+return\s+fibonacci\(n\s*-\s*1\)\s*\+\s*fibonacci\(n\s*-\s*2\)/,
            explanation: 'This is a recursive implementation of the Fibonacci sequence. It calculates the nth Fibonacci number by summing the two previous numbers in the sequence. The base case returns n when n is 0 or 1.'
        },
        'quick_sort': {
            pattern: /if\s+len\((\w+)\)\s*<=\s*1:\s+return\s+(\w+)\s+pivot\s*=\s*(\w+)\[len\((\w+)\)\s*\/\/\s*2\]\s+left\s*=\s*\[x\s+for\s+x\s+in\s+(\w+)\s+if\s+x\s*<\s*pivot\]\s+middle\s*=\s*\[x\s+for\s+x\s+in\s+(\w+)\s+if\s+x\s*==\s*pivot\]\s+right\s*=\s*\[x\s+for\s+x\s+in\s+(\w+)\s+if\s+x\s*>\s*pivot\]\s+return\s+quick_sort\(left\)\s*\+\s*middle\s*\+\s*quick_sort\(right\)/,
            explanation: 'This is a Quick Sort algorithm implementation. It works by selecting a pivot element ($1[len($1)//2]) and partitioning the array $1 into three parts: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot. The process is recursively applied to the left and right partitions.'
        },
        'dfs': {
            pattern: /def\s+dfs\(graph,\s*start,\s*visited\s*=\s*None\):\s+if\s+visited\s+is\s+None:\s+visited\s*=\s*set\(\)\s+visited\.add\(start\)\s+for\s+neighbor\s+in\s+graph\[start\]:\s+if\s+neighbor\s+not\s+in\s+visited:\s+dfs\(graph,\s*neighbor,\s*visited\)/,
            explanation: 'This is a Depth-First Search (DFS) algorithm implementation. It explores as far as possible along each branch before backtracking. The function takes a graph, a starting node, and a set of visited nodes. It marks the current node as visited and recursively visits all unvisited neighbors.'
        },
        'bfs': {
            pattern: /def\s+bfs\(graph,\s*start\):\s+visited\s*=\s*set\(\)\s+queue\s*=\s*\[start\]\s+while\s+queue:\s+vertex\s*=\s*queue\.pop\(0\)\s+if\s+vertex\s+not\s+in\s+visited:\s+visited\.add\(vertex\)\s+queue\.extend\(graph\[vertex\]\s*-\s*visited\)/,
            explanation: 'This is a Breadth-First Search (BFS) algorithm implementation. It explores all nodes at the present depth level before moving on to nodes at the next depth level. It uses a queue to keep track of nodes to visit and a set to track visited nodes.'
        },
        'print': {
            pattern: /print\((.*)\)/,
            explanation: 'This is a print statement that outputs the value of $1 to the console. In Python, print() is a built-in function that converts its arguments to strings and displays them.'
        }
    },
    javascript: {
        'for_loop': {
            pattern: /for\s*\(\s*(\w+)\s*=\s*(\d+)\s*;\s*\1\s*([<>=]+)\s*(\d+)\s*;\s*\1\s*(\+\+|--)\s*\)/,
            explanation: 'This is a for loop that initializes $1 to $2, continues while $1 $3 $4, and increments/decrements $1 each iteration.'
        },
        'if_statement': {
            pattern: /if\s*\((.*)\)\s*{/,
            explanation: 'This is an if statement that checks if the condition $1 is true. If true, the code block inside the curly braces will execute.'
        },
        'function_def': {
            pattern: /function\s+(\w+)\s*\((.*)\)\s*{/,
            explanation: 'This defines a function named $1 that takes parameters $2. The code block inside the curly braces contains the function\'s implementation.'
        },
        'bubble_sort': {
            pattern: /for\s*\(\s*let\s+i\s*=\s*0\s*;\s*i\s*<\s*(\w+)\.length\s*;\s*i\+\+\)\s*{\s*for\s*\(\s*let\s+j\s*=\s*0\s*;\s*j\s*<\s*(\w+)\.length\s*-\s*i\s*-\s*1\s*;\s*j\+\+\)\s*{\s*if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*{\s*\[\s*(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*\]\s*=\s*\[\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]\s*\]/,
            explanation: 'This is a Bubble Sort algorithm implementation. It repeatedly steps through the array $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the array is sorted.'
        },
        'binary_search': {
            pattern: /while\s*\(\s*low\s*<=\s*high\s*\)\s*{\s*const\s+mid\s*=\s*Math\.floor\(\s*\(\s*low\s*\+\s*high\s*\)\s*\/\s*2\s*\)\s*;\s*if\s*\((\w+)\[mid\]\s*===\s*target\)\s*{\s*return\s+mid\s*;\s*}\s*else\s+if\s*\((\w+)\[mid\]\s*<\s*target\)\s*{\s*low\s*=\s*mid\s*\+\s*1\s*;\s*}\s*else\s*{\s*high\s*=\s*mid\s*-\s*1\s*;\s*}\s*}\s*return\s*-1\s*;}/,
            explanation: 'This is a Binary Search algorithm. It searches for a target value in a sorted array $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        },
        'fibonacci': {
            pattern: /if\s*\(\s*n\s*<=\s*1\s*\)\s*{\s*return\s+n\s*;\s*}\s*return\s+fibonacci\(\s*n\s*-\s*1\s*\)\s*\+\s*fibonacci\(\s*n\s*-\s*2\s*\)/,
            explanation: 'This is a recursive implementation of the Fibonacci sequence. It calculates the nth Fibonacci number by summing the two previous numbers in the sequence. The base case returns n when n is 0 or 1.'
        },
        'quick_sort': {
            pattern: /if\s*\(\s*(\w+)\.length\s*<=\s*1\s*\)\s*{\s*return\s+(\w+)\s*;\s*}\s*const\s+pivot\s*=\s*(\w+)\[Math\.floor\(\s*(\w+)\.length\s*\/\s*2\s*\)\]\s*;\s*const\s+left\s*=\s*(\w+)\.filter\(\s*x\s*=>\s*x\s*<\s*pivot\s*\)\s*;\s*const\s+middle\s*=\s*(\w+)\.filter\(\s*x\s*=>\s*x\s*===\s*pivot\s*\)\s*;\s*const\s+right\s*=\s*(\w+)\.filter\(\s*x\s*=>\s*x\s*>\s*pivot\s*\)\s*;\s*return\s*\[\s*\.\.\.quickSort\(\s*left\s*\),\s*\.\.\.middle,\s*\.\.\.quickSort\(\s*right\s*\)\s*\]/,
            explanation: 'This is a Quick Sort algorithm implementation. It works by selecting a pivot element ($1[Math.floor($1.length/2)]) and partitioning the array $1 into three parts: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot. The process is recursively applied to the left and right partitions.'
        },
        'dfs': {
            pattern: /function\s+dfs\(\s*graph,\s*start,\s*visited\s*=\s*new\s+Set\(\)\s*\)\s*{\s*visited\.add\(\s*start\s*\)\s*;\s*for\s*\(\s*const\s+neighbor\s+of\s+graph\[start\]\s*\)\s*{\s*if\s*\(\s*!visited\.has\(\s*neighbor\s*\)\s*\)\s*{\s*dfs\(\s*graph,\s*neighbor,\s*visited\s*\)\s*;\s*}\s*}/,
            explanation: 'This is a Depth-First Search (DFS) algorithm implementation. It explores as far as possible along each branch before backtracking. The function takes a graph, a starting node, and a set of visited nodes. It marks the current node as visited and recursively visits all unvisited neighbors.'
        },
        'bfs': {
            pattern: /function\s+bfs\(\s*graph,\s*start\s*\)\s*{\s*const\s+visited\s*=\s*new\s+Set\(\)\s*;\s*const\s+queue\s*=\s*\[\s*start\s*\]\s*;\s*while\s*\(\s*queue\.length\s*>\s*0\s*\)\s*{\s*const\s+vertex\s*=\s*queue\.shift\(\)\s*;\s*if\s*\(\s*!visited\.has\(\s*vertex\s*\)\s*\)\s*{\s*visited\.add\(\s*vertex\s*\)\s*;\s*queue\.push\(\s*\.\.\.graph\[vertex\]\s*\)\s*;\s*}\s*}/,
            explanation: 'This is a Breadth-First Search (BFS) algorithm implementation. It explores all nodes at the present depth level before moving on to nodes at the next depth level. It uses a queue to keep track of nodes to visit and a set to track visited nodes.'
        },
        'console.log': {
            pattern: /console\.log\((.*)\);?/,
            explanation: 'This is a console.log statement that outputs the value of $1 to the browser console. In JavaScript, console.log() is a method of the console object used for debugging and displaying information.'
        }
    },
    java: {
        'System.out.print': {
            pattern: /System\.out\.print(ln)?\((.*)\);?/,
            explanation: function(match) {
                if (match[1] === 'ln') {
                    return 'This is a System.out.println statement that prints the value of ' + match[2] + ' to the standard output stream, followed by a newline. In Java, System.out.println() prints the argument and moves to a new line.';
                } else {
                    return 'This is a System.out.print statement that prints the value of ' + match[2] + ' to the standard output stream. In Java, System.out.print() prints the argument without moving to a new line.';
                }
            }
        },
        'bubble_sort': {
            pattern: /public\s+static\s+void\s+bubbleSort\(\s*int\[\]\s+(\w+)\s*\)\s*{\s*for\s*\(\s*int\s+i\s*=\s*0\s*;\s*i\s*<\s*(\w+)\.length\s*;\s*i\+\+\)\s*{\s*for\s*\(\s*int\s+j\s*=\s*0\s*;\s*j\s*<\s*(\w+)\.length\s*-\s*i\s*-\s*1\s*;\s*j\+\+\)\s*{\s*if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*{\s*int\s+temp\s*=\s*(\w+)\[j\]\s*;\s*(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\]\s*;\s*(\w+)\[j\s*\+\s*1\]\s*=\s*temp\s*;\s*}\s*}\s*}/,
            explanation: 'This is a Bubble Sort algorithm implementation in Java. It repeatedly steps through the array $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the array is sorted.'
        },
        'binary_search': {
            pattern: /public\s+static\s+int\s+binarySearch\(\s*int\[\]\s+(\w+),\s*int\s+target\s*\)\s*{\s*int\s+low\s*=\s*0\s*;\s*int\s+high\s*=\s*(\w+)\.length\s*-\s*1\s*;\s*while\s*\(\s*low\s*<=\s*high\s*\)\s*{\s*int\s+mid\s*=\s*\(\s*low\s*\+\s*high\s*\)\s*\/\s*2\s*;\s*if\s*\((\w+)\[mid\]\s*==\s*target\)\s*{\s*return\s+mid\s*;\s*}\s*else\s+if\s*\((\w+)\[mid\]\s*<\s*target\)\s*{\s*low\s*=\s*mid\s*\+\s*1\s*;\s*}\s*else\s*{\s*high\s*=\s*mid\s*-\s*1\s*;\s*}\s*}\s*return\s*-1\s*;}/,
            explanation: 'This is a Binary Search algorithm in Java. It searches for a target value in a sorted array $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        }
    },
    c: {
        'printf': {
            pattern: /printf\((.*)\);?/,
            explanation: 'This is a printf statement that prints formatted output to the standard output stream. In C, printf() is a function from the stdio.h library that allows formatted output using format specifiers.'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(\s*int\s+(\w+)\[\],\s*int\s+n\s*\)\s*{\s*for\s*\(\s*int\s+i\s*=\s*0\s*;\s*i\s*<\s*n\s*-\s*1\s*;\s*i\+\+\)\s*{\s*for\s*\(\s*int\s+j\s*=\s*0\s*;\s*j\s*<\s*n\s*-\s*i\s*-\s*1\s*;\s*j\+\+\)\s*{\s*if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*{\s*int\s+temp\s*=\s*(\w+)\[j\]\s*;\s*(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\]\s*;\s*(\w+)\[j\s*\+\s*1\]\s*=\s*temp\s*;\s*}\s*}\s*}/,
            explanation: 'This is a Bubble Sort algorithm implementation in C. It repeatedly steps through the array $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the array is sorted.'
        },
        'binary_search': {
            pattern: /int\s+binarySearch\(\s*int\s+(\w+)\[\],\s*int\s+left,\s*int\s+right,\s*int\s+target\s*\)\s*{\s*while\s*\(\s*left\s*<=\s*right\s*\)\s*{\s*int\s+mid\s*=\s*left\s*\+\s*\(\s*right\s*-\s*left\s*\)\s*\/\s*2\s*;\s*if\s*\((\w+)\[mid\]\s*==\s*target\)\s*{\s*return\s+mid\s*;\s*}\s*if\s*\((\w+)\[mid\]\s*<\s*target\)\s*{\s*left\s*=\s*mid\s*\+\s*1\s*;\s*}\s*else\s*{\s*right\s*=\s*mid\s*-\s*1\s*;\s*}\s*}\s*return\s*-1\s*;}/,
            explanation: 'This is a Binary Search algorithm in C. It searches for a target value in a sorted array $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        }
    },
    cpp: {
        'cout': {
            pattern: /cout\s*<<\s*(.*)\s*<<\s*endl;?/,
            explanation: 'This is a cout statement that outputs the value of $1 to the standard output stream followed by a newline. In C++, cout is an object of the ostream class that represents the standard output stream.'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(\s*vector<int>\s*&\s*(\w+)\)\s*{\s*for\s*\(\s*int\s+i\s*=\s*0\s*;\s*i\s*<\s*(\w+)\.size\(\)\s*-\s*1\s*;\s*i\+\+\)\s*{\s*for\s*\(\s*int\s+j\s*=\s*0\s*;\s*j\s*<\s*(\w+)\.size\(\)\s*-\s*i\s*-\s*1\s*;\s*j\+\+\)\s*{\s*if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*{\s*swap\(\s*(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*\)\s*;\s*}\s*}\s*}/,
            explanation: 'This is a Bubble Sort algorithm implementation in C++. It repeatedly steps through the vector $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the vector is sorted.'
        },
        'binary_search': {
            pattern: /int\s+binarySearch\(\s*vector<int>\s*&\s*(\w+),\s*int\s+target\s*\)\s*{\s*int\s+left\s*=\s*0\s*;\s*int\s+right\s*=\s*(\w+)\.size\(\)\s*-\s*1\s*;\s*while\s*\(\s*left\s*<=\s*right\s*\)\s*{\s*int\s+mid\s*=\s*left\s*\+\s*\(\s*right\s*-\s*left\s*\)\s*\/\s*2\s*;\s*if\s*\((\w+)\[mid\]\s*==\s*target\)\s*{\s*return\s+mid\s*;\s*}\s*if\s*\((\w+)\[mid\]\s*<\s*target\)\s*{\s*left\s*=\s*mid\s*\+\s*1\s*;\s*}\s*else\s*{\s*right\s*=\s*mid\s*-\s*1\s*;\s*}\s*}\s*return\s*-1\s*;}/,
            explanation: 'This is a Binary Search algorithm in C++. It searches for a target value in a sorted vector $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        }
    },
    csharp: {
        'Console.WriteLine': {
            pattern: /Console\.WriteLine\((.*)\);?/,
            explanation: 'This is a Console.WriteLine statement that writes the value of $1 to the standard output stream followed by a newline. In C#, Console.WriteLine() is a method of the Console class.'
        },
        'bubble_sort': {
            pattern: /public\s+static\s+void\s+BubbleSort\(\s*int\[\]\s+(\w+)\)\s*{\s*for\s*\(\s*int\s+i\s*=\s*0\s*;\s*i\s*<\s*(\w+)\.Length\s*-\s*1\s*;\s*i\+\+\)\s*{\s*for\s*\(\s*int\s+j\s*=\s*0\s*;\s*j\s*<\s*(\w+)\.Length\s*-\s*i\s*-\s*1\s*;\s*j\+\+\)\s*{\s*if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*{\s*int\s+temp\s*=\s*(\w+)\[j\]\s*;\s*(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\]\s*;\s*(\w+)\[j\s*\+\s*1\]\s*=\s*temp\s*;\s*}\s*}\s*}/,
            explanation: 'This is a Bubble Sort algorithm implementation in C#. It repeatedly steps through the array $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the array is sorted.'
        },
        'binary_search': {
            pattern: /public\s+static\s+int\s+BinarySearch\(\s*int\[\]\s+(\w+),\s*int\s+target\s*\)\s*{\s*int\s+left\s*=\s*0\s*;\s*int\s+right\s*=\s*(\w+)\.Length\s*-\s*1\s*;\s*while\s*\(\s*left\s*<=\s*right\s*\)\s*{\s*int\s+mid\s*=\s*left\s*\+\s*\(\s*right\s*-\s*left\s*\)\s*\/\s*2\s*;\s*if\s*\((\w+)\[mid\]\s*==\s*target\)\s*{\s*return\s+mid\s*;\s*}\s*if\s*\((\w+)\[mid\]\s*<\s*target\)\s*{\s*left\s*=\s*mid\s*\+\s*1\s*;\s*}\s*else\s*{\s*right\s*=\s*mid\s*-\s*1\s*;\s*}\s*}\s*return\s*-1\s*;}/,
            explanation: 'This is a Binary Search algorithm in C#. It searches for a target value in a sorted array $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        }
    },
    ruby: {
        'puts': {
            pattern: /puts\s+(.*)/,
            explanation: 'This is a puts statement that outputs the value of $1 to the standard output followed by a newline. In Ruby, puts is a method that converts its argument to a string and adds a newline.'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\)\s*(\w+)\.each_index\s+do\s+\|\s*i\s*\|.*?(\w+)\.each_index\s+do\s+\|\s*j\s*\|.*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]\s*end\s*end\s*end/,
            explanation: 'This is a Bubble Sort algorithm implementation in Ruby. It repeatedly steps through the array $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the array is sorted.'
        },
        'binary_search': {
            pattern: /def\s+binary_search\(\s*(\w+),\s*target\s*\)\s*low\s*=\s*0\s*high\s*=\s*(\w+)\.length\s*-\s*1\s*while\s+low\s*<=\s*high\s*mid\s*=\s*\(\s*low\s*\+\s*high\s*\)\s*\/\s*2\s*if\s+(\w+)\[mid\]\s*==\s*target\s*return\s+mid\s*elsif\s+(\w+)\[mid\]\s*<\s*target\s*low\s*=\s*mid\s*\+\s*1\s*else\s*high\s*=\s*mid\s*-\s*1\s*end\s*end\s*-1\s*end/,
            explanation: 'This is a Binary Search algorithm in Ruby. It searches for a target value in a sorted array $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        }
    },
    php: {
        'echo': {
            pattern: /echo\s+(.*);?/,
            explanation: 'This is an echo statement that outputs the value of $1. In PHP, echo is a language construct that outputs one or more strings.'
        },
        'bubble_sort': {
            pattern: /function\s+bubbleSort\(\s*&\s*(\w+)\s*\)\s*{\s*\$n\s*=\s*count\(\s*(\w+)\s*\)\s*;\s*for\s*\(\s*\$i\s*=\s*0\s*;\s*\$i\s*<\s*\$n\s*-\s*1\s*;\s*\$i\+\+\)\s*{\s*for\s*\(\s*\$j\s*=\s*0\s*;\s*\$j\s*<\s*\$n\s*-\s*\$i\s*-\s*1\s*;\s*\$j\+\+\)\s*{\s*if\s*\(\s*(\w+)\[\$j\]\s*>\s*(\w+)\[\$j\s*\+\s*1\]\s*\)\s*{\s*\$temp\s*=\s*(\w+)\[\$j\]\s*;\s*(\w+)\[\$j\]\s*=\s*(\w+)\[\$j\s*\+\s*1\]\s*;\s*(\w+)\[\$j\s*\+\s*1\]\s*=\s*\$temp\s*;\s*}\s*}\s*}/,
            explanation: 'This is a Bubble Sort algorithm implementation in PHP. It repeatedly steps through the array $1, compares adjacent elements ($1[$j] and $1[$j+1]), and swaps them if they are in the wrong order. The process is repeated until the array is sorted.'
        },
        'binary_search': {
            pattern: /function\s+binarySearch\(\s*\$(\w+),\s*\$target\s*\)\s*{\s*\$left\s*=\s*0\s*;\s*\$right\s*=\s*count\(\s*\$(\w+)\s*\)\s*-\s*1\s*;\s*while\s*\(\s*\$left\s*<=\s*\$right\s*\)\s*{\s*\$mid\s*=\s*\$left\s*\+\s*\(\s*\$right\s*-\s*\$left\s*\)\s*\/\s*2\s*;\s*if\s*\(\s*\$(\w+)\[\$mid\]\s*==\s*\$target\s*\)\s*{\s*return\s*\$mid\s*;\s*}\s*if\s*\(\s*\$(\w+)\[\$mid\]\s*<\s*\$target\s*\)\s*{\s*\$left\s*=\s*\$mid\s*\+\s*1\s*;\s*}\s*else\s*{\s*\$right\s*=\s*\$mid\s*-\s*1\s*;\s*}\s*}\s*return\s*-1\s*;}/,
            explanation: 'This is a Binary Search algorithm in PHP. It searches for a target value in a sorted array $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        }
    },
    swift: {
        'print': {
            pattern: /print\((.*)\)/,
            explanation: 'This is a print statement that outputs the value of $1 to the standard output. In Swift, print() is a global function that writes the textual representation of its arguments.'
        },
        'bubble_sort': {
            pattern: /func\s+bubbleSort\(\s*_\s*(\w+)\s*:\s*inout\s*\[\s*Int\s*\]\s*\)\s*{\s*for\s+i\s+in\s+0\.\.<(\w+)\.count\s*-\s*1\s*{\s*for\s+j\s+in\s+0\.\.<(\w+)\.count\s*-\s*i\s*-\s*1\s*{\s*if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*{\s*(\w+)\.swapAt\(\s*j,\s*j\s*\+\s*1\s*\)\s*}\s*}\s*}/,
            explanation: 'This is a Bubble Sort algorithm implementation in Swift. It repeatedly steps through the array $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the array is sorted.'
        },
        'binary_search': {
            pattern: /func\s+binarySearch\(\s*_\s*(\w+)\s*:\s*\[\s*Int\s*\],\s*target\s*:\s*Int\s*\)\s*->\s*Int\s*{\s*var\s+left\s*=\s*0\s*var\s+right\s*=\s*(\w+)\.count\s*-\s*1\s*while\s+left\s*<=\s*right\s*{\s*let\s+mid\s*=\s*left\s*\+\s*\(\s*right\s*-\s*left\s*\)\s*\/\s*2\s*if\s+(\w+)\[mid\]\s*==\s*target\s*{\s*return\s+mid\s*}\s*if\s+(\w+)\[mid\]\s*<\s*target\s*{\s*left\s*=\s*mid\s*\+\s*1\s*}\s*else\s*{\s*right\s*=\s*mid\s*-\s*1\s*}\s*}\s*return\s*-1\s*}/,
            explanation: 'This is a Binary Search algorithm in Swift. It searches for a target value in a sorted array $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        }
    },
    go: {
        'fmt.Println': {
            pattern: /fmt\.Println\((.*)\);?/,
            explanation: 'This is a fmt.Println statement that formats and prints the value of $1 to standard output followed by a newline. In Go, fmt.Println() is a function from the fmt package.'
        },
        'bubble_sort': {
            pattern: /func\s+bubbleSort\(\s*(\w+)\s*\[\]\s*int\s*\)\s*{\s*n\s*:=\s*len\(\s*(\w+)\s*\)\s*for\s+i\s*:=\s*0\s*;\s*i\s*<\s*n\s*-\s*1\s*;\s*i\+\+\s*{\s*for\s+j\s*:=\s*0\s*;\s*j\s*<\s*n\s*-\s*i\s*-\s*1\s*;\s*j\+\+\s*{\s*if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*{\s*(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]\s*}\s*}\s*}/,
            explanation: 'This is a Bubble Sort algorithm implementation in Go. It repeatedly steps through the slice $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the slice is sorted.'
        },
        'binary_search': {
            pattern: /func\s+binarySearch\(\s*(\w+)\s*\[\]\s*int,\s*target\s+int\s*\)\s*int\s*{\s*left\s*:=\s*0\s*right\s*:=\s*len\(\s*(\w+)\s*\)\s*-\s*1\s*for\s+left\s*<=\s*right\s*{\s*mid\s*:=\s*left\s*\+\s*\(\s*right\s*-\s*left\s*\)\s*\/\s*2\s*;\s*if\s+(\w+)\[mid\]\s*==\s*target\s*{\s*return\s+mid\s*}\s*if\s+(\w+)\[mid\]\s*<\s*target\s*{\s*left\s*=\s*mid\s*\+\s*1\s*}\s*else\s*{\s*right\s*=\s*mid\s*-\s*1\s*}\s*}\s*return\s*-1\s*}/,
            explanation: 'This is a Binary Search algorithm in Go. It searches for a target value in a sorted slice $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        }
    },
    rust: {
        'println!': {
            pattern: /println!\((.*)\);?/,
            explanation: 'This is a println! macro that prints the value of $1 to standard output followed by a newline. In Rust, println! is a macro that formats and prints text.'
        },
        'bubble_sort': {
            pattern: /fn\s+bubble_sort\(\s*(\w+)\s*:\s*&\s*mut\s*\[\s*i32\s*\]\s*\)\s*{\s*let\s+n\s*=\s*(\w+)\.len\(\)\s*;\s*for\s+i\s+in\s+0\.\.n\s*-\s*1\s*{\s*for\s+j\s+in\s+0\.\.n\s*-\s*i\s*-\s*1\s*{\s*if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*{\s*(\w+)\.swap\(\s*j,\s*j\s*\+\s*1\s*\)\s*}\s*}\s*}/,
            explanation: 'This is a Bubble Sort algorithm implementation in Rust. It repeatedly steps through the slice $1, compares adjacent elements ($1[j] and $1[j+1]), and swaps them if they are in the wrong order. The process is repeated until the slice is sorted.'
        },
        'binary_search': {
            pattern: /fn\s+binary_search\(\s*(\w+)\s*:\s*&\s*\[\s*i32\s*\],\s*target\s*:\s*i32\s*\)\s*->\s*Option<usize>\s*{\s*let\s+mut\s+left\s*=\s*0\s*;\s*let\s+mut\s+right\s*=\s*(\w+)\.len\(\)\s*-\s*1\s*;\s*while\s+left\s*<=\s*right\s*{\s*let\s+mid\s*=\s*left\s*\+\s*\(\s*right\s*-\s*left\s*\)\s*\/\s*2\s*;\s*if\s+(\w+)\[mid\]\s*==\s*target\s*{\s*return\s+Some\(\s*mid\s*\)\s*;\s*}\s*if\s+(\w+)\[mid\]\s*<\s*target\s*{\s*left\s*=\s*mid\s*\+\s*1\s*;\s*}\s*else\s*{\s*right\s*=\s*mid\s*-\s*1\s*;\s*}\s*}\s*None\s*}/,
            explanation: 'This is a Binary Search algorithm in Rust. It searches for a target value in a sorted slice $1 by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.'
        }
    }
};
// Function to explain code using patterns
function explainCode(code, language) {
    let explanation = '';
    const patterns = codePatterns[language] || {};
    
    for (const [patternName, patternData] of Object.entries(patterns)) {
        const match = code.match(patternData.pattern);
        if (match) {
            let patternExplanation = typeof patternData.explanation === 'function'
                ? patternData.explanation(match)
                : patternData.explanation;
            for (let i = 1; i < match.length; i++) {
                if (typeof patternExplanation === 'string') {
                    patternExplanation = patternExplanation.replace(`$${i}`, match[i]);
                }
            }
            explanation += patternExplanation + '\n\n';
        }
    }
    
    return explanation || 'This code contains patterns that are not correct in syntax or selected wrong language. For a more detailed explanation, please use the online version.';
}
// Export functions for use in other files
window.offlineCodeTools = {
    explainCode,
}; 
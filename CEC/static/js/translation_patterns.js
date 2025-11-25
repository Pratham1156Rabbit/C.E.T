// Complete set of language translation patterns
const codeTranslations = {
    // Python to other languages
    'python_to_javascript': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'console.log($1);'
        },
        'for_loop': {
            pattern: /for\s+(\w+)\s+in\s+range\((\d+)\):/,
            translation: 'for (let $1 = 0; $1 < $2; $1++) {'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'function bubbleSort($1) {\n  for (let i = 0; i < $1.length; i++) {\n    for (let j = 0; j < $1.length - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        [$1[j], $1[j + 1]] = [$1[j + 1], $1[j]];\n      }\n    }\n  }\n}'
        },
        'binary_search': {
            pattern: /def\s+binary_search\((\w+),\s*target\):[\s\S]*?low,\s*high\s*=\s*0,\s*len\((\w+)\)\s*-\s*1[\s\S]*?while\s+low\s*<=\s*high:[\s\S]*?mid\s*=\s*\(low\s*\+\s*high\)\s*\/\/\s*2[\s\S]*?if\s+(\w+)\[mid\]\s*==\s*target:[\s\S]*?return\s+mid[\s\S]*?elif\s+(\w+)\[mid\]\s*<\s*target:[\s\S]*?low\s*=\s*mid\s*\+\s*1[\s\S]*?else:[\s\S]*?high\s*=\s*mid\s*-\s*1[\s\S]*?return\s+-1/,
            translation: 'function binarySearch($1, target) {\n  let low = 0;\n  let high = $1.length - 1;\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    if ($1[mid] === target) {\n      return mid;\n    } else if ($1[mid] < target) {\n      low = mid + 1;\n    } else {\n      high = mid - 1;\n    }\n  }\n  return -1;\n}'
        },
        'quick_sort': {
            pattern: /def\s+quick_sort\((\w+)\):\s+if\s+len\((\w+)\)\s*<=\s*1:\s+return\s+(\w+)\s+pivot\s*=\s*(\w+)\[len\((\w+)\)\s*\/\/\s*2\]\s+left\s*=\s*\[x\s+for\s+x\s+in\s+(\w+)\s+if\s+x\s*<\s*pivot\]\s+middle\s*=\s*\[x\s+for\s+x\s+in\s+(\w+)\s+if\s+x\s*==\s*pivot\]\s+right\s*=\s*\[x\s+for\s+x\s+in\s+(\w+)\s+if\s+x\s*>\s*pivot\]\s+return\s+quick_sort\(left\)\s*\+\s*middle\s*\+\s*quick_sort\(right\)/,
            translation: 'function quickSort($1) {\n  if ($1.length <= 1) return $1;\n  const pivot = $1[Math.floor($1.length / 2)];\n  const left = $1.filter(x => x < pivot);\n  const middle = $1.filter(x => x === pivot);\n  const right = $1.filter(x => x > pivot);\n  return [...quickSort(left), ...middle, ...quickSort(right)];\n}'
        },
        'dfs': {
            pattern: /def\s+dfs\(graph,\s*start,\s*visited\s*=\s*None\):\s+if\s+visited\s+is\s+None:\s+visited\s*=\s*set\(\)\s+visited\.add\(start\)\s+for\s+neighbor\s+in\s+graph\[start\]:\s+if\s+neighbor\s+not\s+in\s+visited:\s+dfs\(graph,\s*neighbor,\s*visited\)/,
            translation: 'function dfs(graph, start, visited = new Set()) {\n  visited.add(start);\n  for (const neighbor of graph[start]) {\n    if (!visited.has(neighbor)) {\n      dfs(graph, neighbor, visited);\n    }\n  }\n}'
        },
        'bfs': {
            pattern: /def\s+bfs\(graph,\s*start\):\s+visited\s*=\s*set\(\)\s+queue\s*=\s*\[start\]\s+while\s+queue:\s+vertex\s*=\s*queue\.pop\(0\)\s+if\s+vertex\s+not\s+in\s+visited:\s+visited\.add\(vertex\)\s+queue\.extend\(graph\[vertex\]\s*-\s*visited\)/,
            translation: 'function bfs(graph, start) {\n  const visited = new Set();\n  const queue = [start];\n  while (queue.length > 0) {\n    const vertex = queue.shift();\n    if (!visited.has(vertex)) {\n      visited.add(vertex);\n      queue.push(...graph[vertex]);\n    }\n  }\n}'
        },
        'fibonacci': {
            pattern: /def\s+fibonacci\(n\):\s+if\s+n\s*<=\s*1:\s+return\s+n\s+return\s+fibonacci\(n\s*-\s*1\)\s*\+\s*fibonacci\(n\s*-\s*2\)/,
            translation: 'function fibonacci(n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}'
        }
    },
    'python_to_java': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'System.out.println($1);'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'public static void bubbleSort(int[] $1) {\n  for (int i = 0; i < $1.length; i++) {\n    for (int j = 0; j < $1.length - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        },
        'quick_sort': {
            pattern: /def\s+quick_sort\((\w+)\):\s+if\s+len\((\w+)\)\s*<=\s*1:\s+return\s+(\w+)\s+pivot\s*=\s*(\w+)\[len\((\w+)\)\s*\/\/\s*2\]\s+left\s*=\s*\[x\s+for\s+x\s+in\s+(\w+)\s+if\s+x\s*<\s*pivot\]\s+middle\s*=\s*\[x\s+for\s+x\s+in\s+(\w+)\s+if\s+x\s*==\s*pivot\]\s+right\s*=\s*\[x\s+for\s+x\s+in\s+(\w+)\s+if\s+x\s*>\s*pivot\]\s+return\s+quick_sort\(left\)\s*\+\s*middle\s*\+\s*quick_sort\(right\)/,
            translation: 'public static int[] quickSort(int[] $1) {\n  if ($1.length <= 1) return $1;\n  int pivot = $1[$1.length / 2];\n  List<Integer> left = new ArrayList<>();\n  List<Integer> middle = new ArrayList<>();\n  List<Integer> right = new ArrayList<>();\n  for (int x : $1) {\n    if (x < pivot) left.add(x);\n    else if (x == pivot) middle.add(x);\n    else right.add(x);\n  }\n  int[] result = new int[left.size() + middle.size() + right.size()];\n  System.arraycopy(quickSort(left.stream().mapToInt(i->i).toArray()), 0, result, 0, left.size());\n  System.arraycopy(middle.stream().mapToInt(i->i).toArray(), 0, result, left.size(), middle.size());\n  System.arraycopy(quickSort(right.stream().mapToInt(i->i).toArray()), 0, result, left.size() + middle.size(), right.size());\n  return result;\n}'
        },
        'dfs': {
            pattern: /def\s+dfs\(graph,\s*start,\s*visited\s*=\s*None\):\s+if\s+visited\s+is\s+None:\s+visited\s*=\s*set\(\)\s+visited\.add\(start\)\s+for\s+neighbor\s+in\s+graph\[start\]:\s+if\s+neighbor\s+not\s+in\s+visited:\s+dfs\(graph,\s*neighbor,\s*visited\)/,
            translation: 'public static void dfs(Map<Integer, List<Integer>> graph, int start, Set<Integer> visited) {\n  if (visited == null) visited = new HashSet<>();\n  visited.add(start);\n  for (int neighbor : graph.get(start)) {\n    if (!visited.contains(neighbor)) {\n      dfs(graph, neighbor, visited);\n    }\n  }\n}'
        },
        'bfs': {
            pattern: /def\s+bfs\(graph,\s*start\):\s+visited\s*=\s*set\(\)\s+queue\s*=\s*\[start\]\s+while\s+queue:\s+vertex\s*=\s*queue\.pop\(0\)\s+if\s+vertex\s+not\s+in\s+visited:\s+visited\.add\(vertex\)\s+queue\.extend\(graph\[vertex\]\s*-\s*visited\)/,
            translation: 'public static void bfs(Map<Integer, List<Integer>> graph, int start) {\n  Set<Integer> visited = new HashSet<>();\n  Queue<Integer> queue = new LinkedList<>();\n  queue.add(start);\n  while (!queue.isEmpty()) {\n    int vertex = queue.poll();\n    if (!visited.contains(vertex)) {\n      visited.add(vertex);\n      for (int neighbor : graph.get(vertex)) {\n        if (!visited.contains(neighbor)) {\n          queue.add(neighbor);\n        }\n      }\n    }\n  }\n}'
        },
        'fibonacci': {
            pattern: /def\s+fibonacci\(n\):\s+if\s+n\s*<=\s*1:\s+return\s+n\s+return\s+fibonacci\(n\s*-\s*1\)\s*\+\s*fibonacci\(n\s*-\s*2\)/,
            translation: 'public static int fibonacci(int n) {\n  if (n <= 1) return n;\n  return fibonacci(n - 1) + fibonacci(n - 2);\n}'
        }
    },
    'python_to_c': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'printf("%s\\n", $1);'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'void bubbleSort(int $1[], int n) {\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'python_to_cpp': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'cout << $1 << endl;'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'void bubbleSort(vector<int>& $1) {\n  for (int i = 0; i < $1.size() - 1; i++) {\n    for (int j = 0; j < $1.size() - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        swap($1[j], $1[j + 1]);\n      }\n    }\n  }\n}'
        }
    },
    'python_to_csharp': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'Console.WriteLine($1);'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'public static void BubbleSort(int[] $1) {\n  for (int i = 0; i < $1.Length - 1; i++) {\n    for (int j = 0; j < $1.Length - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'python_to_ruby': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'puts $1'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'def bubble_sort($1)\n  $1.each_index do |i|\n    $1.each_index do |j|\n      if $1[j] > $1[j + 1]\n        $1[j], $1[j + 1] = $1[j + 1], $1[j]\n      end\n    end\n  end\nend'
        }
    },
    'python_to_php': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'echo $1;'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'function bubbleSort(&$1) {\n  $n = count($1);\n  for ($i = 0; $i < $n - 1; $i++) {\n    for ($j = 0; $j < $n - $i - 1; $j++) {\n      if ($1[$j] > $1[$j + 1]) {\n        $temp = $1[$j];\n        $1[$j] = $1[$j + 1];\n        $1[$j + 1] = $temp;\n      }\n    }\n  }\n}'
        }
    },
    'python_to_swift': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'print($1)'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'func bubbleSort(_ $1: inout [Int]) {\n  for i in 0..<$1.count - 1 {\n    for j in 0..<$1.count - i - 1 {\n      if $1[j] > $1[j + 1]) {\n        $1.swapAt(j, j + 1)\n      }\n    }\n  }\n}'
        }
    },
    'python_to_go': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'fmt.Println($1)'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'func bubbleSort($1 []int) {\n  n := len($1)\n  for i := 0; i < n-1; i++ {\n    for j := 0; j < n-i-1; j++ {\n      if $1[j] > $1[j+1] {\n        $1[j], $1[j+1] = $1[j+1], $1[j]\n      }\n    }\n  }\n}'
        }
    },
    'python_to_rust': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'println!($1);'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\):[\s\S]*?for\s+i\s+in\s+range\(len\((\w+)\)\):[\s\S]*?for\s+j\s+in\s+range\(0,\s*len\((\w+)\)\s*-\s*i\s*-\s*1\):[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]:[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'fn bubble_sort($1: &mut [i32]) {\n  let n = $1.len();\n  for i in 0..n-1 {\n    for j in 0..n-i-1 {\n      if $1[j] > $1[j+1] {\n        $1.swap(j, j+1);\n      }\n    }\n  }\n}'
        }
    },
    // Add reverse translations (other languages to Python)
    'javascript_to_python': {
        'console.log': {
            pattern: /console\.log\((.*)\);?/,
            translation: 'print($1)'
        },
        'bubble_sort': {
            pattern: /function\s+bubbleSort\((\w+)\)\s*\{[\s\S]*?for\s*\(\s*let\s+i\s*=\s*0\s*;\s*i\s*<\s*(\w+)\.length\s*;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(\s*let\s+j\s*=\s*0\s*;\s*j\s*<\s*(\w+)\.length\s*-\s*i\s*-\s*1\s*;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?\[\s*(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*\]\s*=\s*\[\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]\s*\]/,
            translation: 'def bubble_sort($1):\n  for i in range(len($1)):\n    for j in range(0, len($1) - i - 1):\n      if $1[j] > $1[j + 1]:\n        $1[j], $1[j + 1] = $1[j + 1], $1[j]'
        }
    },
    'java_to_python': {
        'System.out.print': {
            pattern: /System\.out\.print(ln)?\((.*)\);?/,
            translation: function(match) {
                if (match[1] === 'ln') {
                    return 'print($2)';
                } else {
                    return 'print($2, end="")';
                }
            }
        },
        'bubble_sort': {
            pattern: /public\s+static\s+void\s+bubbleSort\(int\[\]\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.length;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.length\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'def bubble_sort($1):\n  for i in range(len($1)):\n    for j in range(0, len($1) - i - 1):\n      if $1[j] > $1[j + 1]:\n        $1[j], $1[j + 1] = $1[j + 1], $1[j]'
        }
    },
    // Add more language pairs as needed...
    // C to other languages
    'c_to_cpp': {
        'printf': {
            pattern: /printf\((.*)\);/,
            translation: 'cout << $1 << endl;'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(int\s+(\w+)\[\],\s*int\s+n\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'void bubbleSort(vector<int>& $1) {\n  for (int i = 0; i < $1.size() - 1; i++) {\n    for (int j = 0; j < $1.size() - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        swap($1[j], $1[j + 1]);\n      }\n    }\n  }\n}'
        }
    },
    'c_to_csharp': {
        'printf': {
            pattern: /printf\((.*)\);/,
            translation: 'Console.WriteLine($1);'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(int\s+(\w+)\[\],\s*int\s+n\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'public static void BubbleSort(int[] $1) {\n  for (int i = 0; i < $1.Length - 1; i++) {\n    for (int j = 0; j < $1.Length - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'c_to_ruby': {
        'printf': {
            pattern: /printf\((.*)\);/,
            translation: 'puts $1'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(int\s+(\w+)\[\],\s*int\s+n\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'def bubble_sort($1)\n  $1.each_index do |i|\n    $1.each_index do |j|\n      if $1[j] > $1[j + 1]\n        $1[j], $1[j + 1] = $1[j + 1], $1[j]\n      end\n    end\n  end\nend'
        }
    },
    'c_to_php': {
        'printf': {
            pattern: /printf\((.*)\);/,
            translation: 'echo $1;'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(int\s+(\w+)\[\],\s*int\s+n\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'function bubbleSort(&$1) {\n  $n = count($1);\n  for ($i = 0; $i < $n - 1; $i++) {\n    for ($j = 0; $j < $n - $i - 1; $j++) {\n      if ($1[$j] > $1[$j + 1]) {\n        $temp = $1[$j];\n        $1[$j] = $1[$j + 1];\n        $1[$j + 1] = $temp;\n      }\n    }\n  }\n}'
        }
    },
    'c_to_swift': {
        'printf': {
            pattern: /printf\((.*)\);/,
            translation: 'print($1)'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(int\s+(\w+)\[\],\s*int\s+n\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'func bubbleSort(_ $1: inout [Int]) {\n  for i in 0..<$1.count - 1 {\n    for j in 0..<$1.count - i - 1 {\n      if $1[j] > $1[j + 1]) {\n        $1.swapAt(j, j + 1)\n      }\n    }\n  }\n}'
        }
    },
    'c_to_go': {
        'printf': {
            pattern: /printf\((.*)\);/,
            translation: 'fmt.Println($1)'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(int\s+(\w+)\[\],\s*int\s+n\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'func bubbleSort($1 []int) {\n  n := len($1)\n  for i := 0; i < n-1; i++ {\n    for j := 0; j < n-i-1; j++ {\n      if $1[j] > $1[j+1] {\n        $1[j], $1[j+1] = $1[j+1], $1[j]\n      }\n    }\n  }\n}'
        }
    },
    'c_to_rust': {
        'printf': {
            pattern: /printf\((.*)\);/,
            translation: 'println!($1);'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(int\s+(\w+)\[\],\s*int\s+n\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'fn bubble_sort($1: &mut [i32]) {\n  let n = $1.len();\n  for i in 0..n-1 {\n    for j in 0..n-i-1 {\n      if $1[j] > $1[j+1] {\n        $1.swap(j, j+1);\n      }\n    }\n  }\n}'
        }
    },
    // Reverse translations
    'cpp_to_c': {
        'cout': {
            pattern: /cout\s*<<\s*(.*)\s*<<\s*endl;/,
            translation: 'printf("%s\\n", $1);'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(vector<int>&\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.size\(\)\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.size\(\)\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?swap\((\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\);/,
            translation: 'void bubbleSort(int $1[], int n) {\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'csharp_to_c': {
        'Console.WriteLine': {
            pattern: /Console\.WriteLine\((.*)\);/,
            translation: 'printf("%s\\n", $1);'
        },
        'bubble_sort': {
            pattern: /public\s+static\s+void\s+BubbleSort\(int\[\]\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.Length\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.Length\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'void bubbleSort(int $1[], int n) {\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'ruby_to_c': {
        'puts': {
            pattern: /puts\s+(.*)/,
            translation: 'printf("%s\\n", $1);'
        },
        'bubble_sort': {
            pattern: /def\s+bubble_sort\((\w+)\)[\s\S]*?(\w+)\.each_index\s+do\s+\|\s*i\s*\|[\s\S]*?(\w+)\.each_index\s+do\s+\|\s*j\s*\|[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\][\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'void bubbleSort(int $1[], int n) {\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'php_to_c': {
        'echo': {
            pattern: /echo\s+(.*);/,
            translation: 'printf("%s\\n", $1);'
        },
        'bubble_sort': {
            pattern: /function\s+bubbleSort\(&\$(\w+)\)\s*\{[\s\S]*?\$n\s*=\s*count\(\$(\w+)\);[\s\S]*?for\s*\(\$i\s*=\s*0;\s*\$i\s*<\s*\$n\s*-\s*1;\s*\$i\+\+\)\s*\{[\s\S]*?for\s*\(\$j\s*=\s*0;\s*\$j\s*<\s*\$n\s*-\s*\$i\s*-\s*1;\s*\$j\+\+\)\s*\{[\s\S]*?if\s*\(\$(\w+)\[\$j\]\s*>\s*\$(\w+)\[\$j\s*\+\s*1\]\)\s*\{[\s\S]*?\$temp\s*=\s*\$(\w+)\[\$j\];[\s\S]*?\$(\w+)\[\$j\]\s*=\s*\$(\w+)\[\$j\s*\+\s*1\];[\s\S]*?\$(\w+)\[\$j\s*\+\s*1\]\s*=\s*\$temp;/,
            translation: 'void bubbleSort(int $1[], int n) {\n  for (int i = 0; i < n - 1; i++) {\n    for (int j = 0; j < n - i - 1; j++) {\n      if ($1[$j] > $1[$j + 1]) {\n        int temp = $1[$j];\n        $1[$j] = $1[$j + 1];\n        $1[$j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'swift_to_c': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'printf("%s\\n", $1);'
        },
        'bubble_sort': {
            pattern: /func\s+bubbleSort\(_\s+(\w+):\s+inout\s+\[Int\]\)\s*\{[\s\S]*?for\s+i\s+in\s+0\.\.<\s*(\w+)\.count\s*-\s*1\s*\{[\s\S]*?for\s+j\s+in\s+0\.\.<\s*(\w+)\.count\s*-\s*i\s*-\s*1\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\.swapAt\(j,\s*j\s*\+\s*1\);/,
            translation: 'void bubbleSort(int $1[], int n) {\n  for i in 0..<$1.count - 1 {\n    for j in 0..<$1.count - i - 1 {\n      if $1[j] > $1[j + 1]) {\n        $1.swapAt(j, j + 1)\n      }\n    }\n  }\n}'
        }
    },
    'go_to_c': {
        'fmt.Println': {
            pattern: /fmt\.Println\((.*)\)/,
            translation: 'printf("%s\\n", $1);'
        },
        'bubble_sort': {
            pattern: /func\s+bubbleSort\((\w+)\s+\[\]int\)\s*\{[\s\S]*?n\s*:=\s*len\((\w+)\);[\s\S]*?for\s+i\s+:=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\s*\{[\s\S]*?for\s+j\s+:=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'func bubbleSort($1 []int) {\n  n := len($1)\n  for i := 0; i < n-1; i++ {\n    for j := 0; j < n-i-1; j++ {\n      if $1[j] > $1[j+1] {\n        $1[j], $1[j+1] = $1[j+1], $1[j]\n      }\n    }\n  }\n}'
        }
    },
    'cpp_to_csharp': {
        'cout': {
            pattern: /cout\s*<<\s*(.*)\s*<<\s*endl;/,
            translation: 'Console.WriteLine($1);'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(vector<int>&\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.size\(\)\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.size\(\)\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?swap\((\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\);/,
            translation: 'public static void BubbleSort(int[] $1) {\n  for (int i = 0; i < $1.Length - 1; i++) {\n    for (int j = 0; j < $1.Length - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'cpp_to_ruby': {
        'cout': {
            pattern: /cout\s*<<\s*(.*)\s*<<\s*endl;/,
            translation: 'puts $1'
        },
        'bubble_sort': {
            pattern: /void\s+bubbleSort\(vector<int>&\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.size\(\)\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.size\(\)\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?swap\((\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\);/,
            translation: 'def bubble_sort($1)\n  $1.each_index do |i|\n    $1.each_index do |j|\n      if $1[j] > $1[j + 1]\n        $1[j], $1[j + 1] = $1[j + 1], $1[j]\n      end\n    end\n  end\nend'
        }
    },
    'rust_to_c': {
        'println!': {
            pattern: /println!\((.*)\);/,
            translation: 'printf("%s\\n", $1);'
        },
        'bubble_sort': {
            pattern: /fn\s+bubble_sort\((\w+):\s+&mut\s+\[i32\]\)\s*\{[\s\S]*?let\s+n\s*=\s*(\w+)\.len\(\);[\s\S]*?for\s+i\s+in\s+0\.\.n\s*-\s*1\s*\{[\s\S]*?for\s+j\s+in\s+0\.\.n\s*-\s*i\s*-\s*1\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\.swap\(j,\s*j\s*\+\s*1\);/,
            translation: 'void bubbleSort(vector<int>& $1) {\n  for (int i = 0; i < $1.size() - 1; i++) {\n    for (int j = 0; j < $1.size() - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'csharp_to_ruby': {
        'Console.WriteLine': {
            pattern: /Console\.WriteLine\((.*)\);/,
            translation: 'puts $1'
        },
        'bubble_sort': {
            pattern: /public\s+static\s+void\s+BubbleSort\(int\[\]\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.Length\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.Length\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'def bubble_sort($1)\n  $1.each_index do |i|\n    $1.each_index do |j|\n      if $1[j] > $1[j + 1]\n        $1[j], $1[j + 1] = $1[j + 1], $1[j]\n      end\n    end\n  end\nend'
        }
    },
    'csharp_to_php': {
        'Console.WriteLine': {
            pattern: /Console\.WriteLine\((.*)\);/,
            translation: 'echo $1;'
        },
        'bubble_sort': {
            pattern: /public\s+static\s+void\s+BubbleSort\(int\[\]\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.Length\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.Length\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'function bubbleSort(&$1) {\n  $n = count($1);\n  for ($i = 0; $i < $n - 1; $i++) {\n    for ($j = 0; $j < $n - $i - 1; $j++) {\n      if ($1[$j] > $1[$j + 1]) {\n        $temp = $1[$j];\n        $1[$j] = $1[$j + 1];\n        $1[$j + 1] = $temp;\n      }\n    }\n  }\n}'
        }
    },
    'csharp_to_swift': {
        'Console.WriteLine': {
            pattern: /Console\.WriteLine\((.*)\);/,
            translation: 'print($1)'
        },
        'bubble_sort': {
            pattern: /public\s+static\s+void\s+BubbleSort\(int\[\]\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.Length\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.Length\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'func bubbleSort(_ $1: inout [Int]) {\n  for i in 0..<$1.count - 1 {\n    for j in 0..<$1.count - i - 1 {\n      if $1[j] > $1[j + 1]) {\n        $1.swapAt(j, j + 1)\n      }\n    }\n  }\n}'
        }
    },
    'csharp_to_go': {
        'Console.WriteLine': {
            pattern: /Console\.WriteLine\((.*)\);/,
            translation: 'fmt.Println($1)'
        },
        'bubble_sort': {
            pattern: /public\s+static\s+void\s+BubbleSort\(int\[\]\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.Length\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.Length\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'func bubbleSort($1 []int) {\n  n := len($1)\n  for i := 0; i < n-1; i++ {\n    for j := 0; j < n-i-1; j++ {\n      if $1[j] > $1[j+1] {\n        $1[j], $1[j+1] = $1[j+1], $1[j]\n      }\n    }\n  }\n}'
        }
    },
    'csharp_to_rust': {
        'Console.WriteLine': {
            pattern: /Console\.WriteLine\((.*)\);/,
            translation: 'println!($1);'
        },
        'bubble_sort': {
            pattern: /public\s+static\s+void\s+BubbleSort\(int\[\]\s+(\w+)\)\s*\{[\s\S]*?for\s*\(int\s+i\s*=\s*0;\s*i\s*<\s*(\w+)\.Length\s*-\s*1;\s*i\+\+\)\s*\{[\s\S]*?for\s*\(int\s+j\s*=\s*0;\s*j\s*<\s*(\w+)\.Length\s*-\s*i\s*-\s*1;\s*j\+\+\)\s*\{[\s\S]*?if\s*\((\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\)\s*\{[\s\S]*?int\s+temp\s*=\s*(\w+)\[j\];[\s\S]*?(\w+)\[j\]\s*=\s*(\w+)\[j\s*\+\s*1\];[\s\S]*?(\w+)\[j\s*\+\s*1\]\s*=\s*temp;/,
            translation: 'fn bubble_sort($1: &mut [i32]) {\n  let n = $1.len();\n  for i in 0..n-1 {\n    for j in 0..n-i-1 {\n      if $1[j] > $1[j+1] {\n        $1.swap(j, j+1);\n      }\n    }\n  }\n}'
        }
    },
    // Reverse translations
    'swift_to_csharp': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'Console.WriteLine($1);'
        },
        'bubble_sort': {
            pattern: /func\s+bubbleSort\(_\s+(\w+):\s+inout\s+\[Int\]\)\s*\{[\s\S]*?for\s+i\s+in\s+0\.\.<\s*(\w+)\.count\s*-\s*1\s*\{[\s\S]*?for\s+j\s+in\s+0\.\.<\s*(\w+)\.count\s*-\s*i\s*-\s*1\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\.swapAt\(j,\s*j\s*\+\s*1\);/,
            translation: 'public static void BubbleSort(int[] $1) {\n  for (int i = 0; i < $1.Length - 1; i++) {\n    for (int j = 0; j < $1.Length - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'go_to_csharp': {
        'fmt.Println': {
            pattern: /fmt\.Println\((.*)\)/,
            translation: 'Console.WriteLine($1);'
        },
        'bubble_sort': {
            pattern: /func\s+bubbleSort\((\w+)\s+\[\]int\)\s*\{[\s\S]*?n\s*:=\s*len\((\w+)\);[\s\S]*?for\s+i\s+:=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\s*\{[\s\S]*?for\s+j\s+:=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'public static void BubbleSort(int[] $1) {\n  for (int i = 0; i < $1.Length - 1; i++) {\n    for (int j = 0; j < $1.Length - i - 1; j++) {\n      if ($1[j] > $1[j + 1]) {\n        int temp = $1[j];\n        $1[j] = $1[j + 1];\n        $1[j + 1] = temp;\n      }\n    }\n  }\n}'
        }
    },
    'rust_to_ruby': {
        'println!': {
            pattern: /println!\((.*)\);/,
            translation: 'puts $1'
        },
        'bubble_sort': {
            pattern: /fn\s+bubble_sort\((\w+)\s+\[\]int\)\s*\{[\s\S]*?n\s*:=\s*len\((\w+)\);[\s\S]*?for\s+i\s+:=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\s*\{[\s\S]*?for\s+j\s+:=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'def bubble_sort($1)\n  $1.each_index do |i|\n    $1.each_index do |j|\n      if $1[j] > $1[j + 1]\n        $1[j], $1[j + 1] = $1[j + 1], $1[j]\n      end\n    end\n  end\nend'
        }
    },
    'php_to_rust': {
        'echo': {
            pattern: /echo\s+(.*);/,
            translation: 'println!($1);'
        },
        'bubble_sort': {
            pattern: /function\s+bubbleSort\(&\$(\w+)\)\s*\{[\s\S]*?\$n\s*=\s*count\(\$(\w+)\);[\s\S]*?for\s*\(\$i\s*=\s*0;\s*\$i\s*<\s*\$n\s*-\s*1;\s*\$i\+\+\)\s*\{[\s\S]*?for\s*\(\$j\s*=\s*0;\s*\$j\s*<\s*\$n\s*-\s*\$i\s*-\s*1;\s*\$j\+\+\)\s*\{[\s\S]*?if\s*\(\$(\w+)\[\$j\]\s*>\s*\$(\w+)\[\$j\s*\+\s*1\]\)\s*\{[\s\S]*?\$temp\s*=\s*\$(\w+)\[\$j\];[\s\S]*?\$(\w+)\[\$j\]\s*=\s*\$(\w+)\[\$j\s*\+\s*1\];[\s\S]*?\$(\w+)\[\$j\s*\+\s*1\]\s*=\s*\$temp;/,
            translation: 'fn bubble_sort($1: &mut [i32]) {\n  let n = $1.len();\n  for i in 0..n-1 {\n    for j in 0..n-i-1 {\n      if $1[j] > $1[j+1] {\n        $1.swap(j, j+1);\n      }\n    }\n  }\n}'
        }
    },
    'swift_to_go': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'fmt.Println($1)'
        },
        'bubble_sort': {
            pattern: /func\s+bubbleSort\(_\s+(\w+):\s+inout\s+\[Int\]\)\s*\{[\s\S]*?for\s+i\s+in\s+0\.\.<\s*(\w+)\.count\s*-\s*1\s*\{[\s\S]*?for\s+j\s+in\s+0\.\.<\s*(\w+)\.count\s*-\s*i\s*-\s*1\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\.swapAt\(j,\s*j\s*\+\s*1\);/,
            translation: 'func bubbleSort($1 []int) {\n  n := len($1)\n  for i := 0; i < n-1; i++ {\n    for j := 0; j < n-i-1; j++ {\n      if $1[j] > $1[j+1] {\n        $1[j], $1[j+1] = $1[j+1], $1[j]\n      }\n    }\n  }\n}'
        }
    },
    'swift_to_rust': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'println!($1);'
        },
        'bubble_sort': {
            pattern: /func\s+bubbleSort\(_\s+(\w+):\s+inout\s+\[Int\]\)\s*\{[\s\S]*?for\s+i\s+in\s+0\.\.<\s*(\w+)\.count\s*-\s*1\s*\{[\s\S]*?for\s+j\s+in\s+0\.\.<\s*(\w+)\.count\s*-\s*i\s*-\s*1\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\.swapAt\(j,\s*j\s*\+\s*1\);/,
            translation: 'fn bubble_sort($1: &mut [i32]) {\n  let n = $1.len();\n  for i in 0..n-1 {\n    for j in 0..n-i-1 {\n      if $1[j] > $1[j+1] {\n        $1.swap(j, j+1);\n      }\n    }\n  }\n}'
        }
    },
    'go_to_rust': {
        'fmt.Println': {
            pattern: /fmt\.Println\((.*)\)/,
            translation: 'println!($1);'
        },
        'bubble_sort': {
            pattern: /func\s+bubbleSort\((\w+)\s+\[\]int\)\s*\{[\s\S]*?n\s*:=\s*len\((\w+)\);[\s\S]*?for\s+i\s+:=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\s*\{[\s\S]*?for\s+j\s+:=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'fn bubble_sort($1: &mut [i32]) {\n  let n = $1.len();\n  for i in 0..n-1 {\n    for j in 0..n-i-1 {\n      if $1[j] > $1[j+1] {\n        $1.swap(j, j+1);\n      }\n    }\n  }\n}'
        }
    },
    'rust_to_go': {
        'println!': {
            pattern: /println!\((.*)\);/,
            translation: 'fmt.Println($1)'
        },
        'bubble_sort': {
            pattern: /fn\s+bubble_sort\((\w+)\s+\[\]int\)\s*\{[\s\S]*?n\s*:=\s*len\((\w+)\);[\s\S]*?for\s+i\s+:=\s*0;\s*i\s*<\s*n\s*-\s*1;\s*i\+\+\s*\{[\s\S]*?for\s+j\s+:=\s*0;\s*j\s*<\s*n\s*-\s*i\s*-\s*1;\s*j\+\+\s*\{[\s\S]*?if\s+(\w+)\[j\]\s*>\s*(\w+)\[j\s*\+\s*1\]\s*\{[\s\S]*?(\w+)\[j\],\s*(\w+)\[j\s*\+\s*1\]\s*=\s*(\w+)\[j\s*\+\s*1\],\s*(\w+)\[j\]/,
            translation: 'func bubbleSort($1 []int) {\n  n := len($1)\n  for i := 0; i < n-1; i++ {\n    for j := 0; j < n-i-1; j++ {\n      if $1[j] > $1[j+1] {\n        $1[j], $1[j+1] = $1[j+1], $1[j]\n      }\n    }\n  }\n}'
        }
    },
    'cpp_to_python': {
        'cout': {
            pattern: /cout\s*<<\s*(.*)\s*<<\s*endl;?/,
            translation: 'print($1)'
        },
        'quick_sort': {
            pattern: /void\s+quickSort\(vector<int>&\s+(\w+)\)\s*\{[\s\S]*?if\s*\((\w+)\.size\(\)\s*<=\s*1\)\s*return;[\s\S]*?int\s+pivot\s*=\s*(\w+)\[(\w+)\.size\(\)\s*\/\s*2\];[\s\S]*?vector<int>\s+left,\s+middle,\s+right;[\s\S]*?for\s*\(int\s+x\s*:\s*(\w+)\)\s*\{[\s\S]*?if\s*\(x\s*<\s*pivot\)\s*left\.push_back\(x\);[\s\S]*?else\s+if\s*\(x\s*==\s*pivot\)\s*middle\.push_back\(x\);[\s\S]*?else\s*right\.push_back\(x\);[\s\S]*?\}/,
            translation: 'def quick_sort($1):\n  if len($1) <= 1:\n    return $1\n  pivot = $1[len($1) // 2]\n  left = [x for x in $1 if x < pivot]\n  middle = [x for x in $1 if x == pivot]\n  right = [x for x in $1 if x > pivot]\n  return quick_sort(left) + middle + quick_sort(right)'
        },
        'dfs': {
            pattern: /void\s+dfs\(const\s+unordered_map<int,\s*vector<int>>&\s+graph,\s*int\s+start,\s*unordered_set<int>&\s+visited\)\s*\{[\s\S]*?visited\.insert\(start\);[\s\S]*?for\s*\(int\s+neighbor\s*:\s*graph\.at\(start\)\)\s*\{[\s\S]*?if\s*\(visited\.find\(neighbor\)\s*==\s*visited\.end\(\)\)\s*\{[\s\S]*?dfs\(graph,\s*neighbor,\s*visited\);[\s\S]*?\}\s*\}/,
            translation: 'def dfs(graph, start, visited=None):\n  if visited is None:\n    visited = set()\n  visited.add(start)\n  for neighbor in graph[start]:\n    if neighbor not in visited:\n      dfs(graph, neighbor, visited)'
        },
        'bfs': {
            pattern: /void\s+bfs\(const\s+unordered_map<int,\s*vector<int>>&\s+graph,\s*int\s+start\)\s*\{[\s\S]*?unordered_set<int>\s+visited;[\s\S]*?queue<int>\s+q;[\s\S]*?q\.push\(start\);[\s\S]*?while\s*\(!q\.empty\(\)\)\s*\{[\s\S]*?int\s+vertex\s*=\s*q\.front\(\);[\s\S]*?q\.pop\(\);[\s\S]*?if\s*\(visited\.find\(vertex\)\s*==\s*visited\.end\(\)\)\s*\{[\s\S]*?visited\.insert\(vertex\);[\s\S]*?for\s*\(int\s+neighbor\s*:\s*graph\.at\(vertex\)\)\s*\{[\s\S]*?if\s*\(visited\.find\(neighbor\)\s*==\s*visited\.end\(\)\)\s*\{[\s\S]*?q\.push\(neighbor\);[\s\S]*?\}\s*\}\s*\}\s*\}/,
            translation: 'def bfs(graph, start):\n  visited = set()\n  queue = [start]\n  while queue:\n    vertex = queue.pop(0)\n    if vertex not in visited:\n      visited.add(vertex)\n      queue.extend(n for n in graph[vertex] if n not in visited)'
        },
        'fibonacci': {
            pattern: /int\s+fibonacci\(int\s+n\)\s*\{[\s\S]*?if\s*\(n\s*<=\s*1\)\s*return\s+n;[\s\S]*?return\s+fibonacci\(n\s*-\s*1\)\s*\+\s*fibonacci\(n\s*-\s*2\);[\s\S]*?\}/,
            translation: 'def fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n - 1) + fibonacci(n - 2)'
        }
    },
    'csharp_to_python': {
        'Console.WriteLine': {
            pattern: /Console\.WriteLine\((.*)\);?/,
            translation: 'print($1)'
        },
        'quick_sort': {
            pattern: /public\s+static\s+int\[\]\s+QuickSort\(int\[\]\s+(\w+)\)\s*\{[\s\S]*?if\s*\((\w+)\.Length\s*<=\s*1\)\s*return\s+(\w+);[\s\S]*?int\s+pivot\s*=\s*(\w+)\[(\w+)\.Length\s*\/\s*2\];[\s\S]*?var\s+left\s*=\s*(\w+)\.Where\(x\s*=>\s*x\s*<\s*pivot\)\.ToArray\(\);[\s\S]*?var\s+middle\s*=\s*(\w+)\.Where\(x\s*=>\s*x\s*==\s*pivot\)\.ToArray\(\);[\s\S]*?var\s+right\s*=\s*(\w+)\.Where\(x\s*=>\s*x\s*>\s*pivot\)\.ToArray\(\);/,
            translation: 'def quick_sort($1):\n  if len($1) <= 1:\n    return $1\n  pivot = $1[len($1) // 2]\n  left = [x for x in $1 if x < pivot]\n  middle = [x for x in $1 if x == pivot]\n  right = [x for x in $1 if x > pivot]\n  return quick_sort(left) + middle + quick_sort(right)'
        },
        'dfs': {
            pattern: /public\s+static\s+void\s+DFS\(Dictionary<int,\s*List<int>>\s+graph,\s*int\s+start,\s*HashSet<int>\s+visited\s*=\s*null\)\s*\{[\s\S]*?if\s*\(visited\s*==\s*null\)\s*visited\s*=\s*new\s+HashSet<int>\(\);[\s\S]*?visited\.Add\(start\);[\s\S]*?foreach\s*\(var\s+neighbor\s+in\s+graph\[start\]\)\s*\{[\s\S]*?if\s*\(!visited\.Contains\(neighbor\)\)\s*\{[\s\S]*?DFS\(graph,\s*neighbor,\s*visited\);[\s\S]*?\}\s*\}/,
            translation: 'def dfs(graph, start, visited=None):\n  if visited is None:\n    visited = set()\n  visited.add(start)\n  for neighbor in graph[start]:\n    if neighbor not in visited:\n      dfs(graph, neighbor, visited)'
        },
        'bfs': {
            pattern: /public\s+static\s+void\s+BFS\(Dictionary<int,\s*List<int>>\s+graph,\s*int\s+start\)\s*\{[\s\S]*?var\s+visited\s*=\s*new\s+HashSet<int>\(\);[\s\S]*?var\s+queue\s*=\s*new\s+Queue<int>\(\);[\s\S]*?queue\.Enqueue\(start\);[\s\S]*?while\s*\(queue\.Count\s*>\s*0\)\s*\{[\s\S]*?var\s+vertex\s*=\s*queue\.Dequeue\(\);[\s\S]*?if\s*\(!visited\.Contains\(vertex\)\)\s*\{[\s\S]*?visited\.Add\(vertex\);[\s\S]*?foreach\s*\(var\s+neighbor\s+in\s+graph\[vertex\]\)\s*\{[\s\S]*?if\s*\(!visited\.Contains\(neighbor\)\)\s*\{[\s\S]*?queue\.Enqueue\(neighbor\);[\s\S]*?\}\s*\}\s*\}\s*\}/,
            translation: 'def bfs(graph, start):\n  visited = set()\n  queue = [start]\n  while queue:\n    vertex = queue.pop(0)\n    if vertex not in visited:\n      visited.add(vertex)\n      queue.extend(n for n in graph[vertex] if n not in visited)'
        },
        'fibonacci': {
            pattern: /public\s+static\s+int\s+Fibonacci\(int\s+n\)\s*\{[\s\S]*?if\s*\(n\s*<=\s*1\)\s*return\s+n;[\s\S]*?return\s+Fibonacci\(n\s*-\s*1\)\s*\+\s*Fibonacci\(n\s*-\s*2\);[\s\S]*?\}/,
            translation: 'def fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n - 1) + fibonacci(n - 2)'
        }
    },
    'ruby_to_python': {
        'puts': {
            pattern: /puts\s+(.*)/,
            translation: 'print($1)'
        },
        'quick_sort': {
            pattern: /def\s+quick_sort\((\w+)\)\s*if\s+(\w+)\.length\s*<=\s*1\s*return\s+(\w+)\s*end\s*pivot\s*=\s*(\w+)\[(\w+)\.length\s*\/\s*2\]\s*left\s*=\s*(\w+)\.select\s*{\s*\|x\|\s*x\s*<\s*pivot\s*}\s*middle\s*=\s*(\w+)\.select\s*{\s*\|x\|\s*x\s*==\s*pivot\s*}\s*right\s*=\s*(\w+)\.select\s*{\s*\|x\|\s*x\s*>\s*pivot\s*}/,
            translation: 'def quick_sort($1):\n  if len($1) <= 1:\n    return $1\n  pivot = $1[len($1) // 2]\n  left = [x for x in $1 if x < pivot]\n  middle = [x for x in $1 if x == pivot]\n  right = [x for x in $1 if x > pivot]\n  return quick_sort(left) + middle + quick_sort(right)'
        },
        'dfs': {
            pattern: /def\s+dfs\(graph,\s*start,\s*visited\s*=\s*Set\.new\)\s*visited\.add\(start\)\s*graph\[start\]\.each\s*do\s*\|neighbor\|\s*if\s*!visited\.include\?\(neighbor\)\s*dfs\(graph,\s*neighbor,\s*visited\)\s*end\s*end/,
            translation: 'def dfs(graph, start, visited=None):\n  if visited is None:\n    visited = set()\n  visited.add(start)\n  for neighbor in graph[start]:\n    if neighbor not in visited:\n      dfs(graph, neighbor, visited)'
        },
        'bfs': {
            pattern: /def\s+bfs\(graph,\s*start\)\s*visited\s*=\s*Set\.new\s*queue\s*=\s*\[start\]\s*while\s*!queue\.empty\?\s*vertex\s*=\s*queue\.shift\s*if\s*!visited\.include\?\(vertex\)\s*visited\.add\(vertex\)\s*queue\.concat\(graph\[vertex\]\.reject\s*{\s*\|n\|\s*visited\.include\?\(n\)\s*}\)/,
            translation: 'def bfs(graph, start):\n  visited = set()\n  queue = [start]\n  while queue:\n    vertex = queue.pop(0)\n    if vertex not in visited:\n      visited.add(vertex)\n      queue.extend(n for n in graph[vertex] if n not in visited)'
        },
        'fibonacci': {
            pattern: /def\s+fibonacci\(n\)\s*return\s+n\s*if\s+n\s*<=\s*1\s*fibonacci\(n\s*-\s*1\)\s*\+\s*fibonacci\(n\s*-\s*2\)\s*end/,
            translation: 'def fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n - 1) + fibonacci(n - 2)'
        }
    },
    'php_to_python': {
        'echo': {
            pattern: /echo\s+(.*);/,
            translation: 'print($1)'
        },
        'quick_sort': {
            pattern: /function\s+quickSort\(&\$(\w+)\)\s*{\s*if\s*\(count\(\$(\w+)\)\s*<=\s*1\)\s*return\s+\$(\w+);\s*\$pivot\s*=\s*\$(\w+)\[count\(\$(\w+)\)\s*\/\s*2\];\s*\$left\s*=\s*array_filter\(\$(\w+),\s*function\(\$x\)\s*use\s*\(\$pivot\)\s*{\s*return\s+\$x\s*<\s*\$pivot;\s*}\);\s*\$middle\s*=\s*array_filter\(\$(\w+),\s*function\(\$x\)\s*use\s*\(\$pivot\)\s*{\s*return\s+\$x\s*==\s*\$pivot;\s*}\);\s*\$right\s*=\s*array_filter\(\$(\w+),\s*function\(\$x\)\s*use\s*\(\$pivot\)\s*{\s*return\s+\$x\s*>\s*\$pivot;\s*}\);/,
            translation: 'def quick_sort($1):\n  if len($1) <= 1:\n    return $1\n  pivot = $1[len($1) // 2]\n  left = [x for x in $1 if x < pivot]\n  middle = [x for x in $1 if x == pivot]\n  right = [x for x in $1 if x > pivot]\n  return quick_sort(left) + middle + quick_sort(right)'
        },
        'dfs': {
            pattern: /function\s+dfs\(\$graph,\s*\$start,\s*&\$visited\s*=\s*null\)\s*{\s*if\s*\(\$visited\s*===\s*null\)\s*\$visited\s*=\s*array\(\);\s*\$visited\[\$start\]\s*=\s*true;\s*foreach\s*\(\$graph\[\$start\]\s*as\s*\$neighbor\)\s*{\s*if\s*\(!isset\(\$visited\[\$neighbor\]\)\)\s*{\s*dfs\(\$graph,\s*\$neighbor,\s*\$visited\);\s*}\s*}/,
            translation: 'def dfs(graph, start, visited=None):\n  if visited is None:\n    visited = set()\n  visited.add(start)\n  for neighbor in graph[start]:\n    if neighbor not in visited:\n      dfs(graph, neighbor, visited)'
        },
        'bfs': {
            pattern: /function\s+bfs\(\$graph,\s*\$start\)\s*{\s*\$visited\s*=\s*array\(\);\s*\$queue\s*=\s*array\(\$start\);\s*while\s*\(!empty\(\$queue\)\)\s*{\s*\$vertex\s*=\s*array_shift\(\$queue\);\s*if\s*\(!isset\(\$visited\[\$vertex\]\)\)\s*{\s*\$visited\[\$vertex\]\s*=\s*true;\s*foreach\s*\(\$graph\[\$vertex\]\s*as\s*\$neighbor\)\s*{\s*if\s*\(!isset\(\$visited\[\$neighbor\]\)\)\s*{\s*array_push\(\$queue,\s*\$neighbor\);\s*}\s*}\s*}\s*}/,
            translation: 'def bfs(graph, start):\n  visited = set()\n  queue = [start]\n  while queue:\n    vertex = queue.pop(0)\n    if vertex not in visited:\n      visited.add(vertex)\n      queue.extend(n for n in graph[vertex] if n not in visited)'
        },
        'fibonacci': {
            pattern: /function\s+fibonacci\(\$n\)\s*{\s*if\s*\(\$n\s*<=\s*1\)\s*return\s+\$n;\s*return\s+fibonacci\(\$n\s*-\s*1\)\s*\+\s*fibonacci\(\$n\s*-\s*2\);\s*}/,
            translation: 'def fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n - 1) + fibonacci(n - 2)'
        }
    },
    'swift_to_python': {
        'print': {
            pattern: /print\((.*)\)/,
            translation: 'print($1)'
        },
        'quick_sort': {
            pattern: /func\s+quickSort\(_\s*(\w+):\s*\[Int\]\)\s*->\s*\[Int\]\s*{\s*guard\s+(\w+)\.count\s*>\s*1\s*else\s*{\s*return\s+(\w+)\s*}\s*let\s+pivot\s*=\s*(\w+)\[(\w+)\.count\s*\/\s*2\]\s*let\s+left\s*=\s*(\w+)\.filter\s*{\s*\$0\s*<\s*pivot\s*}\s*let\s+middle\s*=\s*(\w+)\.filter\s*{\s*\$0\s*==\s*pivot\s*}\s*let\s+right\s*=\s*(\w+)\.filter\s*{\s*\$0\s*>\s*pivot\s*}/,
            translation: 'def quick_sort($1):\n  if len($1) <= 1:\n    return $1\n  pivot = $1[len($1) // 2]\n  left = [x for x in $1 if x < pivot]\n  middle = [x for x in $1 if x == pivot]\n  right = [x for x in $1 if x > pivot]\n  return quick_sort(left) + middle + quick_sort(right)'
        },
        'dfs': {
            pattern: /func\s+dfs\(graph:\s*\[Int:\s*\[Int\]\],\s*start:\s*Int,\s*visited:\s*inout\s*Set<Int>\)\s*{\s*visited\.insert\(start\)\s*for\s+neighbor\s+in\s+graph\[start\]\!\s*{\s*if\s*!visited\.contains\(neighbor\)\s*{\s*dfs\(graph:\s*graph,\s*start:\s*neighbor,\s*visited:\s*&visited\)\s*}\s*}/,
            translation: 'def dfs(graph, start, visited=None):\n  if visited is None:\n    visited = set()\n  visited.add(start)\n  for neighbor in graph[start]:\n    if neighbor not in visited:\n      dfs(graph, neighbor, visited)'
        },
        'bfs': {
            pattern: /func\s+bfs\(graph:\s*\[Int:\s*\[Int\]\],\s*start:\s*Int\)\s*{\s*var\s+visited\s*=\s*Set<Int>\(\)\s*var\s+queue\s*=\s*\[start\]\s*while\s*!queue\.isEmpty\s*{\s*let\s+vertex\s*=\s*queue\.removeFirst\(\)\s*if\s*!visited\.contains\(vertex\)\s*{\s*visited\.insert\(vertex\)\s*queue\.append\(contentsOf:\s*graph\[vertex\]\!\.filter\s*{\s*!visited\.contains\(\$0\)\s*}\)\s*}\s*}/,
            translation: 'def bfs(graph, start):\n  visited = set()\n  queue = [start]\n  while queue:\n    vertex = queue.pop(0)\n    if vertex not in visited:\n      visited.add(vertex)\n      queue.extend(n for n in graph[vertex] if n not in visited)'
        },
        'fibonacci': {
            pattern: /func\s+fibonacci\(_\s*n:\s*Int\)\s*->\s*Int\s*{\s*if\s*n\s*<=\s*1\s*{\s*return\s+n\s*}\s*return\s+fibonacci\(n\s*-\s*1\)\s*\+\s*fibonacci\(n\s*-\s*2\)\s*}/,
            translation: 'def fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n - 1) + fibonacci(n - 2)'
        }
    },
    'go_to_python': {
        'fmt.Println': {
            pattern: /fmt\.Println\((.*)\)/,
            translation: 'print($1)'
        },
        'quick_sort': {
            pattern: /func\s+quickSort\((\w+)\s*\[\]int\)\s*\[\]int\s*{\s*if\s*len\((\w+)\)\s*<=\s*1\s*{\s*return\s+(\w+)\s*}\s*pivot\s*:=\s*(\w+)\[len\((\w+)\)\s*\/\s*2\]\s*left\s*:=\s*make\(\[\]int,\s*0\)\s*middle\s*:=\s*make\(\[\]int,\s*0\)\s*right\s*:=\s*make\(\[\]int,\s*0\)\s*for\s*_,\s*x\s*:=\s*range\s+(\w+)\s*{\s*if\s*x\s*<\s*pivot\s*{\s*left\s*=\s*append\(left,\s*x\)\s*}\s*else\s+if\s*x\s*==\s*pivot\s*{\s*middle\s*=\s*append\(middle,\s*x\)\s*}\s*else\s*{\s*right\s*=\s*append\(right,\s*x\)\s*}\s*}/,
            translation: 'def quick_sort($1):\n  if len($1) <= 1:\n    return $1\n  pivot = $1[len($1) // 2]\n  left = [x for x in $1 if x < pivot]\n  middle = [x for x in $1 if x == pivot]\n  right = [x for x in $1 if x > pivot]\n  return quick_sort(left) + middle + quick_sort(right)'
        },
        'dfs': {
            pattern: /func\s+dfs\(graph\s+map\[int\]\[\]int,\s*start\s+int,\s*visited\s+map\[int\]bool\)\s*{\s*visited\[start\]\s*=\s*true\s*for\s*_,\s*neighbor\s*:=\s*range\s+graph\[start\]\s*{\s*if\s*!visited\[neighbor\]\s*{\s*dfs\(graph,\s*neighbor,\s*visited\)\s*}\s*}/,
            translation: 'def dfs(graph, start, visited=None):\n  if visited is None:\n    visited = set()\n  visited.add(start)\n  for neighbor in graph[start]:\n    if neighbor not in visited:\n      dfs(graph, neighbor, visited)'
        },
        'bfs': {
            pattern: /func\s+bfs\(graph\s+map\[int\]\[\]int,\s*start\s+int\)\s*{\s*visited\s*:=\s*make\(map\[int\]bool\)\s*queue\s*:=\s*\[\]int{start}\s*for\s+len\(queue\)\s*>\s*0\s*{\s*vertex\s*:=\s*queue\[0\]\s*queue\s*=\s*queue\[1:\]\s*if\s*!visited\[vertex\]\s*{\s*visited\[vertex\]\s*=\s*true\s*for\s*_,\s*neighbor\s*:=\s*range\s+graph\[vertex\]\s*{\s*if\s*!visited\[neighbor\]\s*{\s*queue\s*=\s*append\(queue,\s*neighbor\)\s*}\s*}\s*}\s*}/,
            translation: 'def bfs(graph, start):\n  visited = set()\n  queue = [start]\n  while queue:\n    vertex = queue.pop(0)\n    if vertex not in visited:\n      visited.add(vertex)\n      queue.extend(n for n in graph[vertex] if n not in visited)'
        },
        'fibonacci': {
            pattern: /func\s+fibonacci\(n\s+int\)\s*int\s*{\s*if\s*n\s*<=\s*1\s*{\s*return\s+n\s*}\s*return\s+fibonacci\(n\s*-\s*1\)\s*\+\s*fibonacci\(n\s*-\s*2\)\s*}/,
            translation: 'def fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n - 1) + fibonacci(n - 2)'
        }
    },
    'rust_to_python': {
        'println!': {
            pattern: /println!\((.*)\)/,
            translation: 'print($1)'
        },
        'quick_sort': {
            pattern: /fn\s+quick_sort\((\w+):\s*&mut\s*\[i32\]\)\s*->\s*Vec<i32>\s*{\s*if\s*(\w+)\.len\(\)\s*<=\s*1\s*{\s*return\s+(\w+)\.to_vec\(\)\s*}\s*let\s+pivot\s*=\s*(\w+)\[(\w+)\.len\(\)\s*\/\s*2\];\s*let\s+left:\s*Vec<i32>\s*=\s*(\w+)\.iter\(\)\.filter\(\|&x\|\s*x\s*<\s*pivot\)\.cloned\(\)\.collect\(\);\s*let\s+middle:\s*Vec<i32>\s*=\s*(\w+)\.iter\(\)\.filter\(\|&x\|\s*x\s*==\s*pivot\)\.cloned\(\)\.collect\(\);\s*let\s+right:\s*Vec<i32>\s*=\s*(\w+)\.iter\(\)\.filter\(\|&x\|\s*x\s*>\s*pivot\)\.cloned\(\)\.collect\(\);/,
            translation: 'def quick_sort($1):\n  if len($1) <= 1:\n    return $1\n  pivot = $1[len($1) // 2]\n  left = [x for x in $1 if x < pivot]\n  middle = [x for x in $1 if x == pivot]\n  right = [x for x in $1 if x > pivot]\n  return quick_sort(left) + middle + quick_sort(right)'
        },
        'dfs': {
            pattern: /fn\s+dfs\(graph:\s*&HashMap<i32,\s*Vec<i32>>,\s*start:\s*i32,\s*visited:\s*&mut\s*HashSet<i32>\)\s*{\s*visited\.insert\(start\);\s*for\s*&neighbor\s*in\s*graph\.get\(&start\)\.unwrap\(\)\s*{\s*if\s*!visited\.contains\(&neighbor\)\s*{\s*dfs\(graph,\s*neighbor,\s*visited\);\s*}\s*}/,
            translation: 'def dfs(graph, start, visited=None):\n  if visited is None:\n    visited = set()\n  visited.add(start)\n  for neighbor in graph[start]:\n    if neighbor not in visited:\n      dfs(graph, neighbor, visited)'
        },
        'bfs': {
            pattern: /fn\s+bfs\(graph:\s*&HashMap<i32,\s*Vec<i32>>,\s*start:\s*i32\)\s*{\s*let\s+mut\s+visited\s*=\s*HashSet::new\(\);\s*let\s+mut\s+queue\s*=\s*VecDeque::new\(\);\s*queue\.push_back\(start\);\s*while\s*let\s+Some\(vertex\)\s*=\s*queue\.pop_front\(\)\s*{\s*if\s*!visited\.contains\(&vertex\)\s*{\s*visited\.insert\(vertex\);\s*for\s*&neighbor\s*in\s*graph\.get\(&vertex\)\.unwrap\(\)\s*{\s*if\s*!visited\.contains\(&neighbor\)\s*{\s*queue\.push_back\(neighbor\);\s*}\s*}\s*}\s*}/,
            translation: 'def bfs(graph, start):\n  visited = set()\n  queue = [start]\n  while queue:\n    vertex = queue.pop(0)\n    if vertex not in visited:\n      visited.add(vertex)\n      queue.extend(n for n in graph[vertex] if n not in visited)'
        },
        'fibonacci': {
            pattern: /fn\s+fibonacci\(n:\s*i32\)\s*->\s*i32\s*{\s*if\s*n\s*<=\s*1\s*{\s*return\s+n\s*}\s*fibonacci\(n\s*-\s*1\)\s*\+\s*fibonacci\(n\s*-\s*2\)\s*}/,
            translation: 'def fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n - 1) + fibonacci(n - 2)'
        }
    },
    // ... existing code ...
};

// Export the translation patterns
window.translationPatterns = codeTranslations; 
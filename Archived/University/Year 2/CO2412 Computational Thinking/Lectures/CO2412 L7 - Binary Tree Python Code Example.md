---
tags:
  - CO2412
  - Computational-Thinking
---
[[CO2412 Lecture 7 - Binary Search Trees & Heaps]]

---
# Code
![[CO2412 L7 - Binary Py Tree.png]]

```python
# Class to implement basic tree data structure
class TreeNode:
    def __init__(self, data, children=[]):
        self.data = data
        self.children = children

    def __str__(self, level=0):
        ret = " " * level + str(self.data) + "\n"
        for child in self.children:
            ret += child.__str__(level + 1)
        return ret

    def addChild(self, TreeNode):
        self.children.append(TreeNode)

tree = TreeNode('Drinks', [])
cold = TreeNode('Cold', [])
hot = TreeNode('Hot', [])

tree.addChild(cold)
tree.addChild(hot)

tea = TreeNode('Latte', [])
coffee = TreeNode('Mocha', [])
coke = TreeNode('Coke', [])
sprite = TreeNode('Sprite', [])
cold.addChild(coke)
cold.addChild(sprite)
hot.addChild(tea)

hot.addChild(coffee)

print(tree)
```

---
[[CO2412 Lecture 7 - Binary Search Trees & Heaps]]
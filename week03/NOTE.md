学习笔记

### 递归
类似盗梦空间的多层梦境嵌套，从一层梦境到下一次（参数带入），每一层与上一次独立不相关（函数调用栈）

模板代码结构：
```python
# Python
def recursion(level, param1, param2, ...): 
    # recursion terminator 终止条件
    if level > MAX_LEVEL: 
	   process_result 
	   return 
    # process logic in current level 本层逻辑处理
    process(level, data...) 
    # drill down 下钻下一层
    self.recursion(level + 1, p1, ...) 
    # reverse the current level status if needed 清理工作（看情况可选）
```

### 分治、回溯
#### 分治
分解问题，找重复性单元。将一个问题分成多个和原问题相似的小问题，递归解决小问题，
再将解决方式合并以解决原来的问题
#### 回溯
一种暴力枚举过程，逐个运行每种可能的路径，当发现不符合条件时回溯退出，继续下一个路径
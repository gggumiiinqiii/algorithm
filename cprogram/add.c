#include <stdio.h>

int main() {
    // 定义两个变量，用来存数字
    int a, b;
    
    // 提示用户输入
    printf("请输入第一个数字：");
    scanf("%d", &a);  // 读取你输入的数字
    
    printf("请输入第二个数字：");
    scanf("%d", &b);  // 读取第二个数字
    
    // 计算并输出结果
    printf("它们的和是：%d\n", a + b);
    
    return 0;
}
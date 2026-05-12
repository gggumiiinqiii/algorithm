链接：https://ac.nowcoder.com/acm/contest/132781/B
来源：牛客网

哈尔滨华德学院的校训是：
“诚毅求真，笃学强技”
。
“诚毅求真，笃学强技”。

作为华德学院的一名
𝐴
𝐶
𝑀
ACM 选手，小
𝐻
H 觉得直接输出校训太简单了。
于是他想了一个
“
复
杂
”
“复杂”一点的任务：

给你一个只包含小写字母和空格的字符串
𝑠
s ，请你判断这个字符串
是否等于
是否等于华德学院校训的标准拼音(注意：标准拼音，单词之间只用一个空格空开)。

华德学院校训的标准拼音为：
chengyi

qiuzhen

duxue

qiangji
chengyi qiuzhen duxue qiangji（单词之间只用一个空格隔开）
输入描述:
第一行一个整数
𝑇
（
1
≤
𝑇
≤
10
）
T（1≤T≤10），表示测试数据组数。

接下来
𝑇
T 行，每行一个字符串
𝑠
s ，长度不超过
100
100 ，只包含小写字母和空格。（保证不存在全是空格的行）
输出描述:
对于每组数据，如果
𝑠
s
完全等于
完全等于 校训的标准拼音，则输出
"YES"
"YES" ，否则输出
"NO"
"NO" 。

注意：题目保证输入只有小写字母和空格，但是必须严格匹配，包括空格位置。
示例1
输入
复制
3
chengyi qiuzhen duxue qiangji
chengyi qiuzhen duxue qiangji
chengyi qiuzhen duxue
输出
复制
YES
NO
NO

const lengthOfLongestSubstring = require("../../滑动窗口/3.无重复字符的最长子串");
// lengthOfLongestSubstring("abcabcbb"); //3
// lengthOfLongestSubstring("bbbbbbb"); //1
lengthOfLongestSubstring("pwwkew"); //3
// lengthOfLongestSubstring("  "); //3
// lengthOfLongestSubstring("jbpnbwwd"); //4
// lengthOfLongestSubstring("aab"); //2
// len 存储输入字符串 s 的长度。
// map 是一个 Map 数据结构，用于记录当前窗口中字符的出现次数。
// start 和 end 分别表示滑动窗口的起始和结束位置。
// maxLen 用于记录不含有重复字符的最长子串的长度。
// 算法步骤：

// 使用 while 循环，不断移动 end 指针，直到字符串末尾。
// 如果当前字符 s[end] 在 map 中不存在，表示窗口中没有重复字符，则将其添加到 map 中，同时更新 maxLen 为当前窗口长度（即 map 中不重复字符的个数）和之前的 maxLen 中的较大值。
// 如果当前字符 s[end] 在 map 中已经存在，表示窗口中有重复字符，需要移动 start 指针，并删除 map 中对应的字符，直到窗口中再次没有重复字符。
// 循环结束后，返回 maxLen，即不含有重复字符的最长子串的长度。
// 这个算法通过维护一个滑动窗口，在遍历字符串的过程中动态更新窗口的起始和结束位置，同时使用 map 来记录窗口内的字符出现次数，从而达到寻找最长不含重复字符子串的目的。

# Neural-Lite

Neural-Lite 是一款基于浏览器本地运行的轻量级对话机器人。本项目在现代 Web 环境下重现了 2000 年代经典的 Aqua 拟物化（Skeuomorphic）设计风格，并结合了基于模式匹配的本地对话算法。

## 核心特性

* **拟物化视觉系统**：纯 CSS 实现的 Aqua 风格界面，包含标志性的玻璃质感按钮（Gel Button）、金属拉丝纹理标题栏以及带有高光反光的对话气泡。
* **本地逻辑引擎**：
    * **模糊匹配算法**：结合 Jaccard 相似度与 Levenshtein 距离算法计算匹配得分，支持语序不敏感的查询。
    * **模式匹配 (Turing Engine)**：利用正则表达式捕获组实现动态对话反馈。
    * **同义词标准化**：内置预处理字典，将多样化的输入映射为标准关键词。
* **交互体验**：
    * **0 延迟音效**：利用 Web Audio API 预解码 Base64 音频数据，解决移动端播放延迟问题。
    * **视口适配**：支持 Visual Viewport API，适配 iPad 与手机端虚拟键盘的弹出布局。
* **隐私与存储**：聊天记录与 AI 记忆（如用户称呼、情绪状态）完全持久化于本地 `localStorage`。

## 技术实现

### 算法逻辑
* **Jaccard Index**：用于计算用户输入与知识库条目的字词重叠率。
* **Levenshtein Distance**：计算字符串编辑距离以处理拼写误差。
* **Sentiment Analysis**：基于关键词的正负向情绪分析系统，动态调整 AI 的回复语气与表情符号。

### 样式架构
* 使用 CSS 变量（Variables）管理 Aqua 蓝色系、金属灰色系及底纹样式。
* 通过多层 `linear-gradient` 与 `box-shadow` 堆叠模拟物理材质的高光与阴影。

## 快速开始

1.  下载本项目源代码。
2.  直接在浏览器中打开 `index.html` 即可运行。
3.  **扩展知识库**：可以通过修改代码中的 `fixedKnowledge` 数组或外部 `new_memory.json` 文件来添加对话内容。

## 项目结构

* `Aqua/Skeuomorphic Style System`：负责所有拟物化组件的样式渲染。
* `TuringBrain Class`：核心逻辑类，负责对话预处理、记忆读写及响应计算。
* `Audio System`：包含静音唤醒机制与预解码逻辑的音效引擎。

---

*本项目无需后端环境，完全运行于客户端。*

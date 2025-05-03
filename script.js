

    // 发送消息

    
    // 新的函数：获取回复
    function getResponse(message) {
        // 将关键词按长度从长到短排序
        const sortedKeys = Object.keys(responses).sort((a, b) => b.length - a.length);
    
        // 遍历排序后的关键词
        for (const key of sortedKeys) {
            if (message.includes(key)) {
                // 如果用户输入完全匹配某个关键词，直接返回对应的回复
                if (message === key) {
                    return responses[key][Math.floor(Math.random() * responses[key].length)];
                }
                // 如果用户输入包含关键词，返回对应的回复
                return responses[key][Math.floor(Math.random() * responses[key].length)];
            }
        }
    
        // 如果没有匹配到关键词，返回默认回复
        const defaultResponses = [
            "这个问题看起来很有趣，你可以在浏览器上搜索一下关于这个问题的信息，或许能够帮助到你。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~ o(^▽^)o",
            "我不太确定这个问题的答案，你可以尝试用不同的方式描述一下，我会尽力帮你！可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "这个问题有点难哦，不过你可以试试看查找相关的资料，说不定能找到答案。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "我目前还不太明白你的问题，不过你可以详细说说，我会尽力帮你解答！可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "这个问题好像超出了我的知识范围呢，你可以试试去问问专业人士哦。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "正如苏格拉底所说：‘我唯一知道的就是我一无所知。’或许这个问题需要更深入的探讨。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "孔子云：‘学而不思则罔，思而不学则殆。’或许你可以从多个角度思考这个问题，或者查阅更多资料。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~ o(^▽^)o",
            "这个问题很有深度，就像亚里士多德所说：‘知识来源于对问题的不断追问。’不妨再深入思考一下。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "有时候，答案并不在于找到一个明确的结论，而在于探索的过程本身。就像爱因斯坦所说：‘想象力比知识更重要。’可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~ o(^▽^)o",
            "这个问题让我想起了海明威的一句话：‘幸福不是你拥有的，而是你经历的。’或许答案就在你的经历中。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "或许这个问题需要从不同的文化背景中寻找答案。就像泰戈尔所说：‘真理之川从他的错误之沟渠中流过。’可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "这个问题很有挑战性，就像尼采所说：‘那些未能击垮我们的，会使我们更强大。’你可以尝试从失败中寻找启示。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "有时候，答案并不总是显而易见的。就像梵高所说：‘伟大的事情都是从渺小的事情开始的。’或许你可以从细节入手。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "这个问题让我想起了老子的《道德经》：‘千里之行，始于足下。’或许你可以从一个小问题开始探索。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "或许这个问题需要更多的背景信息来解答。就像歌德所说：‘理论是灰色的，而生命之树常青。’可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "这个问题很有意思，就像莎士比亚所说：‘生活里没有书籍，就好像没有阳光。’或许你可以从书中寻找答案。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "有时候，最好的答案来自于内心的直觉。就像梭罗所说：‘我们的生活就像大海，只有勇敢的人才能到达彼岸。’ 可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~o(^▽^)o",
            "这个问题让我想起了柏拉图的洞穴寓言：真理往往隐藏在表象之下。或许你需要更深入地挖掘。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "或许这个问题需要一些时间来思考。就像但丁所说：‘走自己的路，让别人去说吧。’可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~ o(^▽^)o",
            "这个问题很有深度，就像卡夫卡所说：‘目的必须坚定，道路可以灵活。’或许你可以尝试不同的方法来解决。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "有时候，答案就在问题之中。就像黑格尔所说：‘矛盾是推动事物发展的动力。’可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "这个问题让我想起了《庄子·逍遥游》：‘北冥有鱼，其名为鲲。’或许答案需要从更广阔的视野中寻找。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "或许这个问题需要更多的想象力。就像惠特曼所说：‘我赞美我自己，歌唱自己。’或许你可以从自我探索中找到答案。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "这个问题很有挑战性，就像鲁迅所说：‘希望是附丽于存在的，有存在，便有希望。’或许你可以从希望中寻找答案。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~",
            "或许这个问题需要更多的耐心。就像王阳明所说：‘知行合一。’或许你可以通过实践来寻找答案。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~o(^▽^)o",
            "这个问题让我想起了《论语》中的一句话：‘三人行，必有我师焉。’或许你可以向他人请教。可以在这里输入 开启搜索功能 这样就能够搜索到您想看的啦 ~"
        ];
    
    // 随机选择一个默认回复
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

    function addMessage(sender, text, className) {
        const p = document.createElement("p");
        p.className = className;
        p.innerHTML = `<b>${sender}：</b> ${text}`;
        chatBox.appendChild(p);
        scrollToBottom();
    }
    
    function typeMessage(sender, text, className) {
        isTyping = true; // 标记AI开始回复
        disableInputAndButton(); // 禁用输入框和发送按钮
    
        const p = document.createElement("p");
        p.className = className;
        p.innerHTML = `<b>${sender}：</b> <span class="typing-text"></span><span class="typing-dot">◉</span>`;
        chatBox.appendChild(p);
        scrollToBottom();
    
        const typingDot = p.querySelector(".typing-dot");
        const typingText = p.querySelector(".typing-text");
    
        let scale = 1;
        let growing = true;
        const animateTyping = setInterval(() => {
            scale = growing ? scale + 0.1 : scale - 0.1;
            if (scale >= 1.5) growing = false;
            if (scale <= 1) growing = true;
            typingDot.style.transform = `scale(${scale})`;
        }, 100);
    
        setTimeout(() => {
            clearInterval(animateTyping);
            typingDot.style.transform = "scale(1)";
            typingDot.style.animation = "none";
    
            let index = 0;
            const typeInterval = setInterval(() => {
                if (index < text.length) {
                    typingText.innerHTML += text[index];
                    index++;
                } else {
                    clearInterval(typeInterval);
                    typingDot.remove();
                    isTyping = false; // 标记AI回复完毕
                    enableInputAndButton(); // 启用输入框和发送按钮
                }
                scrollToBottom();
            }, 12);
        }, 5000);
    }
    
    function scrollToBottom() {
        chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" });
    }
    
    userInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
    
    function quickReply(button, text) {
        if (isTyping) return; // 如果AI正在回复，则直接返回，不执行快捷回复
        userInput.value = text;
        sendMessage();
        button.style.display = "none";
    }
    
    // 禁用输入框和发送按钮
    function disableInputAndButton() {
        userInput.disabled = true;
        sendButton.disabled = true;
    }
    
    // 启用输入框和发送按钮
    function enableInputAndButton() {
        userInput.disabled = false;
        sendButton.disabled = false;
    }
    



    function speakMessage() {
      const aiMessage = document.querySelector(".ai-message:last-child");
      if (!aiMessage) return;
  
      const text = aiMessage.textContent.replace("火狮助手：", "").trim();
      if (!text) return;

  
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-CN";
      utterance.rate = 1.5;
      utterance.pitch = 1;
      utterance.volume = 1;
  
      // 先清空之前的语音，防止冲突
      window.speechSynthesis.cancel();
      setTimeout(() => {
          window.speechSynthesis.speak(utterance);
      }, 100); // 适当延迟，防止 cancel() 导致播放失败
  
      document.getElementById("stop-voice-button").style.display = "inline-block";
      document.getElementById("speak-button").style.display = "none";
  
      utterance.onend = function () {
          document.getElementById("stop-voice-button").style.display = "none";
          document.getElementById("speak-button").style.display = "inline-block";
      };
  
      utterance.onerror = function (event) {
          console.error("语音播放发生错误：", event);
          document.getElementById("stop-voice-button").style.display = "none";
          document.getElementById("speak-button").style.display = "inline-block";
      };
  }
  




  // 新代码 组合词 分析 ai 回复-------------------------------------------------------------------------------------------------------------------------------

//以上的聊天代码已被移动到其它文件中











// 检查关键词组合是否匹配
function checkKeywordMatch(message) {
  const lowerMessage = message.toLowerCase(); // 转换为小写以便不区分大小写
  for (const item of keywordResponses) {
      const allKeywordsPresent = item.keywords.every(keyword => lowerMessage.includes(keyword));
      if (allKeywordsPresent) {
          return item.responses[Math.floor(Math.random() * item.responses.length)]; // 随机选择一个回复
      }
  }
  return null; // 如果不匹配，返回 null
}

// 解决重复发送问题
let sendMessageCalled = false; // 防止重复调用

function sendMessage() {
  if (isTyping || sendMessageCalled) return; // 如果 AI 正在回复或已发送消息，则直接返回
  sendMessageCalled = true; // 标记已调用

  setTimeout(() => { sendMessageCalled = false; }, 500); // 500ms 后允许重新发送

  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("你", message, "user-message");

  // **优先检查关键词匹配**
  const keywordResponse = checkKeywordMatch(message);
  if (keywordResponse) {
      typeMessage("火狮助手", keywordResponse, "ai-message");
  } else if (isMathExpression(message)) {
      // **如果关键词匹配失败，再检查是否为数学表达式**
      const result = calculateMath(message);
      typeMessage("火狮助手", result.toString(), "ai-message");
  } else {
      // **如果都不是，使用默认的关键词回复**
      let response = getResponse(message);
      typeMessage("火狮助手", response, "ai-message");
  }

  userInput.value = ""; // 清空输入框
}



   // 改进后的 isMathExpression 函数_____________________________________________________________________________________________________
// 检查是否为数学表达式

function isMathExpression(message) {
  message = message.trim();
  return /[+\-*/^()=]/.test(message) || /加|减|乘|除|÷|×|·|%/.test(message);
}

//数学

function calculateMath(expression) {
  try {
      // 清理表达式，替换中文符号
      let cleanedExpression = expression
          .replace(/加/g, '+')
          .replace(/减/g, '-')
          .replace(/乘/g, '*')
          .replace(/除/g, '/')
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/·/g, '*');

      // 处理"数字 ± 百分比" 例如 100 + 50% 变为 100 + (100 * 50 / 100)
      cleanedExpression = cleanedExpression.replace(/(\d+)\s*([\+\-])\s*(\d+)%/g, (match, num, operator, percent) => {
          return `${num} ${operator} (${num} * ${percent} / 100)`;
      });

      // 处理"数字 * 或 / 百分比" 例如 100 * 50% 变为 100 * (50 / 100)
      cleanedExpression = cleanedExpression.replace(/(\d+)\s*([\*/])\s*(\d+)%/g, (match, num, operator, percent) => {
          return `${num} ${operator} (${percent} / 100)`;
      });

      // 确保表达式只包含数字、运算符、小数点和括号
      cleanedExpression = cleanedExpression.replace(/[^0-9+\-*/().]/g, '');

      // 计算表达式
      const result = eval(cleanedExpression);
      return result;
  } catch (error) {
      return "抱歉，这个数学表达式无法计算，请确保表达式正确且只包含数字和运算符。";
  }
}




// 搜索功能 

let searchEnabled = false; // 是否启用搜索模式
let searchFrame = null; // 用于存储搜索窗口

function sendMessage() {
    if (isTyping || sendMessageCalled) return;
    sendMessageCalled = true;
    setTimeout(() => { sendMessageCalled = false; }, 500);

    const message = userInput.value.trim();
    if (message === "") return;

    addMessage("你", message, "user-message");

    // 开启搜索功能
    if (message === "开启搜索功能") {
        searchEnabled = true;
        typeMessage("火狮助手", "搜索功能已开启，请输入搜索内容。 ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴ ￴￴  ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴  ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴  ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴  ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴  ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴  ￴￴ ￴ ￴￴ ￴ ￴ ￴￴￴ ￴￴ ￴ ￴￴ ￴ ￴ ￴ ￴ 提示：如果您要关闭搜索功能可以直接输入 关闭搜索功能", "ai-message");
        userInput.value = "";
        return;
    }

    // 关闭搜索功能
    if (message === "关闭搜索功能") {
        searchEnabled = false;
        if (searchFrame) {
            searchFrame.remove(); // 移除嵌入的 Bing 结果
            searchFrame = null;
        }
        typeMessage("火狮助手", "搜索功能已关闭，恢复聊天模式。", "ai-message");
        userInput.value = "";
        return;
    }

    // 在搜索模式下进行搜索
    if (searchEnabled) {
        typeMessage("火狮助手", "正在搜索，请稍候...  以下是搜索结果", "ai-message");

        // 删除之前的搜索窗口
        if (searchFrame) {
            searchFrame.remove();
        }

        // 创建一个 iframe 作为搜索窗口
        searchFrame = document.createElement("iframe");
        searchFrame.src = `https://www.bing.com/search?q=${encodeURIComponent(message)}`;
        searchFrame.style.width = "100%";
        searchFrame.style.height = "400px";
        searchFrame.style.border = "none";
        searchFrame.style.borderRadius = "8px";
        searchFrame.style.marginTop = "10px";
        searchFrame.style.paddingTop = "50px"; // 增加上方间距


        // 等待 AI 回复完成后插入 iframe
        setTimeout(() => {
            chatBox.appendChild(searchFrame);
            scrollToBottom(); // 滚动到底部
        }, 1000);

        userInput.value = "";
        return;
    }

    // **其他正常聊天逻辑**
    const keywordResponse = checkKeywordMatch(message);
    if (keywordResponse) {
        typeMessage("火狮助手", keywordResponse, "ai-message");
    } else if (isMathExpression(message)) {
        const result = calculateMath(message);
        typeMessage("火狮助手", result.toString(), "ai-message");
    } else {
        let response = getResponse(message);
        typeMessage("火狮助手", response, "ai-message");
    }

    userInput.value = "";
}




// 按钮搜索回复

function toggleButtons() {
  const buttonContainer = document.getElementById("button-container");
  const toggleButton = document.getElementById("toggle-button");

  if (buttonContainer.classList.contains("hidden")) {
      buttonContainer.classList.remove("hidden");
      toggleButton.textContent = "隐藏内容";
  } else {
      buttonContainer.classList.add("hidden");
      toggleButton.textContent = "显示内容";
  }
}



// 录音

// voiceInput.js

// 语音输入相关变量
let recognition;
let isVoiceInputActive = false;

// 启动语音输入
function startVoiceInput() {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        alert("当前浏览器不支持语音输入功能，请使用支持Web Speech API的浏览器（如Chrome）。");
        return;
    }

    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "zh-CN"; // 设置语言为中文
    recognition.interimResults = false; // 不显示中间结果
    recognition.maxAlternatives = 1; // 最多返回一个结果

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript; // 获取语音识别结果
        document.getElementById("user-input").value = transcript; // 将结果填入输入框
        stopVoiceInput(); // 停止录音
        sendMessage(); // 自动发送消息
    };

    recognition.onerror = function(event) {
        console.error("语音识别错误：", event.error);
        stopVoiceInput(); // 出错时停止录音
    };

    recognition.start(); // 开始语音识别
    isVoiceInputActive = true;
    document.getElementById("huoshisoundaudio-button").style.display = "none";
    document.getElementById("huoshisoundaudio-stop-button").style.display = "inline-block";
}

// 停止语音输入
function stopVoiceInput() {
    if (recognition) {
        recognition.stop(); // 停止语音识别
    }
    isVoiceInputActive = false;
    document.getElementById("huoshisoundaudio-button").style.display = "inline-block";
    document.getElementById("huoshisoundaudio-stop-button").style.display = "none";
}

// 切换语音输入状态
function toggleVoiceInput() {
    if (isVoiceInputActive) {
        stopVoiceInput();
    } else {
        startVoiceInput();
    }
}



// genshin 原神

// 时间

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('huoshitimeshijian-time-text');
    const dateElement = document.getElementById('huoshitimeshijian-date-text');
    
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).replace(/:/g, '<span class="colon">:</span>');
    
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).toUpperCase();

    timeElement.innerHTML = timeString;
    dateElement.textContent = dateString;
}

// 初始化
setInterval(updateTime, 1000);
updateTime();

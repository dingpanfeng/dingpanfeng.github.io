### 小结
<table>
  <thead>
    <tr>
      <th>比较内容</th>
      <th>hybrid</th>
      <th>react-native/weex</th>
      <th>flutter</th>
      <th>native</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>语言</td>
      <td>JS</td>
      <td>RN：React/Weex：Vue</td>
      <td>Dart</td>
      <td>Android：Java/Kotlin/iOS：OC/Swift</td>
    </tr>
    <tr>
      <td>平台实现</td>
      <td>JS 引擎解释执行JS代码</td>
      <td>JS 引擎解释执行JS代码</td>
      <td>开发版本：Dart 虚拟机解释执行 发布版本：Dart 代码编译成目标机器码</td>
      <td>Android：安装时编译成目标机器码/iOS：构建时编译成目标机器码</td>
    </tr>
    <tr>
      <td>绘制</td>
      <td>1、Html+css 2、浏览器引擎绘制</td>
      <td>1、JS 生成 DOM 树 2、Native 端解析 DOM 树，转换成原生 View 显示</td>
      <td>1、使用 Dart 实现 UI 组件 2、Skia Engine 渲染</td>
      <td>原生 View</td>
    </tr>
    <tr>
      <td>控件效果</td>
      <td>1、样式一致 2、交互效果和原生控件有差距</td>
      <td>1、不同平台样式不一致 2、本身就是原生控件</td>
      <td>1、样式一致 2、交互效果和原生控件很接近</td>
      <td>/</td>
    </tr>
    <tr>
      <td>流畅度</td>
      <td>一般</td>
      <td>较好</td>
      <td>基本和原生相同</td>
      <td>好</td>
    </tr>
    <tr>
      <td>动画</td>
      <td>差</td>
      <td>一般</td>
      <td>和原生相同</td>
      <td>好</td>
    </tr>    
    <tr>
      <td>跨平台支持</td>
      <td>Android、iOS、Web</td>
      <td>RN：Android、iOS/Weex：Android、iOS、Web</td>
      <td>Android、iOS（2019.5 发布 Web 端预览版，bug 多，性能差）</td>
      <td>/</td>
    </tr>
    <tr>
      <td>动态热更新</td>
      <td>支持</td>
      <td>支持</td>
      <td>不支持</td>
      <td>不支持</td>
    </tr>
    <tr>
      <td>页面开发</td>
      <td>整体 APP、模块、单页面</td>
      <td>RN：整体 APP、模块、单页面/Weex：单页面</td>
      <td>整体 APP、模块、单页面</td>
      <td>/</td>
    </tr>
    <tr>
      <td>社区支持</td>
      <td>丰富</td>
      <td>第三方库多，但质量良莠不齐</td>
      <td>第三方库较少</td>
      <td>丰富</td>
    </tr>
    <tr>
      <td>原生UI组件</td>
      <td>不能桥接</td>
      <td>可以桥接</td>
      <td>可以桥接（性能差）</td>
      <td>/</td>
    </tr>
    <tr>
      <td>开发成本</td>
      <td>纯前端</td>
      <td>纯前端</td>
      <td>学习dart</td>
      <td>/</td>
    </tr>
    <tr>
      <td>安装包大小增加</td>
      <td>1MB</td>
      <td>8MB/10MB</td>
      <td>10MB</td>
      <td>/</td>
    </tr>
  </tbody>
</table>
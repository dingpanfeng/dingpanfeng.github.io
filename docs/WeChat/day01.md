## 目标

### 1.认识小程序

#### 小程序简介

小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

#### 小程序与普通网页开发的区别

小程序的主要开发语言是 JavaScript ，所以通常小程序的开发会被用来同普通的网页开发来做对比。两者有很大的相似性，对于前端开发者而言，从网页开发迁移到小程序的开发成本并不高，但是二者还是有些许区别的

##### 1.运行环境不同

网页运行在`浏览器`环境中

小程序运行在`微信`环境中

##### 2.开发模式不同

网页的开发：主要是面向浏览器，web开发体系，搭配上一些辅助工具或者编辑器即可，使用标准的 `HTML、CSS、JavaScript`

小程序开发：面向 iOS 和 Android 的微信客户端，小程序开发体系，需要经过申请小程序帐号、安装小程序开发者工具、配置项目等等过程方可完成

##### 3.API不同

由于运行环境的不同，小程序的架构模型和传统web单线程架构也不同，小程序为双线程架构，逻辑层和渲染层是分开的

小程序无法调用 DOM API和BOM API， 例如 jQuery、 Zepto 等，会使用到`window`对象和`document`对象，所以在小程序中是无法运行的。

小程序基于微信提供更多私有API:`扫码、支付、地理位置`...

#### 体验小程序

开发者可使用微信客户端(6.7.2 及以上版本)扫码下方小程序码，体验小程序。

<img src="/wx/wx_demo.jpg" align="left" style="zoom:80%;" />

### 2.第一个小程序

#### 注册小程序账号

先准备一个没有注册过公众号的邮箱，使用浏览器打开 https://mp.weixin.qq.com 网址，点击右上角的“立即注册”按钮，账号类型选择“小程序”，再按照提示填写个人信息，最后进入邮箱激活账号即可。

注册指引：https://developers.weixin.qq.com/community/business/doc/000200772f81508894e94ec965180d

##### 获取小程序AppID

每个微信小程序在创建之后（即在微信公众平台注册并初始化完成）便同时生成了一`AppID`，这个 ID 标记了小程序的唯一性，相当于小程序平台的一个身份证，后续会在很多地方要用到

<img src="/wx/appid.jpg" alt="appid" style="zoom:80%;" />

#### 安装开发者工具

##### 1.概览

为了帮助开发者简单和高效地开发和调试微信小程序，我们在原有的公众号网页调试工具的基础上，推出了全新的 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，集成了公众号网页调试和小程序调试两种开发模式

- 使用小程序调试，开发者可以完成小程序的 API 和页面的开发调试。
- 代码查看和编辑
- 小程序预览和发布等功能

##### 2.下载和安装

推荐下载和安装最新的`稳定版`（Stable Build）的微信开发者工具，下载后按照安装步骤安装即可

下载页面的链接：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

##### 3.登录

安装完后打开，在登录页，可以使用微信扫码登录开发者工具，开发者工具将使用这个微信帐号的信息进行小程序的开发和调试

<div style="overflow: hidden;">
  <img src="/wx/logoin.jpg" alalt="logoin" style="float:left;zoom:33%;" />
  <img src="/wx/phone.jpg" alalt="phone" style="float:left;zoom:33%;" />
  <img src="/wx/success.jpg" alalt="success" style="float:left;zoom:33%;" />
</div>

##### 4.编辑器设置

<div style="overflow: hidden;">
  <img src="/wx/out_set.jpg" style="float:left;zoom:25%;" />
  <img src="/wx/agent_set.jpg" style="float:left;zoom:25%;" />
</div>

#### 运行第一个小程序

##### 1.创建第一个小程序

<div style="overflow: hidden;">
  <img src="/wx/select.jpg" style="float:left;zoom:30%;" />
  <img src="/wx/create.jpg" style="float:left;zoom:30%;" />
</div>

##### 2.编译预览小程序

<img src="/wx/run.jpg" alt="run" style="zoom: 40%;" />

##### 3.主界面

<img src="/wx/ui.jpg" alt="ui" style="zoom: 40%;" />

### 3.小程序代码构成

#### 项目的目录基本结构

<img src="/wx/dir.jpg" alt="dir" style="zoom:70%;" />

#### 代码构成

项目主体由`app.js`、`app.json`、`app.wxss`三个文件组成，放在根目录。

| 文件     | 必需 | 作用                                                  |
| :------- | :--- | :---------------------------------------------------- |
| app.js   | 是   | 小程序逻辑,`App()` 必须在 `app.js` 中注册，启动小程序 |
| app.json | 是   | 小程序公共配置                                        |
| app.wxss | 否   | 小程序公共样式表                                      |

`pages`文件夹里是小程序的各个页面，每个界面一般都由`.wxml`、`.wxss`、`.js`、`.json`四个文件组成，四个文件必须是相同的名字和路径。

| 文件类型 | 必需 | 作用                               |
| :------- | :--- | :--------------------------------- |
| js       | 是   | 页面逻辑，通过`Page()`函数注册页面 |
| wxml     | 是   | 页面结构                           |
| json     | 否   | 页面配置                           |
| wxss     | 否   | 页面样式表                         |

##### 1.`JSON` 配置

作用：JSON 是一种数据格式，在实际开发中，JSON 总是以**配置文件**的形式出现。小程序项目中也不例外：通过不同的 .json 配置文件，可以对小程序项目进行不同级别的配置。

| 文件名              | 方式     		| 描述                                                         |
| :------------------ | :---------- | :--------------------------------------------------------------------- |
| app.json            | 全局配置 | 包括了所有页面路径、界面表现、网络超时时间、底部 tab、插件等，常用的两个配置是 `window` 和 `pages` |
| project.config.json | 工具配置 | 对项目工具相关的，比如开发者工具的编译设置（是否使用 ES6 语法等）、界面设置，以及云函数相关 |
| page.json           | 页面配置 | 对本页面的窗口表现进行配置，页面中配置项会覆盖 `app.json` 的 `window` 中相同的配置项 |

**app.json**

```json
{
  "pages": [ // 设置页面的路径
    "pages/index/index",
    "pages/logs/index"
  ],
  "window": { // 设置默认窗口的表现形式
     "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "小程序",
    "backgroundColor": "#eeeeee",
    "backgroundTextStyle": "light"
  },
  "tabBar": { // 底部tab或者顶部tab的表现，是个数组，最少配置2个，最多5个
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/logs/index",
      "text": "日志"
    }]
  },
  "networkTimeout": { // 默认都是 60000 秒一分钟
    "request": 5000
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json",
}
```

| 属性            | 类型     | 必填 | 描述                            |
| :-------------- | :------- | :--- | :------------------------------ |
| `pages`         | string[] | 是   | 页面路径列表                    |
| `window`        | Object   | 否   | 全局的默认窗口表现              |
| `tabBar`        | Object   | 否   | 底部 `tab` 栏的表现             |
| networkTimeout  | Object   | 否   | 网络超时时间                    |
| debug           | boolean  | 否   | 是否开启 debug 模式，默认关闭   |
| subpackages     | Object[] | 否   | 分包结构配置                    |
| workers         | string   | 否   | `Worker` 代码放置的目录         |
| sitemapLocation | string   | 是   | 指明 sitemap.json 的位置        |
| style           | string   | 否   | 指定使用升级后的 weui 样式 版本 |

**project.config.json**

```json
{
  "description": "项目配置文件。",
  "packOptions": {
    "ignore": []
  },
  "setting": {
  },
  "compileType": "miniprogram",
  "appid": "wx0f2404b606f7a9e5",
  "projectname": "项目名称",
}
```

**page.json**

```json
{
  "navigationBarTitleText": "首页",
  "navigationStyle": "custom",  // 自定义导航栏
  "usingComponents": {}
}
```

##### 2.`WXML` 模板

WXML（WeiXin Markup Language）是框架设计的一套标签语言，结合`基础组件`、`事件系统`，可以构建出页面的结构。其作用类似于网页开发中的 HTML角色。

```vue
<view class="container log-list">
 <view class="userinfo">
    <block wx:if="{{canIUseOpenData}}">
      <view class="userinfo-avatar" bindtap="bindViewTap">
        <text class="user-motto">{{motto}}</text>
      </view>
    </block>
    <block wx:elif="{{!hasUserInfo}}">
       <view wx:else> 请使用1.4.4及以上版本基础库 </view>
    </block>
  </view>
  <block wx:for="{{logs}}" wx:key="timeStamp" wx:for-item="log">
    <text class="log-item">{{index + 1}}. {{log.date}}</text>
  </block>
</view>

```

- 小程序自定义一套组件和html标签不一样
  - view、text...
- 小程序组件属性html标签属性大部分一样
  - id、style、class、bind\*、catch\* 
- 类似vue模板数据绑定表达式，数据绑定、列表渲染、条件渲染、模板、引用
  - wx:if、wx:for

##### 3.`WXSS` 样式

WXSS (WeiXin Style Sheets)是一套样式语言，用于描述 WXML 的组件样式，WXSS 具有 CSS 大部分特性。同时为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改

###### 尺寸单位rpx

`rpx` 可以根据屏幕的宽带进行自适应，不需要手动计算，类似于rem

###### 样式导入

`@import`导入外联样式表，如：`@import "test.wxss"`;

###### 提供了全局的样式和局部样式

定义在`app.wxss`中的全局样式，作用于每个页面。定义在`page`的`.wxss`文件只作用于对应的页面，会覆盖`app.wxss`中相同的选择器

##### 4.`JS` 逻辑交互

JS是页面的脚本代码，一个服务仅仅只有界面展示是不够的，还需要和用户做交互，通过`Page()`函数注册页面。可以指定页面的初始数据、生命周期、事件处理、获取用户的位置等等

### 4.小程序宿主环境

我们称微信客户端给小程序所提供的环境为宿主环境。小程序可以调用宿主环境提供的微信客户端的能力，这就使得小程序比普通网页拥有更多的能力。

##### 渲染原理和通信

小程序的运行环境分成渲染层和逻辑层，渲染层和逻辑层是分离的。其中 WXML 模板和 WXSS 样式工作在渲染层，JS 脚本工作在逻辑层

| **运行环境**     | **逻辑层**     | **渲染层**       |
| :--------------- | :------------- | :--------------- |
| iOS              | JavaScriptCore | WKWebView        |
| 安卓             | V8             | chromium定制内核 |
| 小程序开发者工具 | NWJS           | Chrome WebView   |

小程序的渲染层和逻辑层分别由2个线程管理：渲染层的界面使用了WebView 进行渲染；逻辑层采用JsCore线程运行JS脚本。一个小程序存在多个界面，所以渲染层存在多个WebView线程，这两个线程的通信会经由微信客户端（下文中也会采用Native来代指微信客户端）做中转，逻辑层发送网络请求也经由Native转发。

<img src="/wx/render.png" alt="render" style="zoom: 40%;" />

##### 小程序启动的过程

① 把小程序的代码包下载到本地

② 解析 app.json 全局配置文件

③ 执行 app.js 小程序入口文件，调用 App() 创建小程序实例

④ 渲染小程序首页

⑤ 小程序启动完成

##### 页面渲染的过程

① 加载解析页面的 .json 配置文件

② 加载页面的 .wxml 模板和 .wxss 样式

③ 执行页面的 .js 文件，调用 Page() 创建页面实例

④ 页面渲染完成

##### 组件

一个小程序页面可以分解成多个部分组成，`组件`就是小程序页面的基本组成单元。为了让开发者可以快速进行开发，像搭积木一样，组合各种组件拼合成自己的小程，小程序的宿主环境提供了一系列基础组件

- 视图容器：主要是实现页面布局的，对常见的布局形式进行了封装，比如滚动 sroll-view 等
  - view
  - scroll-view
  - swiper & swiper-item


- 基本内容：类似 HTML5 中内容相关的 p、em 等
  - text
  - rich-text
- 表单相关：要比 HTML5 的 form 表单丰富一些
- 导航：类似 a 标签
  - navigator（后面课程会专门讲解）
- 媒体组件：类比 HTML5 中的 video、audio 和 img 等，但是提供更标准的界面和更丰富的 API 支持
  - image
- 画布：Native 实现的 Canvas
- 地图：结合腾讯地图数据 Native 实现的组件
- 开放能力：这部分组件偏通用和小程序业务

##### API

小程序宿主环境提供了丰富的API，API概念时，通常指的是wx对象底下的方法。可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等

- 事件监听 API

  `wx.on*` 开头的 API 是监听某个事件发生的API接口，接受一个 Callback 函数作为参数。当该事件触发时，会调用 Callback 函数。		

  ```javascript
  // 这类 API 接受一个回调函数作为参数，当事件触发时会调用这个回调函数，并将相关数据以参数形式传入
  wx.onCompassChange(function (res) {
    console.log(res.direction)
  })
  ```

- 同步 API

  以 `Sync` 结尾的 API 都是同步 API

  ```javascript
  // 同步 API 的执行结果可以通过函数返回值直接获取，如果执行出错会抛出异常
  try {
    wx.setStorageSync('key', 'value')
  } catch (e) {
    console.error(e)
  }
  ```

- 异步 API

  大多数 API 都是异步 API，如 `wx.request`，`wx.login` 等。这类 API 接口通常都接受一个 `Object` 类型的参数，一般由success、fail、complete三个回调来接收接口调用结果

  ```javascript
  wx.request({
    url: 'example.php', 
    data: {
      x: '',
      y: ''
    },
    success (res) {
      console.log(res.data)
    },
    fail(err) {
    	console.log(err)
    }
  })
  ```

### 5.小程序协同工作和发布

在中大型的公司里，人员的分工非常仔细：同一个小程序项目，一般会有不同岗位、不同角色的员工同时参与设计与开发。

此时出于管理需要，我们**迫切需要对**不同岗位、不同角色的**员工的权限进行边界的划分**，使他们能够高效的进行协同工作。

#### 1.人员组织结构和权限分配

**了解项目成员组织结构**

<img src="/wx/group.png" alt="group" style="zoom:80%;" />

**小程序的开发流程**

<img src="/wx/flow.png" alt="flow" style="zoom:80%;" />

**为了便于管理，小程序平台给不同角色定义了7种权限**

| **权限**     | **说明**                                                     |
| :----------- | :----------------------------------------------------------- |
| 开发者权限   | 可使用小程序开发者工具及开发版小程序进行开发                 |
| 体验者权限   | 可使用体验版小程序                                           |
| 登录         | 可登录小程序管理后台，无需管理员确认                         |
| 数据分析     | 使用小程序数据分析功能查看小程序数据                         |
| 开发管理     | 小程序提交审核、发布、回退                                   |
| 开发设置     | 设置小程序服务器域名、消息推送及扫描普通链接二维码打开小程序 |
| 暂停服务设置 | 暂停小程序线上服务                                           |

管理者可以很方便分配这些权限给项目的各个组织成员，小程序的管理比传统的网页开发和App应用开发更为简单便捷。

| **成员**       | **权限分配**                       |
| :------------- | :--------------------------------- |
| 项目管理组成员 | 拥有所有权限                       |
| 开发组成员     | 开发者权限 / 体验者权限 / 数据分析 |
| 产品组成员     | 体验者权限 / 数据分析              |
| 测试组成员     | 体验者权限                         |

#### 2.小程序的版本

一般的软件开发流程，开发者编写代码自测开发版程序，直到程序达到一个稳定可体验的状态时，开发者会把这个体验版本给到产品经理和测试人员进行体验测试，最后修复完程序的Bug后发布供外部用户正式使用。

| **权限**   | **说明**                                                     |
| :--------- | :----------------------------------------------------------- |
| 开发版本   | 使用开发者工具，可将代码上传到开发版本中。 开发版本只保留每人最新的一份上传的代码。<br />点击提交审核，可将代码提交审核。开发版本可删除，不影响线上版本和审核中版本的代码。 |
| 体验版本   | 可以选择某个开发版本作为体验版，并且选取一份体验版。         |
| 审核中版本 | 只能有一份代码处于审核中。有审核结果后可以发布到线上，也可直接重新提交审核，覆盖原审核版本。 |
| 线上版本   | 线上所有用户使用的代码版本，该版本代码在新版本代码发布后被覆盖更新。 |

#### 3.发布

## Hybrid简介
**混合 App （hybrid App）顾名思义就是原生 App 与 Web App 的结合**。它的壳是原生 App容器，但是里面放的是网页。 主要原理就是将App的一部分需要动态变动的内容通过H5来实现，通过系统提供的网页渲染控件`WebView (Android)或WKWebView（iOS）`来加载，也可以自己内置一个浏览器内核（微信，UC）；

### 优点
* 跨平台，开发成本低，Web 技术是跨平台的，开发者只写一次页面，就能支持多个平台；
* 灵活性，混合 App 的灵活性大，很容易集成多种功能，加载外部的 H5 页面，Web 页面可以方便地调用外部的 Web 服务；
* 开发方便，Web 页面的调试和构建，比原生控件简单省时。页面的更新也容易，只要在服务器上发布新版本，触发容器内更新就可以了，无需审核

### 缺点
* 性能差弱网络无网络条件下体验差，不仅不如原生 App，而且由于 WebView 不是全功能浏览器，可能比 Web App 都要慢一些；
* WebView实质上就是一个浏览器内核，JavaScript依然运行在一个权限受限的沙箱中，对于H5不能实现的功能，都需要原生去做；
* 不适用于一些交互较强或者性能要求较高的 App (比如动画较多就不适合)

### JSBridge
JSBridge 是一种 JS 实现的 Bridge，连接着桥两端的 Native 和 H5。它在 APP 内方便地让 Native 代码通过 WebView 容器与 JavaScript 代码通信，是双向通信的通道。实现原生功能如查看本地相册、打开摄像头、指纹支付等。

![Alt text](/hybrid.jpeg)

#### H5 调用 Native
* Android 和 iOS 都可以通过拦截 URL Scheme 并解析 scheme 来决定是否进行对应的 Native 代码逻辑处理；（ scheme://[path][?query]）
* 重写 prompt，拦截 alert、confirm、prompt、console.log 四个方法，分别被 Webview 的 onJsAlert、onJsConfirm、onConsoleMessage、onJsPrompt 监听
* 注入 API，基于 Webview 提供的能力，我们可以向 Window 上注入对象或方法。JS 通过这个对象或方法进行调用时，执行对应的逻辑操作，可以直接调用 Native 的方法。使用该方式时，JS 需要等到 Native 执行完对应的逻辑后才能进行回调里面的操作。


```js
/**
 *	获取用户基本信息
 *
 * 	exports.getAppUserInfo();
 *
 *	return json:
 *			status 结果状态 int 200 成功  201 失败
 *			info 结果值 成功 json 失败 空对象
 *
 **/
exports.getAppUserInfo = function() {

	//获取用户信息
	if (typeof anShuqiForSqWebJS === "undefined" || typeof anShuqiForSqWebJS.getAppUserInfo === "undefined") {

		return {
			'info': {},
			status: 201
		};

	} else {

		var appUserInfo = anShuqiForSqWebJS.getAppUserInfo("{}");
		appUserInfo = JSON.parse(appUserInfo);
		for (var info in appUserInfo) {
			appUserInfo[info] = decodeURIComponent(appUserInfo[info]);
		}

		return {
			'info': appUserInfo,
			status: 200
		};

	}

};

//分享方法
exports.openAppSendShareData = function (jsonData) {
    /* "shareUrl":"" 分享跳转的链接地址
       "imgUrl":"" 分享的图片地址
       "shareTitle":"" 分享标题
       "shareContent":"" 分享描述内容*/
    if (typeof anShuqiForSqWebJS === "undefined" || anShuqiForSqWebJS.openAppSendShareData == undefined) {
        return JSON.stringify({ status: 201 });
    } else {
        return anShuqiForSqWebJS.openAppSendShareData(JSON.stringify(jsonData));
    }
}
```
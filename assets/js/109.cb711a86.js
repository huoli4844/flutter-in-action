(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{633:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_9-3-自定义路由切换动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-自定义路由切换动画"}},[t._v("#")]),t._v(" 9.3 自定义路由切换动画")]),t._v(" "),s("p",[t._v("我们在第二章“路由管理”一节中讲过：Material组件库中提供了一个"),s("code",[t._v("MaterialPageRoute")]),t._v("组件，它可以使用和平台风格一致的路由切换动画，如在iOS上会左右滑动切换，而在Android上会上下滑动切换。现在，我们如果在Android上也想使用左右切换风格，该怎么做？一个简单的作法是可以直接使用"),s("code",[t._v("CupertinoPageRoute")]),t._v("，如：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v(" Navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CupertinoPageRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("  \n   builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PageB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("CupertinoPageRoute")]),t._v("是Cupertino组件库提供的iOS风格的路由切换组件，它实现的就是左右滑动切换。那么我们如何来自定义路由切换动画呢？答案就是"),s("code",[t._v("PageRouteBuilder")]),t._v("。下面我们来看看如何使用"),s("code",[t._v("PageRouteBuilder")]),t._v("来自定义路由切换动画。例如我们想以渐隐渐入动画来实现路由过渡，实现代码如下：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PageRouteBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    transitionDuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//动画时间为500毫秒")]),t._v("\n    pageBuilder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Animation animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        Animation secondaryAnimation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FadeTransition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用渐隐渐入过渡,")]),t._v("\n        opacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PageB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//路由B")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("我们可以看到"),s("code",[t._v("pageBuilder")]),t._v(" 有一个"),s("code",[t._v("animation")]),t._v("参数，这是Flutter路由管理器提供的，在路由切换时"),s("code",[t._v("pageBuilder")]),t._v("在每个动画帧都会被回调，因此我们可以通过"),s("code",[t._v("animation")]),t._v("对象来自定义过渡动画。")]),t._v(" "),s("p",[t._v("无论是"),s("code",[t._v("MaterialPageRoute")]),t._v("、"),s("code",[t._v("CupertinoPageRoute")]),t._v("，还是"),s("code",[t._v("PageRouteBuilder")]),t._v("，它们都继承自PageRoute类，而"),s("code",[t._v("PageRouteBuilder")]),t._v("其实只是"),s("code",[t._v("PageRoute")]),t._v("的一个包装，我们可以直接继承"),s("code",[t._v("PageRoute")]),t._v("类来实现自定义路由，上面的例子可以通过如下方式实现：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("定义一个路由类"),s("code",[t._v("FadeRoute")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FadeRoute")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PageRoute")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FadeRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@required")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transitionDuration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("opaque "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("barrierDismissible "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("barrierColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("barrierLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maintainState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" WidgetBuilder builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Duration transitionDuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" bool opaque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" bool barrierDismissible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Color barrierColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" String barrierLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" bool maintainState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildPage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Animation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("double"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      Animation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("double"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" secondaryAnimation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildTransitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Animation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("double"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      Animation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("double"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" secondaryAnimation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Widget child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FadeTransition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n       opacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用"),s("code",[t._v("FadeRoute")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[t._v("Navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FadeRoute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PageB")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("虽然上面的两种方法都可以实现自定义切换动画，但实际使用时应优先考虑使用PageRouteBuilder，这样无需定义一个新的路由类，使用起来会比较方便。但是有些时候"),s("code",[t._v("PageRouteBuilder")]),t._v("是不能满足需求的，例如在应用过渡动画时我们需要读取当前路由的一些属性，这时就只能通过继承"),s("code",[t._v("PageRoute")]),t._v("的方式了，举个例子，假如我们只想在打开新路由时应用动画，而在返回时不使用动画，那么我们在构建过渡动画时就必须判断当前路由"),s("code",[t._v("isActive")]),t._v("属性是否为"),s("code",[t._v("true")]),t._v("，代码如下：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\nWidget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildTransitions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Animation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("double"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Animation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("double"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" secondaryAnimation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Widget child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前路由被激活，是打开新路由")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isActive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FadeTransition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n     opacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是返回，则不应用过渡动画")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EdgeInsets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("关于路由参数的详细信息读者可以自行查阅API文档，比较简单，不再赘述。")])])}),[],!1,null,null,null);a.default=e.exports}}]);
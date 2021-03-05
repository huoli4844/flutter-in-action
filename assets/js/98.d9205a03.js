(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{598:function(e,t,d){"use strict";d.r(t);var _=d(45),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[d("h1",{attrs:{id:"_4-1-布局类组件简介"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-布局类组件简介"}},[e._v("#")]),e._v(" 4.1 布局类组件简介")]),e._v(" "),d("p",[e._v("布局类组件都会包含一个或多个子组件，不同的布局类组件对子组件排版(layout)方式不同。我们在前面说过"),d("code",[e._v("Element")]),e._v("树才是最终的绘制树，"),d("code",[e._v("Element")]),e._v("树是通过Widget树来创建的（通过"),d("code",[e._v("Widget.createElement()")]),e._v("），Widget其实就是Element的配置数据。在Flutter中，根据Widget是否需要包含子节点将Widget分为了三类，分别对应三种Element，如下表：")]),e._v(" "),d("table",[d("thead",[d("tr",[d("th",[e._v("Widget")]),e._v(" "),d("th",[e._v("对应的Element")]),e._v(" "),d("th",[e._v("用途")])])]),e._v(" "),d("tbody",[d("tr",[d("td",[e._v("LeafRenderObjectWidget")]),e._v(" "),d("td",[e._v("LeafRenderObjectElement")]),e._v(" "),d("td",[e._v("Widget树的叶子节点，用于没有子节点的widget，通常基础组件都属于这一类，如Image。")])]),e._v(" "),d("tr",[d("td",[e._v("SingleChildRenderObjectWidget")]),e._v(" "),d("td",[e._v("SingleChildRenderObjectElement")]),e._v(" "),d("td",[e._v("包含一个子Widget，如：ConstrainedBox、DecoratedBox等")])]),e._v(" "),d("tr",[d("td",[e._v("MultiChildRenderObjectWidget")]),e._v(" "),d("td",[e._v("MultiChildRenderObjectElement")]),e._v(" "),d("td",[e._v("包含多个子Widget，一般都有一个children参数，接受一个Widget数组。如Row、Column、Stack等")])])])]),e._v(" "),d("blockquote",[d("p",[e._v("注意，Flutter中的很多Widget是直接继承自StatelessWidget或StatefulWidget，然后在"),d("code",[e._v("build()")]),e._v("方法中构建真正的RenderObjectWidget，如Text，它其实是继承自StatelessWidget，然后在"),d("code",[e._v("build()")]),e._v("方法中通过RichText来构建其子树，而RichText才是继承自MultiChildRenderObjectWidget。所以为了方便叙述，我们也可以直接说Text属于MultiChildRenderObjectWidget（其它widget也可以这么描述），这才是本质。读到这里我们也会发现，其实"),d("strong",[e._v("StatelessWidget和StatefulWidget就是两个用于组合Widget的基类，它们本身并不关联最终的渲染对象（RenderObjectWidget）")]),e._v("。")])]),e._v(" "),d("p",[e._v("布局类组件就是指直接或间接继承(包含)"),d("code",[e._v("MultiChildRenderObjectWidget")]),e._v("的Widget，它们一般都会有一个"),d("code",[e._v("children")]),e._v("属性用于接收子Widget。我们看一下继承关系 Widget > RenderObjectWidget > (Leaf/SingleChild/MultiChild)RenderObjectWidget 。")]),e._v(" "),d("p",[d("code",[e._v("RenderObjectWidget")]),e._v("类中定义了创建、更新"),d("code",[e._v("RenderObject")]),e._v("的方法，子类必须实现他们，关于"),d("code",[e._v("RenderObject")]),e._v("我们现在只需要知道它是最终布局、渲染UI界面的对象即可，也就是说，对于布局类组件来说，其布局算法都是通过对应的"),d("code",[e._v("RenderObject")]),e._v("对象来实现的，所以读者如果对接下来介绍的某个布局类组件的原理感兴趣，可以查看其对应的"),d("code",[e._v("RenderObject")]),e._v("的实现，比如"),d("code",[e._v("Stack")]),e._v("（层叠布局）对应的"),d("code",[e._v("RenderObject")]),e._v("对象就是"),d("code",[e._v("RenderStack")]),e._v("，而层叠布局的实现就在"),d("code",[e._v("RenderStack")]),e._v("中。")]),e._v(" "),d("p",[e._v("在本章中，为了让读者对布局类Widget有个快速的认识，所以我们并不会深入到"),d("code",[e._v("RenderObject")]),e._v("的细节中去。在学习本章时，读者的重点是掌握不同布局组件的布局特点，具体原理和细节等我们对Flutter整体入门后，感兴趣的话再去研究。")])])}),[],!1,null,null,null);t.default=v.exports}}]);
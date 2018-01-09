# 小程序源码还原示例

\Offical_Code 为官方小程序示例源码，在 https://mp.weixin.qq.com/debug/wxadoc/dev/demo.html 获取

\unpack_Code 为用解包工具解压后的文件

\analysis_Code 为还原wxml源码的示例

### \analysis_Code\z.js

该文件中的代码是复制\unpack_Code\page-frame.html中第1535行至第3319行，即：

    (function (z) {
		var a = 11;
		function Z(ops) {
			z.push(ops)
		}
        ...
    })(z);

### \analysis_Code\test.html

该文件中第8行至第69行的代码是复制\unpack_Code\page-frame.html中第3345行至第3406行(第3344行即为以下代码的所对应的wxml路径)，即：

    var m0 = function (e, s, r, gg) {
        ...
    }

要想获取其他wxml源码同理，在page-frame.html中找到对应路径下的代码（即var m0=...或var m1=...）

复制到test.html中，并加上 

    var object_raw=m0("",{},root,"");   //或者 m1("",{},root,"") ，取决于复制的代码
    console.log(object_raw);    //wxml对象
    console.log(ana(object_raw));   //将wxml对象解析后得到的wxml源码

# 小程序源码还原示例

\Offical_Code 为官方小程序示例源码，在 https://mp.weixin.qq.com/debug/wxadoc/dev/demo.html 获取

\unpack_Code 为用解包工具解压后的文件

\analysis_Code 为还原wxml源码的示例

### \analysis_Code\test.html

该文件为已经被替换好的page-frame.html

在chrome中打开test.html，在控制台（console）中输入：

        //解析单个wxml
        $gwx("...wxml地址...")();        //例如$gwx("./page/API/index.wxml")();

        //解析所有wxml
        $gwx("ana")()

即可获得源码

### 自行尝试

打开page-frame.html，将文件夹（wxmlana）下的ana.js引入

        <script src="ana.js"></script>

打开文件夹（wxmlana）下的analysis.js，按照对应的函数名称，替换page-frame.html中的函数

        //原page-frame.html中的名称：
        function _v(k) {...}        //第22行
        function _n(tag){...}       //第34行
        function $gwrt(should_pass_type_info){...}        //第103行
        function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname, o){...}       //第464行
        if (path && e_[path]) {...}       //第9102行

注释掉page-frame.html中的 nf_init() ：

        ...
        //nf_init();        //第1309行
        ...

在chrome中打开page-frame.html，在控制台（console）中输入：

        //解析单个wxml
        $gwx("...wxml地址...")();        //例如$gwx("./page/API/index.wxml")();

        //解析所有wxml
        $gwx("ana")()

即可获得源码
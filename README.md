# makiko-ts-plugin-template

> 使用`Typescript`开发卷娘拓展

通过 [java-ts-declaration-gen](https://github.com/ColdRain-Moro/java-ts-declaration-gen) 生成的d.ts类型声明获得IDE补全能力, 再附上java与js层之间的一层简单的兼容层, 通过`webpack`+`babel`将多模块ts项目打包为一个js文件。同时引入`core-js`尝试兼容`rhino`引擎尚未实现的ECMAScript语法。

> 注意，暂时不支持Promise，异步操作可以考虑调用java api

## Getting Start

开始前

> yarn

编译

> yarn build
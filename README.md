﻿# 前端进阶课程之单元测试
---

> * 为什么要学习单元测试以及使用场景？
> * node assert 以及常用断言库：should.js, expect.js , chai.js
> * mocha - 基于javascript的单元测试框架
> * karma - 自动化测试工具
> * travis.CL - 持续集成工具

### 1：为什么学习单元测试？

首先要说明：一直以来，单元测试在前端开发中好像并不会被重视，也不是前端开发项目所必须的，所以这也就导致很大一部分前端对于单元测试这块并没有很重视或者了解，随着前端开发越来越复杂，而且javascript本身是一个弱类型语言，要想及时发现隐藏的一些错误，单元测试就变得越来愈重要，那么这次就带大家看看，前端开发中的单元测试到底是个什么东东？
在我们没有运用单元测试之前，在项目中是怎么测试代码呢？不用说，大家也能想到console.log 还有debug模式，但是这种去测试代码，很显然效率太低，每次测试都需要我们手动去console.log所需要打印的东西，那么，随着前端开发越来越复杂，就涌现了一些专属于前端的测试框架，这样我们只需要在项目去集成这些框架就可以实现测试。
**那么具体单元测试可以时候使用呢？
业务代码不能使用单元测试，因为需求代码频繁变更，通常是写一些组件库或者工具类的代码可以使用单元测试，例如我们常使用的组件库，iview，它的每个组件肯定都有对应的测试用例。**

### 2:  node assert 断言的使用

这里，说明一下断言的作用：即通过这些断言我们可以判断代码的执行结果是否与我们期望的结果一致，如果一致，那么代码正常运行，如果不一致，则报错提示，这就是断言的作用，assert是node中的断言模块，除此之外，还有像should.js， expect.js ，chai.js等都是一些开源的断言库，让断言代码更加友好，便写。
参考文章：http://zhouqing86.github.io/2017/04/07/js-test5-assertions/

### 3:  mocha的使用
1: 我们直接使用断言去测试代码有什么问题呢？
如果我们同时测试多段代码，那么如果某段代码断言报错，那么之后的测试就无法进行，而且整个代码的测试都需要手动去运行js代码，如何能够自动化运行测试代码，而且不会阻塞呢？mocha就是一个很好的基于js的测试框架。
2: mocha的基本使用
>  第一步： 新建项目mocha-demo,  然后执行：cd mocha-demo , 进入目录， 执行 npm init 命令生成package.json文件。
>  第二步：npm install mocha --save-dev
>  第二步：新建test目录，然后我们所有的测试用例都放在该目录一下，执行mocha命令的时候，默认会执行test目录下的所有文件，进行测试
>  第四步：编写具体的测试用例，具体格式为：
说明：describe用来定义一个测试模块，一个模块里可以嵌套很多子模块，也可以包含多个测试用例，而it用来表示一个测试用例。

```
const assert = require('assert');
const sum = require('../js/sum');

describe('求和', () => {
    it('sum() should return 0', () => {
        assert.strictEqual(sum(), 0);
    })
    it('sum(1) should return 1', () => {
        assert.strictEqual(sum([1]), 1);
    });

    it('sum(1, 2) should return 3', () => {
        assert.strictEqual(sum([1, 2]), 3);
    });

    it('sum(1, 2, 3) should return 6', () => {
        assert.strictEqual(sum([1, 2, 3]), 6);
    });
});
```
### 4: karma 的出现

这是一个自动化测试工具，可以为我们的测试提供更好的服务，例如，代码修改后，自动进行测试，或者可以指定测试环境，是运行在哪个浏览器中等，所以karma的作用就是配合mocha为我们的测试提供一个更快捷友好的测试环境。

karma的基本使用：
> 第一步：新建项目karma-demo,  然后执行：cd karma-demo , 进入目录， 执行 npm init 命令生成package.json文件。
> 第二步： npm install karma --save-dev
> 第三步：执行karma init ,生成karma.conf.js，该文件配置了测试相关所需要的环境。
> 第四步：执行karma start命令，然后就会根据karma.conf.js里面的配置，测试相关文件（这里省略了具体的测试代码和用例，通常在test目录下）

### 5: travis.CL 持续集成工具

travis 是一个持续集成的服务，绑定了github指定的项目，然后只要git上代码有改动或者提交，那么travis都会自动拉去最新代码，然后重新运行，执行测试，自动部署（总结起来：自动构建，自动测试，自动部署）
常见问题：
1: 超过10分钟，自动报错，解决方法：设置singleRun为true
2: 在travis中没有chrome导致执行报错


### 6: 总结

通常已上介绍，大致已经了解了各个框架或者工具的作用，总结下来就是, 使用mocha测试框架，书写测试代码，代码中使用assert断言或者其他断言库去进行断言，然后在配合karma去更好的运行测试代码。最后，通过travis形成整个闭环，以后只要修改代码，然后本地自动测试，测试通过以后，提交到git上以后，travis自动拉取，重新进行运行测试构建，那么所有的流程走完以后，所以此时此刻git上的代码是比较稳定，同时测试的代码。

### 7: vue中单元测试实践

我们平时开发中，可能比较多的使用react和vue框架来实现项目，那么如何在这些框架中实现单元测试呢？
此处以vue为例，说明；
> 第一步：执行命令：mkdir vue-demo， 然后 cd vue-demo , 执行 vue init pwa 生成项目模版（前提是安装了vue-cli），这个过程就会让我们选择是否配置karma和mocha，我们选择yes. 然后npm install 所有依赖，最后npm run dev启动本地服务

第二步：安装完成以后，测试项目用例写在test目录下，执行npm run unit 既可以检测测试用例是否通过。


参考文档：https://yq.aliyun.com/articles/610101
参考文档：https://blog.csdn.net/violetjack0808/article/details/73740395

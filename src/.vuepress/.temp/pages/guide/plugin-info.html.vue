<template><div><h1 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件"><span>自定义插件</span></a></h1>
<p>开发者可以借助<RouteLink to="/guide/scanner-info.html">扫描器</RouteLink>组件，进行开发一系列插件提供主项目使用。</p>
<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2>
<p>开发者将开发结束的项目进行独立jar打包，提供给主项目使用即可。</p>
<p>而这个独立项目其实也是一个FasChar框架下的项目，只不过实现了部分功能。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>独立项目的jar包，不建议打包成 fat-jar 项目，如果需要引用第三方插件，在主项目配置引用即可。</p>
</div>
<h2 id="原则" tabindex="-1"><a class="header-anchor" href="#原则"><span>原则</span></a></h2>
<p>FastChar建议开发者在开发插件的原则是：代码中完成<code v-pre>直观可追溯</code>的配置，然后<code v-pre>直接使用</code>。</p>
<FlowChart id="flowchart-26" code="eJwrLrG1Ky5JLCqxUni6Z+rzKSue9U96snsbV6qtXWpeipXCk737EYL5BYa2dvkFqUWJJZn5eVYKL1t7n+9dB5XkKi7RKMpMzyjR1AWqMYSzU7kA1e8ukQ==" preset="vue"></FlowChart><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2>
<p><mark><strong>在项目打包成jar时，必须在 <code v-pre>META-INF/MANIFEST.MF</code> 中配置属性 <code v-pre>FastChar-Scanner:true</code></strong></mark></p>
<p>表示允许 <RouteLink to="/guide/scanner-info.html">扫描器</RouteLink>扫描此jar包。</p>
<p>完成配置后即可实现一个插件项目了。</p>
<h2 id="manifest-mf-配置属性介绍" tabindex="-1"><a class="header-anchor" href="#manifest-mf-配置属性介绍"><span>MANIFEST.MF 配置属性介绍</span></a></h2>
<ul>
<li>
<p>FastChar-Scanner</p>
<ul>
<li>表示允许 <RouteLink to="/guide/scanner-info.html">扫描器</RouteLink>扫描此jar包。</li>
<li>可选值：true、false</li>
</ul>
</li>
<li>
<p>FastChar-Extract</p>
<ul>
<li>表示是否解压jar包内除去.class文件的其他资源文件到本地项目的相对路径中</li>
<li>可选值：true、false</li>
</ul>
</li>
<li>
<p>FastChar-Exclude</p>
<ul>
<li>表示在解压时需要排除的文件或路径，支持通配符 ‘*’ 配置。</li>
<li>例如：/resources/*.bin</li>
</ul>
</li>
<li>
<p>FastChar-Plugin-Version</p>
<ul>
<li>表示当前插件的版本号，此版本与解压jar包内资源是否重复覆盖有关，当版本号不一致时，将解压覆盖，否则跳过解压。</li>
</ul>
</li>
</ul>
</div></template>



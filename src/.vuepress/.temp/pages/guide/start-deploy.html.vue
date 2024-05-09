<template><div><h1 id="本地运行服务器" tabindex="-1"><a class="header-anchor" href="#本地运行服务器"><span>本地运行服务器</span></a></h1>
<p>FastChar框架无特殊打包要求，所以开发者按照传统打包方式进行打包部署即可。</p>
<h2 id="打包war部署" tabindex="-1"><a class="header-anchor" href="#打包war部署"><span>打包war部署</span></a></h2>
<p>开发者可以将web项目打包成war包部署到tomcat中。以maven项目为例，在pom.xml加入插件即可，如下：</p>
<p>采用的是 <a href="https://maven.apache.org/plugins/maven-war-plugin/plugin-info.html" target="_blank" rel="noopener noreferrer">maven-war-plugin<ExternalLinkIcon/></a> 打包插件。</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--省略其他代码--></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">></span></span>war<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">></span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>finalName</span><span class="token punctuation">></span></span>test_project<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>finalName</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-war-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.4.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
                    <span class="token comment">&lt;!--没有web.xml文件时，允许继续打包--></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>failOnMissingWebXml</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>failOnMissingWebXml</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包fat-jar部署" tabindex="-1"><a class="header-anchor" href="#打包fat-jar部署"><span>打包fat-jar部署</span></a></h2>
<p>开发者可以将项目打包成单个jar包（fat-jar），然后运行这个jar即可启动项目。以maven项目为例，在pom.xml加入插件即可，如下：</p>
<p>采用的是 <a href="https://maven.apache.org/plugins/maven-assembly-plugin/plugin-info.html" target="_blank" rel="noopener noreferrer">maven-assembly-plugin<ExternalLinkIcon/></a> 打包插件</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--省略其他代码--></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">></span></span>jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>finalName</span><span class="token punctuation">></span></span>test_project<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>finalName</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-assembly-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.6.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>archive</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span><span class="token punctuation">></span></span>
                            <span class="token comment">&lt;!--指定jar包运行的主要类，必须包含main方法--></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mainClass</span><span class="token punctuation">></span></span>TestServer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mainClass</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>archive</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>descriptorRefs</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>descriptorRef</span><span class="token punctuation">></span></span>jar-with-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>descriptorRef</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>descriptorRefs</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>make-assembly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">></span></span>package<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">></span></span>single<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span>

</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包thin-jar部署" tabindex="-1"><a class="header-anchor" href="#打包thin-jar部署"><span>打包thin-jar部署</span></a></h2>
<p>顾名思义 打包“廋”jar包，将项目第三方引用包和项目运行包分离打包，这样可以做到下次更新项目运行包的时候不用重复打包引用的包，
减少打包时间。</p>
<p>以maven项目为例，在pom.xml加入插件即可，如下：</p>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>thin-jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pom.package</span><span class="token punctuation">></span></span>jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pom.package</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>finalName</span><span class="token punctuation">></span></span>${project.name}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>finalName</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-jar-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>archive</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>manifest</span><span class="token punctuation">></span></span>
                                <span class="token comment">&lt;!-- 指定入口函数 --></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mainClass</span><span class="token punctuation">></span></span>TestServer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mainClass</span><span class="token punctuation">></span></span>
                                <span class="token comment">&lt;!-- 是否要把第三方jar放到manifest的classpath中 注意：这个配置不是说把依赖打进配置中，只是说把这个工程需要哪些依赖说明下--></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>addClasspath</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>addClasspath</span><span class="token punctuation">></span></span>
                                <span class="token comment">&lt;!-- 去该目标下去找依赖的jar包 --></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>classpathPrefix</span><span class="token punctuation">></span></span>lib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>classpathPrefix</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>manifest</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>archive</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--单独打包项目引用的第三方jar包lib文件夹内--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>thin-jar-dependencies-lib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-dependency-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.6.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>copy-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">></span></span>package<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">></span></span>copy-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includeTypes</span><span class="token punctuation">></span></span>jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includeTypes</span><span class="token punctuation">></span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">></span></span>${project.build.directory}/lib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>outputDirectory</span><span class="token punctuation">></span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>此处配置使用了maven的 profiles 配置，所以在使用maven打包时，请勾选中相应的 Profiles</p>
</div>
<h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示"><span>演示</span></a></h2>
<h3 id="fatjar和war两种-打包maven项目" tabindex="-1"><a class="header-anchor" href="#fatjar和war两种-打包maven项目"><span>fatjar和war两种 打包maven项目</span></a></h3>
<p>war和fatjar两种打包方式，在maven项目中，都是在maven执行到 package 命令时开始打包，以 idea 开发环境为例，按照如下步骤即可：</p>
<ul>
<li>步骤一</li>
</ul>
<p><img src="/images/maven_package_1.png" alt="maven_package_1.png" loading="lazy"></p>
<ul>
<li>步骤二</li>
</ul>
<p><img src="/images/maven_package_2.png" alt="maven_package_1.png" loading="lazy"></p>
<h3 id="thinjar打包-打包maven项目" tabindex="-1"><a class="header-anchor" href="#thinjar打包-打包maven项目"><span>thinjar打包 打包maven项目</span></a></h3>
<p>由于介绍中使用了profiles配置，所以需要勾选对应操作如下：</p>
<p><img src="/images/maven_package_profiles.png" alt="maven_package_profiles.png" loading="lazy"></p>
<p>然后在重复 <RouteLink to="/guide/start-deploy.html#fatjar%E5%92%8Cwar%E4%B8%A4%E7%A7%8D-%E6%89%93%E5%8C%85maven%E9%A1%B9%E7%9B%AE">上述演示中的操作</RouteLink></p>
<h2 id="linux的jar包启动脚本构建" tabindex="-1"><a class="header-anchor" href="#linux的jar包启动脚本构建"><span>Linux的JAR包启动脚本构建</span></a></h2>
<h3 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步"><span>第一步</span></a></h3>
<p>在服务器任意位置新建 <code v-pre>server.sh</code> 文件。</p>
<h3 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步"><span>第二步</span></a></h3>
<p>将以下代码做部分修改后复制到 <code v-pre>server.sh</code> 文件中。</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>
<span class="token comment">#!/bin/bash</span>

<span class="token assign-left variable">SERVICE_NAME</span><span class="token operator">=</span><span class="token string">"test_project"</span> <span class="token comment">#替换成自己任意命名的服务名称</span>

<span class="token assign-left variable">JAR_PATH</span><span class="token operator">=</span><span class="token string">"/data/test.jar"</span> <span class="token comment">#替换成自己的jar包的绝对路径</span>


<span class="token comment"># 以下代码切勿修改</span>
<span class="token assign-left variable">PID_PATH</span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> $0<span class="token variable">)</span></span>/server.pid"</span>
<span class="token assign-left variable">OUT_PATH</span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> $0<span class="token variable">)</span></span>/server.out"</span>


<span class="token keyword">case</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token keyword">in</span>
    start<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"Starting <span class="token variable">$SERVICE_NAME</span> ..."</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$PID_PATH</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $PID_PATH<span class="token variable">)</span></span><span class="token punctuation">;</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$SERVICE_NAME</span> stopping ..."</span>
            <span class="token function">kill</span> <span class="token variable">$PID</span><span class="token punctuation">;</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$SERVICE_NAME</span> stopped ..."</span>
            <span class="token function">rm</span> <span class="token variable">$PID_PATH</span>
        <span class="token keyword">fi</span>
        <span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span> <span class="token variable">$JAR_PATH</span>  <span class="token variable">$2</span> <span class="token operator">>></span> <span class="token variable">$OUT_PATH</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span><span class="token operator">&amp;</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$!</span> <span class="token operator">></span> <span class="token variable">$PID_PATH</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$SERVICE_NAME</span> started ..."</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$PID_PATH</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $PID_PATH<span class="token variable">)</span></span><span class="token punctuation">;</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$SERVICE_NAME</span> stopping ..."</span>
            <span class="token function">kill</span> <span class="token variable">$PID</span><span class="token punctuation">;</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$SERVICE_NAME</span> stopped ..."</span>
            <span class="token function">rm</span> <span class="token variable">$PID_PATH</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$SERVICE_NAME</span> stopped ..."</span>
        <span class="token keyword">fi</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h3>
<p>启动或重启JAR包命令： <code v-pre>server.sh start</code>;</p>
<p>启动或重启JAR包并携带参数命令： <code v-pre>server.sh start deploy</code>;</p>
<p>停止JAR包命令： <code v-pre>server.sh stop</code>;</p>
</div></template>



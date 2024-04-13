<template><div><h1 id="内容加解密组件" tabindex="-1"><a class="header-anchor" href="#内容加解密组件"><span>内容加解密组件</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p>FastChar核心组件，内置了内容的加解密功能，包含MD5、AES、RSA。</p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>开发者可以直接通过静态方法  <code v-pre>FastChar.getSecurity()</code> 选择调用加密的方法。</p>
<h2 id="md5加密" tabindex="-1"><a class="header-anchor" href="#md5加密"><span>MD5加密</span></a></h2>
<p>方法 <code v-pre>FastChar.getSecurity().MD5_Encrypt(String value)</code> 如下：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">//MD5加密</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MD5_Encrypt</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aes加解密" tabindex="-1"><a class="header-anchor" href="#aes加解密"><span>AES加解密</span></a></h2>
<p>加密方法 <code v-pre>FastChar.getSecurity().AES_Encrypt(String password,String value)</code></p>
<p>解密方法 <code v-pre>FastChar.getSecurity().AES_Decrypt(String password,String value)</code></p>
<p>如下示例：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">//AES加密</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AES_Encrypt</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">,</span> <span class="token string">"内容"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
        <span class="token comment">//AES解密</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AES_Decrypt</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">,</span> <span class="token string">"RrtydXXqFXrC14OZ7RQLsw=="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rsa加解密" tabindex="-1"><a class="header-anchor" href="#rsa加解密"><span>RSA加解密</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">Java使用RSA关键参数说明</p>
<p>rsa加密的 <code v-pre>padding</code> 值 <code v-pre>RSA/NONE/PKCS1Padding</code></p>
</div>
<h3 id="公钥加密-私钥解密" tabindex="-1"><a class="header-anchor" href="#公钥加密-私钥解密"><span>公钥加密-私钥解密</span></a></h3>
<p>加密方法 <code v-pre>FastChar.getSecurity().RSA_Encrypt_PublicKey(String publicKey,String value)</code></p>
<p>解密方法：<code v-pre>FastChar.getSecurity().RSA_Decrypt_PrivateKey(String privateKey,String value)</code></p>
<p>如下示例：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//使用公钥 rsa_public_1024.pem 加密</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RSA_Encrypt_PublicKey</span><span class="token punctuation">(</span><span class="token class-name">FastFileUtils</span><span class="token punctuation">.</span><span class="token function">readFileToString</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"rsa_public_1024.pem"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"内容"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用私钥 rsa_private_pkcs8_1024.pem 解密</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RSA_Decrypt_PrivateKey</span><span class="token punctuation">(</span><span class="token class-name">FastFileUtils</span><span class="token punctuation">.</span><span class="token function">readFileToString</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"rsa_private_pkcs8_1024.pem"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"qpcuCKJ3vEDjGI+J4ho/t177tuyEFO3sM5v5lcsw5TYGpBSrdu8W9Gwsr9alPMqBux5Bk7fVTmQo\n"</span> <span class="token operator">+</span>
                <span class="token string">"F2XeaXtKwMGy/ck2GdqYFSPoXliX2LGOB+DDjLeaWNwNwPpnR4U8TUH2a3bnixgezrnVIjZ3G5hb\n"</span> <span class="token operator">+</span>
                <span class="token string">"EV5aokVTR/dxVEor0C0="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私钥加密-公钥解密" tabindex="-1"><a class="header-anchor" href="#私钥加密-公钥解密"><span>私钥加密-公钥解密</span></a></h3>
<p>加密方法 <code v-pre>FastChar.getSecurity().RSA_Encrypt_PrivateKey(String privateKey,String value)</code></p>
<p>解密方法：<code v-pre>FastChar.getSecurity().RSA_Decrypt_PublicKey(String publicKey,String value)</code></p>
<p>如下示例：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        
        <span class="token comment">//使用私钥 rsa_private_pkcs8_1024.pem 加密</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RSA_Encrypt_PrivateKey</span><span class="token punctuation">(</span><span class="token class-name">FastFileUtils</span><span class="token punctuation">.</span><span class="token function">readFileToString</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"rsa_private_pkcs8_1024.pem"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"内容"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//使用公钥 rsa_public_1024.pem 解密</span>
        <span class="token class-name">FastChar</span><span class="token punctuation">.</span><span class="token function">getSecurity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RSA_Decrypt_PublicKey</span><span class="token punctuation">(</span><span class="token class-name">FastFileUtils</span><span class="token punctuation">.</span><span class="token function">readFileToString</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"rsa_public_1024.pem"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"qpcuCKJ3vEDjGI+J4ho/t177tuyEFO3sM5v5lcsw5TYGpBSrdu8W9Gwsr9alPMqBux5Bk7fVTmQo\n"</span> <span class="token operator">+</span>
                <span class="token string">"F2XeaXtKwMGy/ck2GdqYFSPoXliX2LGOB+DDjLeaWNwNwPpnR4U8TUH2a3bnixgezrnVIjZ3G5hb\n"</span> <span class="token operator">+</span>
                <span class="token string">"EV5aokVTR/dxVEor0C0="</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上述示例中的公钥与私钥" tabindex="-1"><a class="header-anchor" href="#上述示例中的公钥与私钥"><span>上述示例中的公钥与私钥</span></a></h3>
<CodeTabs id="72" :data='[{"id":"rsa_public_1024.pem"},{"id":"rsa_private_pkcs8_1024.pem"}]'>
<template #title0="{ value, isActive }">rsa_public_1024.pem</template>
<template #title1="{ value, isActive }">rsa_private_pkcs8_1024.pem</template>
<template #tab0="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyGgxpYR0aNkKRw9xvNrgdFbWp
DkmP3+TXcVyipU+IjWnxjDAh8cXcR1+mNT9a8k0rJbDgDUpfr6jNMqelIadKCqxK
TDdvIwyg/BR39+KORNwb86GLNXa4GBAhB4v2HMFmaVAdQSBFy4/mIzIlNYk4DLnX
cXNJUDWwetzk4dcWTwIDAQAB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALIaDGlhHRo2QpHD
3G82uB0VtakOSY/f5NdxXKKlT4iNafGMMCHxxdxHX6Y1P1ryTSslsOANSl+vqM0y
p6Uhp0oKrEpMN28jDKD8FHf34o5E3BvzoYs1drgYECEHi/YcwWZpUB1BIEXLj+Yj
MiU1iTgMuddxc0lQNbB63OTh1xZPAgMBAAECgYEApNDGO57LN76OzCXckG6q4v98
JP47xREEzPrzJvCkMVHsgMOip0b+O2MxeLY98wPXtd4jWLPz56i/JWWDDqWeELMQ
L636a18zwp0iU2/8/d3cG0Mumecfl3HCbmzLJj2J6UKty3JisFVLa4IKDKye4T6+
I8OX6rgbv2qn+bJKjcECQQDhs4ve9H9UziwrZAwSYbiex6swv2XmE359ki42URPX
N3yDaNZAFZyAo7NvKu6jJtIgcqhHORRmEdVUrvMx5O39AkEAygKxq4WfxGMfEqb2
vkvLCIp1BOSoLFRWzsIGeVLYx51nOlQ5Do6VeHXv2iEnJSlfNomypxaWgX9e/RXq
jXNBOwJAE1ETkoRodXCj1R7d7aDRdT1viF+JMBTRCZw+OkXcJdpI3NJXK+rtlxDr
pYMOI4aKC17kyhu3hDjYgkPq6oVGXQJAYop34sSXD/SONsoNePx9+ReZR57GzoEB
q3AIOmyIZK9KqLBm+Mvi69UUAGLFtqH82RzIcitZlaftTSXAuelr+wJBAKv+WRag
9JN5JjNiE5vo27RaQ/raS2qlW0/3dxCM02Sgk4H9U72dOULDCHC8/ij47prIN7Zs
zyP55j7fPQrPnZs=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>



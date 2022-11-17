import{_ as i,c as a,a0 as n,o as l}from"./chunks/framework.D9MR4Zbk.js";const g=JSON.parse('{"title":"mihomo","description":"","frontmatter":{},"headers":[],"relativePath":"blog/network/mihomo.md","filePath":"blog/network/mihomo.md"}'),h={name:"blog/network/mihomo.md"};function p(k,s,t,e,E,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="mihomo" tabindex="-1">mihomo <a class="header-anchor" href="#mihomo" aria-label="Permalink to &quot;mihomo&quot;">​</a></h1><h2 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to &quot;是什么&quot;">​</a></h2><p><a href="https://github.com/MetaCubeX/mihomo/tree/Meta" target="_blank" rel="noreferrer">mihomo</a> 是一款正向代理工具，通常用于代理访问特殊网络（如国内访问国外等）。</p><h2 id="为什么" tabindex="-1">为什么 <a class="header-anchor" href="#为什么" aria-label="Permalink to &quot;为什么&quot;">​</a></h2><ul><li>mihomo 集成了 Clash，采用相似的配置便于理解。</li><li>支持各种新协议 Hysteria2, Trojan, TUIC 等。</li></ul><h2 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h2><ol><li>准备 mihomo 工作目录，下方所有文件都放入此目录</li><li>下载 mihomo 二进制 <a href="https://github.com/MetaCubeX/mihomo/releases" target="_blank" rel="noreferrer">Releases</a>，选择对应的版本，解压</li><li>准备 ip 数据库 geoip.metadb <a href="https://github.com/MetaCubeX/meta-rules-dat" target="_blank" rel="noreferrer">MetaCubeX/meta-rules-dat</a></li><li>准备配置文件 config.yaml，从代理提供商订阅链接或其他方式获取</li><li>管理员模式启动终端（tun 模式必须），进入工作目录，运行 <code>.\\mihomo.exe -d .</code> 启动</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>geoip.metadb 通过 mihomo 自行下载可能无法下载（未通过代理），可提前下载，存放在工作目录</li><li>工作目录中，如果存在多份配置，调用非 config.yaml 时，可用 <code>.\\mihomo.exe -d . -f xxx.yaml</code></li></ul></div><h2 id="配置参考-config-yaml" tabindex="-1">配置参考 config.yaml <a class="header-anchor" href="#配置参考-config-yaml" aria-label="Permalink to &quot;配置参考 config.yaml&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">使用</p><ol><li>下方✅表示的内容必须补充</li><li>其他内容可选择性修改，参考 <a href="https://github.com/MetaCubeX/mihomo/blob/Alpha/docs/config.yaml" target="_blank" rel="noreferrer">config.yaml|官方</a></li></ol></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rule</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">log-level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">info</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">mixed-port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7890</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">allow-lan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bind-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">external-controller</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1:7880&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tcp-concurrent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调整 keep-alive 配置，实现移动端减少电量消耗的效果</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">disable-keep-alive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keep-alive-interval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keep-alive-idle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ua</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">global-ua</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">clash.meta</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ipv6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  listen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0.0.0.0:53</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  use-hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 用于解析 nameserver，fallback 以及其他 DNS 服务器配置的，DNS 服务域名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 只能使用纯 IP 地址，可使用加密 DNS</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  default-nameserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://1.12.12.12/dns-query</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # dnspod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://120.53.53.53/dns-query</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # dnspod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">119.29.29.29</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # dnspod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">119.28.28.28</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # dnspod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180.184.1.1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 字节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180.184.2.2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 字节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101.226.4.6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 360</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">218.30.118.6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 360</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180.76.76.76</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 百度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # DNS 解析，影响所有直连</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  nameserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://doh.pub/dns-query</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">119.29.29.29</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # dnspod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">119.28.28.28</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # dnspod</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180.184.1.1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 字节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180.184.2.2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 字节</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101.226.4.6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 360</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">218.30.118.6</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 360</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180.76.76.76</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 百度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # DNS 解析，单独配置查询域名使用的 DNS 服务器</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  nameserver-policy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # fakeip</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enhanced-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fake-ip</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  fake-ip-range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">198.18.0.1/16</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认 false mmdb，true dat</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">geodata-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">geodata-loader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">stardard</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">geo-auto-update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">geo-update-interval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 小时</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">geox-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  mmdb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.metadb&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">system</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  dns-hijack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">0.0.0.0:53</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IP-CIDR,127.0.0.0/8,DIRECT,no-resolve</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DOMAIN-SUFFIX,telemetry.mozilla.org,断连</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DOMAIN-SUFFIX,msecnd.net,国内</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DOMAIN-SUFFIX,microsoft.com,国内</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DOMAIN-SUFFIX,msftconnecttest.com,国内</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">GEOIP,CN,国内</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MATCH,国外</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">proxy-groups</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">国内</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">select</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    proxies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">DIRECT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">国外</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">load-balance</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    proxies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ✅</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">断连</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">select</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    proxies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">REJECT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">proxies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ✅</span></span></code></pre></div><h2 id="双击启动-停止-适合非-tun-模式" tabindex="-1">双击启动/停止（适合非 tun 模式） <a class="header-anchor" href="#双击启动-停止-适合非-tun-模式" aria-label="Permalink to &quot;双击启动/停止（适合非 tun 模式）&quot;">​</a></h2><p>通过 vbs 间接启动 mihomo，减少输入命令的操作。适用于 Windows。tun 模式需要改成管理员模式运行（让 GPT 转换下脚本）</p><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39; 保存为 mihomo-start.vbs，双击启动代理服务</span></span>
<span class="line"><span>&#39; 注意修改命令中 mihomo 和 config.yaml 路径</span></span>
<span class="line"><span>&#39; 正在运行的服务可以在 任务管理器 -&gt; 详细信息 中查看</span></span>
<span class="line"><span>Dim WShell</span></span>
<span class="line"><span>Set WShell = CreateObject(&quot;WScript.Shell&quot;)</span></span>
<span class="line"><span>WShell.Run &quot;/path/to/mihomo.exe -f /path/to/config.yaml&quot;, 0</span></span>
<span class="line"><span>Set WShell = Nothing</span></span></code></pre></div><div class="language-vbs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vbs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&#39; 保存为 mihomo-stop.vbs，双击结束 代理服务</span></span>
<span class="line"><span>Dim WShell</span></span>
<span class="line"><span>Set WShell = CreateObject(&quot;WScript.Shell&quot;)</span></span>
<span class="line"><span>WShell.Run &quot;powershell -Command &quot;&quot;Get-Process -Name mihomo | stop-Process&quot;&quot;&quot;, 0</span></span>
<span class="line"><span>Set WShell = Nothing</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="○-请求订阅链接-获取得到的配置中节点列表不完整" tabindex="-1">○ 请求订阅链接，获取得到的配置中节点列表不完整 <a class="header-anchor" href="#○-请求订阅链接-获取得到的配置中节点列表不完整" aria-label="Permalink to &quot;○ 请求订阅链接，获取得到的配置中节点列表不完整&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 参考 clash-verge-dev 仓库源码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 订阅链接服务器会根据请求头字段（user-agent）来响应适合对应平台工具（clash/sing-box）的配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">subscriptionURL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Headers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user-agent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;clash-verge/unknown&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Authorization&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Bearer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(console.log);</span></span></code></pre></div>`,18)]))}const y=i(h,[["render",p]]);export{g as __pageData,y as default};

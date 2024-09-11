+++
title = 'Test Page'
date = 2024-09-01T11:00:43+01:00
draft = true
+++

Introduction paragraph

## Markdown

This is **bold** text, and this is *emphasized* text.

## Buttons

Color variants:

<div>
    <button class="solid primary">Primary</button>
    <button class="solid neutral">Neutral</button>
    <button class="solid danger">Danger</button>
    <button class="solid success">Success</button>
    <button class="solid warning">Warning</button>
</div>

Types:

<div>
    <button class="solid">Primary</button>
    <button class="outlined">Outlined</button>
    <button class="soft">Soft</button>
    <button class="plain">Plain</button>
</div>

Disabled:
<div>
    <button class="solid" disabled>Primary</button>
    <button class="outlined" disabled>Outlined</button>
    <button class="soft" disabled>Soft</button>
    <button class="plain" disabled>Plain</button>
</div>

Icons:

<div>
    <button class="solid"><span class="material-symbols-rounded">star</span>Left icon</button>
    <button class="solid"><span>Right icon</span><span class="material-symbols-rounded">star</span></button>
    <button class="solid icon-button"><span class="material-symbols-rounded">star</span></button>
</div>

Sizes:

<div>
    <button class="solid small"><span class="material-symbols-rounded">star</span>Small</button>
    <button class="solid"><span class="material-symbols-rounded">star</span>Regular</button>
    <button class="solid large"><span class="material-symbols-rounded">star</span>Large</button>
</div>

## Checkboxes

Color Variants:

<label class="checkbox-label">
    <input type="checkbox" class="solid primary">
    Primary
</label>
<label class="checkbox-label">
    <input type="checkbox" class="solid neutral">
    Neutral
</label>
<label class="checkbox-label">
    <input type="checkbox" class="solid danger">
    Danger
</label>
<label class="checkbox-label">
    <input type="checkbox" class="solid success">
    Success
</label>
<label class="checkbox-label">
    <input type="checkbox" class="solid warning">
    Warning
</label>

Types:

<label class="checkbox-label">
    <input type="checkbox" class="solid primary">
    Solid
</label>
<label class="checkbox-label">
    <input type="checkbox" class="outlined primary">
    Outlined
</label>
<label class="checkbox-label">
    <input type="checkbox" class="soft primary">
    Soft
</label>
<label class="checkbox-label">
    <input type="checkbox" class="plain primary">
    Plain
</label>

Disabled:

<label class="checkbox-label">
    <input type="checkbox" class="solid primary" disabled>
    Solid
</label>
<label class="checkbox-label">
    <input type="checkbox" class="outlined primary" disabled>
    Outlined
</label>
<label class="checkbox-label">
    <input type="checkbox" class="soft primary" disabled>
    Soft
</label>
<label class="checkbox-label">
    <input type="checkbox" class="plain primary" disabled>
    Plain
</label>

## Images

{{< figure src="dog.jpg" alt="Cute dog" caption="A cute dog lying in a field." >}}

## Table

| Column 1 | Column 2 | Column 3 | Column 4 | Center Align | Right Align |
| -------- | -------- | -------- | -------- | :----------: | ----------: |
| Row 1    | Val 1    | Val 2    | Val 3    | Val 4        | Val 5       |
| Row 2    | Val 1    | Val 2    | Val 3    | Val 4        | Val 5       |
| Row 3    | Val 1    | Val 2    | Val 3    | Val 4        | Val 5       |

## Math

Some block math:

\[
\begin{aligned}
KL(\hat{y} || y) &= \sum_{c=1}^{M}\hat{y}_c \log{\frac{\hat{y}_c}{y_c}}
\end{aligned}
\]

This is some inline math \( a^2+b^2=c^2 \)

## Notices

{{< notice info >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius dictum sapien sit amet bibendum. Mauris quis dignissim nunc. Curabitur ullamcorper auctor laoreet. Sed scelerisque leo mi. Ut dignissim ligula vestibulum metus eleifend eleifend. Etiam egestas libero orci, quis tristique diam commodo vitae. Suspendisse volutpat tincidunt erat, suscipit faucibus elit pharetra non.
{{< /notice >}}

{{< notice warning >}}
Nulla lobortis metus nec aliquet dapibus. Nullam et facilisis felis. Vestibulum libero magna, cursus vitae tellus at, tincidunt dignissim ligula. Donec commodo justo id volutpat varius. Sed maximus, sapien ut interdum dignissim, neque ex maximus mauris, sed hendrerit neque turpis a leo. Donec volutpat semper felis in ullamcorper. Integer sodales pretium efficitur. Aliquam erat volutpat. Sed et velit imperdiet, lobortis ipsum ut, sollicitudin elit. Aliquam vel ipsum convallis, consequat nibh et, gravida elit. Proin maximus enim nisl, ac fringilla justo varius non.
{{< /notice >}}

{{< notice danger >}}
Proin aliquam accumsan nisi in aliquet. Morbi at lacus ut est tristique tincidunt eget vitae lacus. In eget leo quis dolor imperdiet tristique non et ligula. Sed dignissim libero dui, at luctus lectus ultrices sit amet. Suspendisse rhoncus in neque sit amet egestas. In iaculis tristique ipsum at volutpat. Curabitur accumsan tellus efficitur congue viverra. Curabitur luctus congue placerat. Vivamus et sodales quam. Phasellus eget elementum elit, quis semper metus. Integer aliquam mi odio, a semper elit tristique eu. Ut vel consequat felis, eu rutrum arcu. Donec et ex consectetur, sagittis turpis sit amet, aliquet ex. Nullam eu diam erat. Sed non tellus nec arcu semper tincidunt et at odio. Aliquam a mi venenatis dui maximus lacinia.
{{< /notice >}}

{{< notice tip >}}
Morbi arcu lacus, imperdiet id sollicitudin ut, commodo quis urna. Quisque ullamcorper arcu eu volutpat porttitor. Nulla vel tellus ac nunc pellentesque vestibulum. Maecenas at quam aliquet, sodales mi id, sagittis nulla. Ut tempor felis massa. Quisque volutpat pulvinar congue. Proin ex sapien, placerat vel neque ut, euismod gravida lectus. Nullam vel tortor eget odio luctus facilisis porttitor viverra lorem. Aenean placerat tincidunt justo vitae feugiat. Phasellus ac justo nibh.
{{< /notice >}}

## Code

Some inline code {{< inline cpp >}}std::string s = "Hello world"{{< /inline >}}.

Some block code:
{{< tabs >}}
{{% tab name="html" %}}
```html
<head><script src="/livereload.js?mindelay=10&amp;v=2&amp;port=1313&amp;path=livereload" data-no-instant defer></script>
<!DOCTYPE html>
<html>
        <meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>Test Page · Thomas Beacock</title>

<link rel="icon" type="image/x-icon" href="/images/favicon/light.ico" media="(prefers-color-scheme: light)">
<link rel="icon" type="image/x-icon" href="/images/favicon/dark.ico" media="(prefers-color-scheme: dark)">

<link rel="stylesheet" href="/css/style.min.615bd108df87e3fc560da9563894475de2b885329a949604340d134300c55ccb.css" integrity="sha256-YVvRCN&#43;H4/xWDalWOJRHXeK4hTKalJYENA0TQwDFXMs=" crossorigin="anonymous">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0">
<script>
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "default-dark" : "default-light";

    const noTransitionStyle = document.createElement("style");
    noTransitionStyle.appendChild(document.createTextNode(
        `* {
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -o-transition: none !important;
            -ms-transition: none !important;
            transition: none !important;
        }`));
        
    function transitionTheme(theme) {
        document.head.appendChild(noTransitionStyle);
        document.documentElement.dataset.theme = theme;
        window.getComputedStyle(noTransitionStyle).opacity;
        document.head.removeChild(noTransitionStyle);
    }

    function setTheme(theme) {
        if(theme === "system") {
            transitionTheme(systemTheme);
            document.documentElement.classList.remove("no-transition");
            localStorage.clear("theme");
        } else {
            transitionTheme(theme);
            localStorage.setItem("theme", theme);
        }
    }

    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme != null ? storedTheme : "system";
    setTheme(initialTheme);
</script>
    </head>
    <body>
        <header>
            <nav>
    <h1><a href="/">Thomas Beacock</a></h1>
    <ul>
        
            <li><a href="/blog/">Blog</a></li>
        
            <li><a href="/test-section/">Test Section</a></li>
        
    </ul>
    <div class="right-aligned">
        <button class="solid">
            Test button
        </button>
        <button class="outlined">
            <span class="material-symbols-rounded start-decorator">add</span>Test button
        </button>
        <button id="theme-toggle" class="plain neutral icon-button">
            <span class="material-symbols-rounded">dark_mode</span>
        </button>
    </div>
    <script>
        function onThemeToggleClick(event) {
            const themeToggle = event.currentTarget;
            if(document.documentElement.dataset.theme == "default-light") {
                setTheme("default-dark");
                themeToggle.getElementsByTagName("span")[0].innerHTML = "light_mode";
            } else {
                setTheme("default-light");
                themeToggle.getElementsByTagName("span")[0].innerHTML = "dark_mode";
            }
        }

        const themeToggle = document.getElementById("theme-toggle");
        const icon = document.documentElement.dataset.theme == "default-light" ? "dark_mode" : "light_mode";
        themeToggle.getElementsByTagName("span")[0].innerHTML = icon;
        themeToggle.addEventListener("click", onThemeToggleClick);
    </script>
</nav>
        </header>
        <main>
            
<div class="flex row">
    <aside class="sidebar">
        <p>Test Section</p>
        <ul>
        
            <li><a href="/test-section/test-page/">Test Page</a></li>
        
        </ul>
    </aside>
    <article class="grow">
        <h1>Test Page</h1>
        <p>Sep 1, 2024</p>
        <p>Introduction paragraph</p>
<h2 id="test-page-content">Test Page Content</h2>
<p>This is <strong>bold</strong> text, and this is <em>emphasized</em> text.</p>
<h2 id="another-heading">Another Heading</h2>
<h3 id="subheading">Subheading</h3>
<p>Some more content</p>
<h3 id="2nd-subheading">2nd Subheading</h3>
<p>Additional content</p>
<p>Some test code:</p>
<div class="highlight"><pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4;"><code class="language-html" data-lang="html"><span style="display:flex;"><span><span style="color:#75715e">&lt;!DOCTYPE html&gt;</span>
</span></span><span style="display:flex;"><span>&lt;<span style="color:#f92672">html</span>&gt;
</span></span><span style="display:flex;"><span>    &lt;<span style="color:#f92672">head</span>&gt;
</span></span><span style="display:flex;"><span>        
</span></span><span style="display:flex;"><span>    &lt;/<span style="color:#f92672">head</span>&gt;
</span></span><span style="display:flex;"><span>    &lt;<span style="color:#f92672">body</span>&gt;
</span></span><span style="display:flex;"><span>        
</span></span><span style="display:flex;"><span>    &lt;/<span style="color:#f92672">body</span>&gt;
</span></span><span style="display:flex;"><span>&lt;/<span style="color:#f92672">html</span>&gt;
</span></span></code></pre></div>
    </article>
    <aside class="sidebar">
        <p>On this page</p>
        <nav id="TableOfContents">
  <ul>
    <li><a href="#test-page-content">Test Page Content</a></li>
    <li><a href="#another-heading">Another Heading</a>
      <ul>
        <li><a href="#subheading">Subheading</a></li>
        <li><a href="#2nd-subheading">2nd Subheading</a></li>
      </ul>
    </li>
  </ul>
</nav>
    </aside>
</div>

        </main>
        <footer>
            <p>Copyright 2024. All rights reserved.</p>
        </footer>
    </body>
</html>
```
{{% /tab %}}
{{% tab name="json" %}}
```json
{
    "example": "json",
    "value": 10,
    "array": [1, 2, 3, 4]
}
```
{{% /tab %}}
{{< /tabs >}}
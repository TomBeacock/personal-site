const comboboxes = document.getElementsByClassName("combobox");
for(const combobox of comboboxes) {
    const button = combobox.getElementsByTagName("button")[0];
    const label = button.getElementsByClassName("label")[0];
    const dropdown = combobox.getElementsByClassName("dropdown")[0];
    const options = dropdown.getElementsByTagName("li");
    button.addEventListener("click", () => {
        dropdown.classList.toggle("open");
    });
    for(let i = 0; i < options.length; i++) {
        const option = options[i];
        if(option.classList.contains("selected")) {
            label.innerText = option.innerText;
        }
        option.addEventListener("click", () => {
            label.innerText = option.innerText;
            for(const option of options) {
                option.classList.remove("selected");
            }
            option.classList.add("selected");
            dropdown.classList.remove("open");
            combobox.dispatchEvent(new CustomEvent("change", { 
                detail: {
                    index: i,
                    value: label.innerText
                }
            }));
        });
    }
}

const tabPanels = document.getElementsByClassName("tab-panel");
for(const tabPanel of tabPanels) {
    const tabs = tabPanel.getElementsByClassName("tab-button");
    const tabsContent = tabPanel.getElementsByClassName("tab-content");
    for(let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        const tabContent = tabsContent[i];
        tab.addEventListener("click", () => {
            if(tab.classList.contains("active")) {
                return;
            }
            const activeElements = [...tabPanel.querySelectorAll(".active")];
            for(const activeElement of activeElements) {
                activeElement.classList.remove("active");
            }
            tab.classList.add("active");
            tabContent.classList.add("active");
        });
    }
}

const accordions = document.getElementsByClassName("accordion");
for(const accordion of accordions) {
    const toggles = accordion.getElementsByClassName("toggle");
    for(const toggle of toggles) {
        toggle.addEventListener("click", () => { toggle.classList.toggle("open"); })
    }
}

const codeBlocks = document.getElementsByClassName("highlight");
for(const codeBlock of codeBlocks) {
    const codeElements = codeBlock.getElementsByTagName("code");
    if(codeElements.length != 2) {
        continue;
    }
    const codeElement = codeElements[1];

    // Create copy icon
    const icon = document.createElement("span");
    icon.className = "material-symbols-rounded start-decorator";
    icon.innerText = "content_copy";

    // Create copy icon button
    const button = document.createElement("button");
    button.className = "soft neutral level1 small code-copy-button";
    button.innerText = "copy"
    button.prepend(icon);
    button.addEventListener("click", () => {
        navigator.clipboard.writeText(codeElement.innerText);
    });

    codeBlock.appendChild(button);
}
const pageCardContainer = document.getElementById("page-card-container");
const pageCards = pageCardContainer.getElementsByClassName("card");

const languageCheckboxes = document.getElementById("language-filter").getElementsByTagName("input");
const fieldCheckboxes = document.getElementById("field-filter").getElementsByTagName("input");

const languageClearButton = document.getElementById("language-filter").querySelector(".filter-group-header button");
languageClearButton.style.visibility = "hidden";

const fieldClearButton = document.getElementById("field-filter").querySelector(".filter-group-header button");
fieldClearButton.style.visibility = "hidden";

function onFilterChange() {
    const languages = new Set();
    for(const launguageCheckbox of languageCheckboxes) {
        if(launguageCheckbox.checked) {
            languages.add(launguageCheckbox.parentElement.innerText);
        }
    }
    languageClearButton.style.visibility = languages.size > 0 ? "" : "hidden";

    const fields = new Set();
    for(const fieldCheckbox of fieldCheckboxes) {
        if(fieldCheckbox.checked) {
            fields.add(fieldCheckbox.parentElement.innerText);
        }
    }
    fieldClearButton.style.visibility = fields.size > 0 ? "" : "hidden";

    for(const pageCard of pageCards) {
        const pageLanguages = new Set(JSON.parse(pageCard.dataset.languages));
        const matchesLanguageFilter = languages.size == 0 || languages.intersection(pageLanguages).size > 0;

        const pageFields = new Set(JSON.parse(pageCard.dataset.fields));
        const matchesFieldFilter = fields.size == 0 || fields.intersection(pageFields).size > 0; 

        const matchesFilter = matchesLanguageFilter && matchesFieldFilter;
        pageCard.style.display = matchesFilter ? "" : "none";
    }
}

for(const launguageCheckbox of languageCheckboxes) {
    launguageCheckbox.addEventListener("click", onFilterChange);
}

for(const fieldCheckbox of fieldCheckboxes) {
    fieldCheckbox.addEventListener("click", onFilterChange);
}

function onFilterCleared(filterCheckboxes) {
    console.log("Clear");
    for(const filterCheckbox of filterCheckboxes) {
        filterCheckbox.checked = false;
    }
    onFilterChange();
}

languageClearButton.addEventListener("click", () => onFilterCleared(languageCheckboxes));
fieldClearButton.addEventListener("click", () => onFilterCleared(fieldCheckboxes));

const pageCardsSortCombobox = document.getElementById("page-cards-sort-combobox");

function sortPageCards(compare) {
    Array.from(pageCards).sort(compare).forEach(child => pageCardContainer.appendChild(child));
}

function lastmodDesc(a, b) {
    if (a.dataset.lastmod < b.dataset.lastmod)
        return 1;
    if (a.dataset.lastmod > b.dataset.lastmod)
        return -1;
    return 0;
}

function lastmodAsc(a, b) {
    if (a.dataset.lastmod > b.dataset.lastmod)
        return 1;
    if (a.dataset.lastmod < b.dataset.lastmod)
        return -1;
    return 0;
}

function titleDesc(a, b) {
    if (a.dataset.title < b.dataset.title)
        return 1;
    if (a.dataset.title > b.dataset.title)
        return -1;
    return 0;
}

function titleAsc(a, b) {
    if (a.dataset.title > b.dataset.title)
        return 1;
    if (a.dataset.title < b.dataset.title)
        return -1;
    return 0;
}

pageCardsSortCombobox.addEventListener("change", (event) => {
    switch(event.detail.index) {
        case 0: sortPageCards(lastmodDesc); break;
        case 1: sortPageCards(lastmodAsc); break;
        case 2: sortPageCards(titleAsc); break;
        case 3: sortPageCards(titleDesc); break;
    }
});
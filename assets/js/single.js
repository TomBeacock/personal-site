class TocScroller {
    static init() {
        this.tocs = document.getElementsByClassName("toc");
        if(this.tocs) {
            const tocItems = this.tocs[0].getElementsByTagName("li");
            this.headers = [];
            for(const tocItem of tocItems) {
                const link = tocItem.getElementsByTagName("a")[0];
                const header = document.getElementById(link.href.split('#')[1]);
                this.headers.push(header);
            }
        }
        this.updating = false;
        window.addEventListener("scroll", this.onScroll.bind(this));
    }

    static onScroll() {
        if(!this.updating) {
            requestAnimationFrame(this.update.bind(this));
            this.updating = true;
        }
    }

    static update() {
        let activeIndex = this.headers.findIndex((header) => {
            return header.getBoundingClientRect().top > 100;
        });
        if(activeIndex == -1) {
            activeIndex = this.headers.length - 1;
        } else if(activeIndex > 0) {
            activeIndex--;
        }
        for(const toc of this.tocs) {
            const tocItems = toc.getElementsByTagName("li");
            for(const tocItem of tocItems) {
                tocItem.classList.remove("selected");
            }
            tocItems[activeIndex].classList.add("selected");
        }
        this.updating = false;
    }
}

TocScroller.init();
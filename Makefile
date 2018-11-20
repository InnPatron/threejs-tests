HTML_PAGE = page.html
BUNDLED = bundle.js

OUTDIR = output
JS_OUTDIR = $(OUTDIR)/js
PAGE_PATH = $(OUTDIR)/$(HTML_PAGE)

BROWSER = firefox

MAIN = ./js/main.js

run: build
	$(BROWSER) $(PAGE_PATH)

build: setup
	browserify $(MAIN) -o $(JS_OUTDIR)/$(BUNDLED)

setup:
	mkdir -p $(OUTDIR)
	cp $(HTML_PAGE) $(OUTDIR)/$(HTMLPAGE)

.PHONY: clean
clean: 
	rm -r $(OUTDIR)

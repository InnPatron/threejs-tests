HTML_PAGE = page.html
BUNDLED = bundle.js

OUTDIR = output
IMAGE_OUTDIR = $(OUTDIR)/image
JS_OUTDIR = $(OUTDIR)/js
PAGE_PATH = $(OUTDIR)/$(HTML_PAGE)

SERVER = http://localhost:$(PORT)
PORT = 8080

BROWSER = firefox

MAIN = ./js/main.js

run: build
	$(BROWSER) $(SERVER)/$(HTML_PAGE)
	
.PHONY: server
server:
	http-server $(OUTDIR) &


build: setup
	browserify $(MAIN) -o $(JS_OUTDIR)/$(BUNDLED)

setup:
	mkdir -p $(OUTDIR)
	cp $(HTML_PAGE) $(OUTDIR)/$(HTMLPAGE)
	cp -r ./image $(IMAGE_OUTDIR)

.PHONY: clean
clean: 
	rm -r $(OUTDIR)

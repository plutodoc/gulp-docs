.POSIX:
SHELL := /bin/bash
YARN  := $(shell which yarn)

build: fmt
	$(YARN) run build
dev:
	$(YARN) run dev
fmt:
	$(YARN) run fmt
install:
	$(YARN) install
### Git ###
log:
	git log --color --graph --pretty=oneline --abbrev-commit
pull:
	git pull origin master:master
push: pull
	git push origin dev:dev

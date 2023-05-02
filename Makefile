container_name := douze_github_pages

create:
	docker run --name $(container_name) --volume="${PWD}:/srv/jekyll" -p 3000:4000 -it jekyll/jekyll:pages /bin/bash
# Missing dependencies : make, gcc, musl-dev, g++

start:
	docker start $(container_name)

connect:
	docker exec -it $(container_name) /bin/bash

serve:
	bundle exec jekyll serve --watch --drafts --host 0.0.0.0


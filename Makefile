GIT := git

update_submodules:
	${GIT} submodule init && ${GIT} submodule update

#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# publi.sh
# change the branch names appropriately
# git checkout develop

git config --global user.email "andrei_varabyeu@gmail.com";
git config --global user.name "avarabyeu";
git remote set-url origin git@github.com:reportportal/documentation;


git add --force build;

git commit -m "`date`";

#echo "Push to develop"
#git push origin develop;

echo "Push subtree to master"
git subtree split --prefix build -b temp; # create a local temp branch containing the splitted output folder
git push -f origin temp:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D temp # delete the local gh-pages because you will need it: ref

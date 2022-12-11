#!/usr/bin/bash

mkdir ~/bin
wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/posh-linux-amd64 -O ~/bin/oh-my-posh
chmod +x ~/bin/oh-my-posh
mkdir ~/.poshthemes
wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/themes.zip -O ~/.poshthemes/themes.zip
unzip ~/.poshthemes/themes.zip -d ~/.poshthemes
chmod u+rw ~/.poshthemes/*.omp.*
rm ~/.poshthemes/themes.zip

echo 'eval "$(~/bin/oh-my-posh init bash --config ~/.poshthemes/atomic.omp.json)"' >> ~/.bashrc

echo "You should run 'chmod +x $0' to make this shell script to be executed on Linux system."

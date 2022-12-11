#!/usr/bin/bash

OMP=oh-my-posh.tgz
FN=InconsolataLGC.zip

if [[ -f $OMP ]]; then
    tar zxvf oh-my-posh.tgz -C ~/
fi

if [[ -f $FN ]]; then
    unzip InconsolataLGC.zip -d ~/.local/share/fonts
fi

chmod +x ~/bin/posh-linux-amd64

echo 'eval "$(~/bin/posh-linux-amd64 init bash --config ~/.poshthemes/atomic.omp.json)"' >> ~/.bashrc

rm -i $OMP $FN

echo "You should run 'chmod +x $0' to make this shell script to be executed on Linux system."

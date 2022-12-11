#!/usr/bin/bash

OMPBIN="${HOME}/bin/oh-my-posh"
THEMES="${HOME}/.poshthemes"
NERDFONT="${HOME}/.local/share/fonts"

rm -rf $OMPBIN $THEMES $NERDFONT

sed --in-place '/oh-my-posh/d' ~/.bashrc

echo "You should run 'chmod +x $0' to make this shell script to be executed on Linux system."

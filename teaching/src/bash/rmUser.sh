#!/usr/bin/bash

GPNAME="students developers"
UNAME="students001 students002 students003 developers001 developers002 developers003"

for rmuser in $UNAME
    do
    echo "$rmuser"
    sudo userdel -r "$rmuser"
done

for gp in $GPNAME
    do
    sudo groupdel $gp
done

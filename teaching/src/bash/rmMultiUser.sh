#!/usr/bin/bash

GPNAME="students developers"

for inc in `seq -w 001 003`
   do
   for rmuser in students${inc} developers$inc
      do
        echo "$rmuser"
        sudo userdel -r "$rmuser"
   done
done

## delete group
for gp in $GPNAME
  do
     sudo groupdel $gp
done

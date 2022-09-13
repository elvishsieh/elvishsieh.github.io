#!/bin/sh

dest=192.168.15.200 # You can put an ip address or a name address
port=8080

isIP=`echo "$dest"|grep -v -e [a-zA-Z]`

echo -e -n "" | nc $dest $port

if [ "_$isIP" != "_" ];then
    ip=`netstat -t -n|grep $dest:$port|sed 's/ \+/ /g'|cut -f4 -d " "|cut -f1 -d:`
else
    for addr in `nslookup $dest|grep -v \#|grep Address|cut -f2 -d:|sed 's/\ //g'`;do
        ip=`netstat -t -n|grep $addr:$port|sed 's/ \+/ /g'|cut -f4 -d " "|cut -f1 -d:`
        if [ "_$ip" != "_" ];then
            break
        fi
    done
fi
echo $ip

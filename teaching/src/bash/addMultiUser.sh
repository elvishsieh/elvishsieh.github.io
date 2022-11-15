#!/usr/bin/bash
GPNAME="students developers"
PASSWD="s123456"
for gp in $GPNAME
    do
        sudo groupadd $gp

    for inc in `seq -w 001 003`
        do
        sudo useradd -g ${gp} -m -k /etc/skel -s /bin/bash ${gp}${inc}
        # All of users are setted up the password with $PASSWD
	echo ${gp}${inc}":"$PASSWD | sudo chpasswd
        sudo usermod -G ${gp}    ${gp}${inc}
        echo ; echo "useradd & password changed for ${gp}${inc}"
    done
done

#!/usr/bin/bash

PASSWD="s123456"

for gp in students developers
	do
		sudo groupadd $gp

	for usr in ${gp}"001" ${gp}"002" ${gp}"003"
		do
		sudo useradd -g ${gp} -m -k /etc/skel -s /bin/bash ${usr}
		# All of users are setted up the password with $PASSWD
		echo ${usr}":"$PASSWD | sudo chpasswd
		sudo usermod -G ${gp}   ${usr}
		echo ; echo "useradd & password changed for ${usr}"
	done
done
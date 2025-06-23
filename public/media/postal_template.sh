#!/bin/bash

# Follow the guide on Steam to fill the missing data (https://steamcommunity.com/sharedfiles/filedetails/?id=3264098813)
nc=
xdotool windowactivate --sync id mousemove --sync x y


###### You do not need to touch anything below this line. ######
i=1
while [[ $i -le $nc ]] ; do
    xdotool mousedown 1
    xdotool key g i m m e d a t 3 sleep 10.22
    echo "$i of $nc cycle(s) complete ($(($nc - $i)) to go)"
    (( i++ ))
done
xdotool mouseup 1

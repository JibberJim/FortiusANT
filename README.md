# FortiusANT modifications in this fork

Support -f ANTID  to pair the FE-C with the ant ID and send grade/power to zwift, so works like a proxy to zwift/rouvy etc.   So as to be able to merge wind resistance settings with it.

Support --mqtt to subscribe to mqtt (hard coded to 127.0.0.1 and subscribe to the topics:
 * /neo/wind/resistance - to set WindResistance to the value returned
 * /neo/wind/rolling - to set RollingResistance to the value returned
 * /neo/wind/grade - to set the TargetGrade to the value returned.

MQTT messages enable you to control the trainer via Alexa voice driven commands via node red, most simply by mapping the brightness of an easy to simulate light so the wind resistance / grade could be set with "Alexa, set grade to 5", more complicated control setting up different configurations can also be done in node red as long as the data is put in mqtt.

##Next Steps

Send Power etc. to MQTT
Create html page to control it.
Allow swapping of Zwift/paired unit and Alexa control of grade.
Add target erg mode MQTT


# FortiusANT
FortiusANT enables a usb-connected Tacx trainer to communicate with TrainerRoad, Rouvy or Zwift through ANT.

FortiusANT is running on the computer (Windows, Linux or MacOS) where the trainer is connected and broadcasts the ANT+ signal, using a dongle, to another computer or tablet.
You might also run TrainerRoad or Zwift on the same computer and then two ANT+ dongles on the same computer are required.

# User manual and version information
Refer [wiki](https://github.com/WouterJD/FortiusANT/wiki) first, then ask questions raising an issue. Succes!

![image](https://raw.githubusercontent.com/WouterJD/FortiusANT/master/supportfiles/FortiusAntWorld.jpg)

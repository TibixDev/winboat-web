---
title: Guest Server Offline
---

## WinBoat Guest Server Offline - What do I do?

There's no need to be worried, first off make sure you waited at least a minute or so for the Guest Server to come online automatically after booting the container.

If the Guest Server is still offline, there's several reasons why it can happen, such as a failed update, Defender incorrectly marking our Guest Server as malicious, or other strange issues.

You most likely must update the Guest Server manually to fix this issue:

1. Use the following command to get the VNC URL for your container:

    ```bash
    # For Podman
    podman port WinBoat | grep "8006" | awk '{print "http://" $3}'
    # For Docker
    docker port WinBoat | grep "8006" | awk '{print "http://" $3}'
    ```

2. Navigate to the VNC URL displayed by the command to access the Desktop
3. Press Win + R (if that does not work, search for `Run`), you should see a dialog box that popped up, type in `services.msc` and press `Enter`
4. Check if the `WinBoatGuestServer` service is running. If so, stop it by right clicking and pressing `Stop`
5. Download the new Guest Server from https://github.com/TibixDev/winboat/releases, you should pick the same version that your WinBoat app displays in the bottom left corner
6. Navigate to `C:\Program Files\WinBoat` and delete the contents
7. Extract the freshly downloaded zip into the same folder (If Defender complains, add an exception or disable Defender entirely if you're comfortable with that)
8. Start the `WinBoatGuestServer` service by right clicking and pressing `Start`
9. Close the VNC tab you opened
10. Done 🎉

(If apps fail to launch, try rebooting the container after the Guest Server update and make sure VNC is closed)

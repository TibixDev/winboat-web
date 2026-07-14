---
title: WinBoat Installation Failure
---

#### If your WinBoat installation has failed and you might know why, follow these steps to clean up and retry:

⚠️ **Note:** Any of these commands might fail depending on how far the installation has gotten, that's perfectly okay, just go through them all.

1. Shut down WinBoat
2. Run `docker stop WinBoat` (for Docker) or `podman stop WinBoat` (for Podman) to stop the container.
3. Run `docker rm WinBoat` (for Docker) or `podman stop WinBoat` (for Podman) to remove the container
4. If you're running a WinBoat version higher or equal to v0.8.6, simply delete the folder that you picked during installation for WInBoat, otherwise run `docker volume rm winboat_data` (for Docker) or `podman volume rm winboat_data` (for Podman) to remove the container volume
5. Run `rm -rf ~/.winboat` to remove all remaining WinBoat data
6. **Optional:** If you think the problem is not related to your system and it might be fixed in a newer release, download the latest release from https://github.com/TibixDev/winboat/releases

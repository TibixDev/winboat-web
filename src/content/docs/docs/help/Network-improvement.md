---
title: File Sharing Improvement
---

You can enable the `iptables` and `iptable_nat` kernel modules for network autodiscovery and better file sharing performance.

To do this, simply run `echo -e "ip_tables\niptable_nat" | sudo tee /etc/modules-load.d/iptables.conf` and restart your computer.

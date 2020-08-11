import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

const App = () => {
  return(
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.head}>SpaceLegion.wiki</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.text}>
          Arch Linux Install (UEFI)
        </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>After booting into Arch iso</Text>
        <Text style={styles.guide}>1 # ping stallman.org (to check internet connectivity)</Text>
        <Text></Text>
        <Text style={styles.guide}>2 # lsblk (to list all partitions with drives)</Text>
        <Text></Text>
        <Text style={styles.guide}>3 # cfdisk /dev/sda (your hardisk name)</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For a basic partition.</Text>
        <Text style={styles.guide}>=====================</Text>
        <Text style={styles.guide}>"EFI System partition (/dev/sda1) with 512M size, FAT32 formatted.</Text>
        <Text></Text>
        <Text style={styles.guide}>Root partition (/dev/sda2) with at least 20G size or rest of HDD space, ext4 formatted.</Text>
        <Text></Text>
        <Text style={styles.guide}>Home directory is optional"</Text>
        <Text></Text>
        <Text style={styles.guide}>* Select new type the partition size in MB (512M) and press enter key, select Type from the bottom menu and choose EFI</Text>
        <Text></Text>
        <Text style={styles.guide}>* For /(root) partition use the following configuration: New -{">"} Size: rest of free space -{">"} Type Linux filesystem.</Text>
        <Text></Text>
        <Text style={styles.guide}>Then select Write, answer with yes in order to apply disk changes and then Quit the utility</Text>
        <Text></Text>
        <Text style={styles.guide}>Type lsblk to review your changes.</Text>
        <Text></Text>
        <Text style={styles.guide}>4 # mkfs.fat -F32 /dev/sda1 (creates a FAT32 file system for EFI System partition)</Text>
        <Text></Text>
        <Text style={styles.guide}>5 # mkfs.ext4 /dev/sda2 (create the EXT4 file system for the root partition)</Text>
        <Text></Text>
        <Text style={styles.guide}>--------------------------------</Text>
        <Text></Text>
        <Text style={styles.guide}># mkfs.ext4 /dev/sdX</Text>
        <Text></Text>
        <Text style={styles.guide}># mkdir /mnt/home  </Text>
        <Text></Text>
        <Text style={styles.guide}># mount /dev/sdX /mnt/home)- optional, if you need home partition</Text>
        <Text></Text>
        <Text style={styles.guide}>--------------------------------</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Installing Arch Linux</Text>
        <Text style={styles.guide}>=====================</Text>
        <Text></Text>
        <Text style={styles.guide}>6 # mount /dev/sda2 /mnt (In order to install Arch Linux, the /(root) partition must be mounted to /mnt directory mount point)</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -Sy (to sync)</Text>
        <Text></Text>
        <Text style={styles.guide}>7 # pacstrap /mnt base base-devel linux linux-firmware nano (installs base system, base development tools, linux kernel, firmware, cli editor) </Text>
        <Text></Text>
        <Text style={styles.guide}>8 # genfstab -U -p /mnt {">"}{">"} /mnt/etc/fstab (generates fstab file for your new Arch Linux system)</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Arch Linux System configuration</Text>
        <Text style={styles.guide}>===============================</Text>
        <Text></Text>
        <Text style={styles.guide}>9 # arch-chroot /mnt (chroots into /mnt the system path)</Text>
        <Text></Text>
        <Text style={styles.guide}>10 # pacman -S nano (installs nano cli editor)</Text>
        <Text></Text>
        <Text style={styles.guide}># nano /etc/locale.gen (Configuring your system Language. Choose and uncomment your preferred encoding languages from /etc/locale.gen) In this scenario- "en_US.UTF-8 UTF-8" "en_US ISO-8859-1"</Text>
        <Text></Text>
        <Text style={styles.guide}># locale-gen (Generates your system language layout)</Text>
        <Text></Text>
        <Text style={styles.guide}># nano /etc/locale.conf (type "LANG=en_US.UTF-8" then save and exit) (This assigns english as default language)</Text>
        <Text></Text>
        <Text style={styles.guide}># ln -s /usr/share/zoneinfo/Europe/Berlin /etc/localtime (configure your region and city, This is an example)</Text>
        <Text></Text>
        <Text style={styles.guide}># hwclock --systohc --utc (configure the hardware clock to use UTC, the hardware clock is usually set to the local time)</Text>
        <Text></Text>
        <Text style={styles.guide}>11 # passwd (create a password for root user)</Text>
        <Text></Text>
        <Text style={styles.guide}># useradd -mG wheel "username" (creates a user account with sudo permissions)</Text>
        <Text></Text>
        <Text style={styles.guide}># passwd "username" (create a password for user account)</Text>
        <Text></Text>
        <Text style={styles.guide}># EDITOR=nano visudo (adding user account to sudoers group)</Text>
        <Text></Text>
        <Text style={styles.guide}>uncomment "%wheel ALL=(ALL) ALL" Then save and exit </Text>
        <Text></Text>
        <Text style={styles.guide}>12 # pacman -S grub efibootmgr (installs grub bootloader for UEFI systems)</Text>
        <Text></Text>
        <Text style={styles.guide}>13 # mkdir /boot/EFI (making directory for EFI installation) </Text>
        <Text></Text>
        <Text style={styles.guide}>14 # mount /dev/sda1 /boot/EFI  #Mount FAT32 EFI partition (mounting for installation)</Text>
        <Text></Text>
        <Text style={styles.guide}>15 # grub-install --target=x86_64-efi  --bootloader-id=grub_uefi --recheck (installs grub)</Text>
        <Text></Text>
        <Text style={styles.guide}>16 # grub-mkconfig -o /boot/grub/grub.cfg (creating GRUB configuration file)</Text>
        <Text></Text>
        <Text style={styles.guide}>17 # pacman -S networkmanager (package for internet connectivity)</Text>
        <Text></Text>
        <Text style={styles.guide}>18 # systemctl enable NetworkManager (enabling it from boot itself)</Text>
        <Text></Text>
        <Text style={styles.guide}>19 # nano /etc/hostname (type a name for your host, eg: Archlinux)</Text>
        <Text></Text>
        <Text style={styles.guide}>20 # exit (exiting chroot environment)</Text>
        <Text></Text>
        <Text style={styles.guide}>21 # umount -R /mnt (This will unmount drives)</Text>
        <Text></Text>
        <Text style={styles.guide}>22 # reboot</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>The base installation has finished</Text>
        <Text style={styles.guide}>********************************</Text>
        <Text></Text>
        <Text style={styles.guide}>Setting up your desktop</Text>
        <Text style={styles.guide}>=======================</Text>
        <Text></Text>
        <Text style={styles.guide}>If you're installing Arch in VirtualBox you should install the VirtualBox Guest Additions. The VirtualBox Guest Additions contain the video drivers, You can install the guest additions from the Arch repositories</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S linux-headers</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S virtualbox-guest-utils</Text>
        <Text></Text>
        <Text style={styles.guide}># systemctl enable vboxservice</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For AMD GPU</Text>
        <Text style={styles.guide}>===========</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S xf86-video-amdgpu</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -Sxf86-video-ati (older cards only)</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For Intel</Text>
        <Text style={styles.guide}>=========</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S xf86-video-intel (Warning, If you are planning to install cinnamon destop environment, skip this driver install)</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For Nvidia</Text>
        <Text style={styles.guide}>==========</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S xf86-video-nouveau</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S nvidia (This is a properietary driver)</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Installing a desktop environment</Text>
        <Text style={styles.guide}>================================</Text>
        <Text></Text>
        <Text style={styles.guide}>Listed below are most of the popular desktop environments and their associated packages. Pick the one you like and install it!</Text>
        <Text></Text>
        <Text style={styles.guide}>* XFCE- xfce4 xfce4-goodies</Text>
        <Text></Text>
        <Text style={styles.guide}>* GNOME- gnome gnome-extra</Text>
        <Text></Text>
        <Text style={styles.guide}>* KDE- plasma kde-applications</Text>
        <Text></Text>
        <Text style={styles.guide}>* Cinnamon- cinnamon</Text>
        <Text></Text>
        <Text style={styles.guide}>* MATE- mate mate-extra</Text>
        <Text></Text>
        <Text style={styles.guide}>* LXDE- lxde</Text>
        <Text></Text>
        <Text style={styles.guide}>* LXQt- lxqt</Text>
        <Text></Text>
        <Text style={styles.guide}>Note:- For the GTK-based desktops (XFCE, GNOME, Cinnamon, MATE and LXDE), you'll want to install gvfs alongside the desktop to get 
wastebasket and mounting support for regular users. Install gvfs-mtp as well if you're planning to connect your Android phone. </Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Cinnamon as an example:</Text>
        <Text style={styles.guide}>=======================</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S cinnamon gvfs gvfs-mtp gnome-terminal gnome-screenshot blueberry </Text>
        <Text></Text>
        <Text style={styles.guide}>(terminal for linux terminal emulator, screenshot for there purpose, blueberry for bluetooth adapter)</Text>
        <Text></Text>
        <Text style={styles.guide}>Installing and setting up a Display Manager</Text>
        <Text style={styles.guide}>================================</Text>
        <Text></Text>
        <Text style={styles.guide}>XFCE- lightdm gdm</Text>
        <Text></Text>
        <Text style={styles.guide}>GNOME- gdm lightdm</Text>
        <Text></Text>
        <Text style={styles.guide}>KDE- sddm</Text>
        <Text></Text>
        <Text style={styles.guide}>LXDE- lightdm</Text>
        <Text></Text>
        <Text style={styles.guide}>LXQt- sddm</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>LightDM as an example:</Text>
        <Text style={styles.guide}>=====================</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S lightdm</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S lightdm-gtk-greeter lightdm-gtk-greeter-settings</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>To enable it from boot</Text>
        <Text style={styles.guide}>======================</Text>
        <Text></Text>
        <Text style={styles.guide}># systemctl enable lightdm</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>For Audio</Text>
        <Text style={styles.guide}>=========</Text>
        <Text></Text>
        <Text style={styles.guide}>Pulseaudio is recommended. To install:-</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S pulseaudio pulseaudio-alsa pavucontrol</Text>
        <Text></Text>
        <Text></Text>
        <Text style={styles.guide}>Recommended Common Packages</Text>
        <Text style={styles.guide}>===========================</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S  ntfs-3g git celluloid vlc rhythmbox feh xed chromium firefox</Text>
        <Text></Text>
        <Text style={styles.guide}>(ntfs-3g- support for ntfs drives, git- git tools, celluloid- video player, Vlc- video player, rhythmbox- muisc player, feh- image viewer, xed- text editor, chromium & firefox - browsers)</Text>
        <Text></Text>
        <Text style={styles.guide}>24 # reboot </Text>
        <Text></Text>
        <Text style={styles.guide}>Extras:- If your mirrors are slow you can change it by using the following command, reflector package is required.</Text>
        <Text></Text>
        <Text style={styles.guide}>================================</Text>
        <Text></Text>
        <Text style={styles.guide}># pacman -S reflector</Text>
        <Text></Text>
        <Text style={styles.guide}># reflector --verbose --latest 50 --sort rate --save /etc/spacman.d/mirrorlist (Add all mirrors generated from the arch linux official website.) </Text>
        <Text></Text>
        <Text style={styles.guide}>https://www.archlinux.org/mirrorlist/all/</Text>
        <Text></Text>
        <Text style={styles.guide}># reflector --verbose --country 'Canada' -l 5 --sort rate --save /etc/pacman.d/mirrorlist</Text>
        <Text></Text>
        <Text style={styles.guide}>Retrieves top five mirrors of Canada according to the download rate, and save them to the mirrorlist file.</Text>
        <Text></Text>
        <Text style={styles.guide}>Extras:- opening tty- Alt+control+F2, closing tty- Alt+control+F7</Text>
        <Text style={styles.guide}>================================</Text>
        <Text></Text>
        <Text style={styles.guide}>Bonus:- Cinnamon DE recommendations - lightdm-slick-greeter lightdm-settings (edit it from /etc/lightdm/lightdm.conf,modify value of greeter-session) (from yay), arc-gtk-themes papirus-icon-theme (pacman)</Text>
        <Text></Text>
        <Text></Text>
        <Text style={{color:'yellow', fontSize:20}}>By nebulaxyz</Text>


      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

  },

  head: {
    color: 'cyan',
    fontSize: 28,
    fontFamily: 'monospace',
    alignItems: 'center',
  },

  text : {
    fontSize: 22,
    color: 'green',
    fontFamily: 'monospace',
  },
  guide: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'monospace',
  },
});

export default App;
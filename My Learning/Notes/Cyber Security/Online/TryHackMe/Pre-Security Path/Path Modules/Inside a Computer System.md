---
tags:
  - TryHackMe
  - Pre-Security-Path
---
[[Pre-Security Path]]
[[Careers in Cyber]]

---
# Inside a Computer System
![[cdn-images.tryhackme.com/user-uploads/66c44fd9733427ea1181ad58/room-content/66c44fd9733427ea1181ad58-1770828504619.svg](https://cdn-images.tryhackme.com/user-uploads/66c44fd9733427ea1181ad58/room-content/66c44fd9733427ea1181ad58-1770828504619.svg)
<sub>PC Components</sub>

>[!question] What does the component do?
> > [!question] What role does the Motherboard play in a computer?
> > >[!success] It connects and allows communication between all components.
>  
> >[!question] What do you think the CPU does?
> > >[!success] Executes instructions and performs calculations
> 
> >[!question] How would you describe what RAM does?
> > >[!success] Stores data temporarily while the computer is running.
>
> >[!question] What's the main purpose of storage devices like SSDs and HDDs?
> > >[!success] Store data even when powered off.
> 
> > [!question] What does a network adapter enable a computer to do?
> > > [!success] Allow for communication between other computers and networks.
> 
> > [!question] What is the main function of the Power Supply Unit?
> > > [!success] To supply power to components
> 
> >[!question] What does a graphics card primarily handle?
> >
> > > [!success] Processing and outputting visual information to displays
> 
> > [!question] What are input and output devices used for?.,
> > 
> > >[!success] To send data to and receive data from the computer.

>[!note] Components Placed on Motherboard
>Connect the components by drag and drop to their proper connection points.
>

![[Motherboard Components Placed.png]]
<sub>Components placed on motherboard.</sub>

>[!question] Give in the flag you received after completing the exercise on the static site.
>
> > [!success] THM{4llpccomp0n3nts1d3nt1f13d}

---
# What Happens When You Press the Start Button
1) Power button causes PSU to begin powering.
2) Firmware begins and starts up all components under a unified system called [Unified Extensible Firmware Interface](https://en.wikipedia.org/wiki/UEFI) also known as UEFI and has largely replaced the traditional BIOs.
3) One of the routines that the UEFI loads is the Power-On Self Test, which tests if every required component is present, configured correctly, and functioning.
4) In our computer system the UEFI holds an ordered list (Boot Menu) which prioritises on which device to look first for the boot up routine for the Operating System.
5) On the selected boot device, the bootloader is initiated. This bootloader transfers the Operating System from the selected boot device to the RAM. Once the OS is transferred, the UEFI gives control over the different components to the OS.

>[!important] Boot Sequence
> >[!question] What happens when power button pressed?
> >
> > >[!success] PSU is turned on and power is supplied to components
>
> >[!question] What happens next? 
> >
> > >[!success] UEFI (or older BIOs) firmware starts up and coordinates components
>
> >[!question] What does POST check for
> >
> > >[!success] Power On Self Test checks that all required components are functional and accounted for.
> 
> 
> > [!question] How does the UEFI select a boot device?
> >
> > >[!success] UEFI follows a priority list (boot menu) to determine which device to boot from.
> > >
> 
> >[!question] What does the bootloader do?
> >
> > > [!success] Loads the OS into RAM.
>

>[!question] Drag and Drop
> >[!success] My Answer
> > 1) Press Power Button
> > 2) Firmware Starts
> > 3) POST test
> > 4) Select Boot Device
> > 5) Initiate Bootloader

>[!question] What is the flag that you received after completing the exercise?
> > [!success] THM{pc5ucce55fully5t4rt3d}

---
# Conclusion

>[!note]
>The boot process is a very important concept later on, as it is sometimes targeted by hackers. The next step is to see how the different combinations and specialisations of these components lead to diverse types of computer systems.

---
# Completed
![[Inside A Computer Completed.png]]

---
[[Computer Types]]


---
tags:
  - MODULE-ID
  - MODULE-NAME
---
[[CO3404 Distributed Systems]]
[[CO3404 Lecture 12 - Subnets & Baston Hosts]]

---
# Lecture Documents
[[CO3404 Lecture 13.pdf]]
## Demos
[[CO3404 L13 - MinimalVM.zip]]
[[CO3404 L13 - UsingVariables.zip]]
## Docker Installation Files
>[!info]
>**docker-az.sh** is the one you have already been using when building from the portal
>
>**docker-az-swap.sh** is the same as above but also creates a swap disk to enable you to run a database on a small VM. You may as well use this rather than the previous
>
>**docker-az-tf.sh** is a slightly modified docker-az.sh to use with terraform if using remote executioner to deploy and install Docker
>
>**docker-az-tf-swap.sh** is a slightly modified docker-az-swap.sh for use with Terraform remote provisioning and installation of Docker
>
>I suggest to keep it simple, just use docker-az-swap.sh with the portal and docker-az-tf-swap.sh with Terraform provisioner. Having a swap file is always handy

[[CO3404 L13 - Docker Installation Files.zip]]

---
# Learning Objectives
skipped

---
# Basic Infrastructure
Creating a VM / EC2 from the portal seems simple but has a lot of background processes and various defaults are used while ok for experimenting but not in real design:
- A VM type and size needs to be specified
- A VM OS image needs to be specified
- Need a system disk for the VM image
- Need a network within which our VM can communicate
GET REST

---
# Deleting Resources
If you choose to delete all resources say to save cost then you can recreate them again.
- Azure delete the resource group simply deletes all resources
- AWS need to remember all resources and manually delete each one
- To recreate may need to go through all console steps again.

Organisations need to automate the creation and destruction of their architecture and code deployment.

Cloud providers enable various ways oc creating managing and destroying resources programmatically:
- Software Development Kit (SDK) to call functions
- CLI - Install command line interface which calls functions
- Use a shell / batch script to execute command line commands imperatively 
- Use the cloud provider's built-in shell e.g. cloud shell to issue command line commands
- Azure Resource Manager (ARM) templates for delcarative IaC
  - e.g. in resource manager | Export template creates a reusable template of your infrastructure.
- AWS CloudFormation templates for delcarative IaC
- Use third party software such as Terraform which is cloud provider agnostic declarative approach

> Videos have been posted on videos demonstrating CLI and template approach. To stick to industry standard TerraForm should be used.

> demos/terraform/Azure/minimal_vm/main.tf - Minimal to start a VM with TerraForm.


---
[[CO3404 Lecture 14 - Security - TLS]]
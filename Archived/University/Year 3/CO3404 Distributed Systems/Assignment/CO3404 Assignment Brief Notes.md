---
tags:
  - CO3404
  - Distributed-Systems
---
[[CO3404 Distributed Systems]]

---
[[CO3404 Assignment Brief.pdf]]

> [!PDF|yellow] [[CO3404 Assignment Brief.pdf#page=3&selection=97,0,139,27&color=yellow|CO3404 Assignment Brief, p.3]]
> > How, when, and where to submit: Submission is via Blackboard. Details of what to submit are covered in this document. Submission should be before 13:00 hours on Friday March 13th, after which point, submissions will be automatically recorded as late. Feedback should be provided within three weeks of submission. You should aim to submit your assessment in advance of the deadline.


> [!PDF|yellow] [[CO3404 Assignment Brief.pdf#page=6&selection=135,0,257,2&color=yellow|CO3404 Assignment Brief, p.6]]
> > General points 
> > • Any communication between components (containers) within a microservice should use a Docker network and Docker DNS service names (shown in green on the diagram). 
> > • Communication between microservices deployed on separate Azure virtual machines (VM) should use VM private IP addresses and the Azure private network (shown in blue on the diagram) NOT VM public IP addresses (public internet shown in red on the diagram).
> >  • All VMs need to be in the same virtual network to enable them to communicate using the Azure private network. If you use the Azure portal to create your resources, putting them all in the same resource group will by default put them in the same VNet. If using Terraform, you need to create the VNet then place the VMs into it. 
> >  • If you run out of CPU cores (Student account only allows 4 per region), put some resources in one region in one VNet, and others in another region in a different Vnet, then peer the VNets – this will enable traffic to traverse both VNets as if they were one. Just make sure your IP addresses are unique across the VNets. 
> >  • Each microservice should be resilient to any or all the other microservices failing; this should be tested and demonstrated in the video for all options. i.e., stop one application, e.g. joke, then show in the video that the other applications, still work.



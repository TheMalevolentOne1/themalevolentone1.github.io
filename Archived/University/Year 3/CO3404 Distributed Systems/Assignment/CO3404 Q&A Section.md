---
tags:
  - CO3404
  - Distributed-Systems
---
[[CO3404 Distributed Systems]]

---
# **CO3404 Q&A**
**Q1.** When i try to create a VM I am refused with a message like "“Resource disallowed by policy” error.

**A.** It looks like Microsoft have changed this as part of its cost saving exercise on the student account. It allows you up to 5 regions but not necessarily the same for everyone. Thanks for bringing this to my attention Tashila. In the portal if you search for policy then go to the policy page. On the left menu click the authoring dropdown then select assignments. You should see a setting called assignment name with "Allowed resource deployment regions". If you click on that then you see a list of regions. Tashila has westus3, koreacentral, centralindia, germanywestcentral and spaincentral. So when I choose Uk-south and Uk-west, you choose any of the 5 you have access to. Microsoft are trying to spread the load to avoid too many people accessing the same region.

**Q2.** This is a question from me. Is it possible to get mySql and other containers to run on the smallest VM i.e. B1s?

**A.** I've been experimenting with this and found that it is possible on the B1s and the newer smaller machines that Microsoft seem to imply are free: B2ts v2 Intel x86-64, B2pts v2 ARM for mac Silicon, B2ats v2 - AMD $5.95 / month.

The issue isn't lack of cpu but lack of memory. By adding a swap disk the performance is fine. To add a swap disk you could enter the following at your VM command line or add to your docker shell script (I'll do this for you for next week). This is all aimed at keeping your costs down - i.e. slowing credit use.

**sudo fallocate -l 2G /swapfile** # allocate a 2GB swap file. -l (L) specifies length i.e. 2Gb in this case

**sudo chmod 600 /swapfile** # set owner read/write

**sudo mkswap /swapfile** # mark the file as a swap file type

**sudo swapon /swapfile** # enable it for use now

**echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab** # Append swapfile config to .fstab so persists after reboot

You can check if it's been successful by entering

**free -h**

This should show you how much free memory you have and should show the swap space

**Q3.** How do I keep the cloud costs as low as possible particularly public IPs

**A.** You need a maximum of 2 public IPs. One each for joke and submit if you don't use an API gateway. Or just one if using the API gateway. Creating a jump box is handy to be able to administer your VMs. If you create a standalone jumpbox like I showed you, it will cost you an IP and a VM. This is the correct way to do it. However, it is not stipulated in the assignment so you could save yourself an IP address and a VM by using the API gateway vm as your jumpbox. Everything I explained works exactly the same way but you need to open port 22 on the gateway. You can explain in your report that you have chosen this approach for cost and simplicity but you are aware that it is not an architecturally sound approach from a security perspective

**Q4.** Do each of the vms need to be on their own subnet?

**A.** No. Don't worry about subnets for the assignment. You can implement if you want to for practice but it's not a requirement. You wouldn't normally put every VM in its own subnet anyway. You would segregate by functionality. e.g. Public subnet for the API gateway. Private subnet for the Microservices and databases. Bastion host, if you use one, would normally go in its own subnet but these are not specified in the assignment and are not shown on the architectural diagram to reduce complexity and confusion. However, if you want to include subnets to implement a more professional and industry aligned solution then by all means create them - but this is optional and would attract no additional marks.

**Q5.** Note: this only applies to option 4: For a first run of the application, what is the app expected to do, because no new jokes have been inserted yet, so no events have been sent out with types to cache?

**A.** Accept that for the first use, you can enter a new joke and type using the moderator service. This will trigger the events and update all the cache files.

**Q6.** Can I change the names of some of my endpoints to avoid a url such as KongIP/submit/submit?

**A.** There is no need to change the endpoints. The challenge you have in Kong is that you have three services with the same endpoint called “types”

In the API section of the notes at around slide 178, it talks about versioning ad strip path.

One approach you can use for your assignment could be:

[http://Jokes.com/submit-ms-v1/submit](http://jokes.com/submit-ms-v1/submit) ... Etc where jokes.com is your domain name for kong or a kongIP address

[http://Jokes.com/submit-ms-v1/types](http://jokes.com/submit-ms-v1/types)

This enables you to version control your API if you want to. Call it what you want as it has nothing to do with the endpoint but is used to identify the service. You can set the kong path to match this service name and set strip path to true to remove it. So the other urls would be something like:

[http://Jokes.com/mod-ms-v1/moderate](http://jokes.com/mod-ms-v1/moderate) ...

[http://Jokes.com/mod-ms-v1/types](http://jokes.com/mod-ms-v1/types) ...

[http://Jokes.com/submit-ms-v1/submit](http://jokes.com/submit-ms-v1/submit) ...

[http://Jokes.com/submit-ms-v1/types](http://jokes.com/submit-ms-v1/types) ...

i.e. you prefix your api endpoint with a service name and optionally a version number which is filtered on then stripped by Kong so your endpoints can be exactly as stated on the architectural diagram.

You may argue that this is not a very user friendly url, but API urls don’t need to be friendly as they are generally called from a system not directly by a user.

We have used a static web server built into the microservice for simplicity but generally, you would provide the web pages from a web server such as nginx so have a url like [http://joke.com](http://joke.com/) which returns the web page. API call to kong is called either from the web page using CORS or from the webserver using server to server call as shown on the slides in the section on CORS at around slide 255

So in your case, using a url like [http://Jokes.com/submit-ms-v1/submit](http://jokes.com/submit-ms-v1/submit) may seem like a lot of typing, but it is only because of the architecture we have used to avoid a separate web server and yet another VM.

**Q7.** When using the combined compose yaml files in the configuration shown in todays lecture, e.g., $Env="mongo"; docker compose -f compose.yaml -f mongo.yaml -d --build, I get an error stating that the port 4002 is already in use.

**A.** This is completely my fault. I checked the assignment diagram and noticed that I had written the same port number for the MySQL and the mongo containers as 4002. This causes a conflict when both files are merged. If you want to use this approach, or you are getting a similar error, just change the mongo port number to 4003 which is what I meant to put on the diagram. If this doesn't affect you, e.g. you have used docker profiles, then don't bother changing it - as long as it works.

Appologies for this. I thought it was too good to be true that I hadn't made any mistakes on such a big document - but Sarah Gosch has burst my bubble and the mistake has been outed :-)

**Q8.** how would you populate the types json in the volume for the dropdown when creating the containers and volumes from the scratch. Because loading the .sql file won't get the etl to send the type to the type_update exchange.

**A.** You don't need to pre-populate the database with loads of jokes as it is easier to demonstrate the functional requirements without them. Start from an empty database. Enter the first joke using the moderator just to get one in and prime the system. You should be fine after that. They don't even need to be jokes to demo functionality - any text strings will do - Jokes would be added for production. If you wanted to import an existing set of new jokes or moderated jokes, you would need a file input endpoint on moderator and submit - but that's not a requirement. Keep it simple to just demo the functional and non-functional requirements.

---
[[CO3404 Distributed Systems]]
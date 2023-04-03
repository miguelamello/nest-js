# Node.js Challenge

First of all, I'd like to grateful Jobsity for this pleasant exercice. I enjoyed to complete it. I'd appreciate to have more time to improve it as far as I could. However, I have to completed in my free time. 

### 1) About the services

On the project manifest was asked to build to services: 

- One for geting a remote stock quote from a resource on the web. 
- Another for letting users to get a stock quote from the company web services.

I decided to name those services like so, respectively:

- REMOTE STOCK QUOTE MICROSERVICE
- STOCK QUOTE MICROSERVICE

I think the order and name of the services are not a concern. What matters are what each service does and performs, right? If I'm wrong, I kindly ask for your forgiveness.

One good result from this modern approuch of small and decoupled applications is that one service can be replaced by another one and the other services not even will be disturbed by that change. Evidently if the new replacement service outputs the same data. I strong beliave in a infrastructure based on microservices. 

Sure, these services on this code challenge are for demonstration. However, in a real production environment I would accomplish a lot more tasks to deliver the best services I could, with security, efficiency, managebility and endurance. To list  a few:

* SSL protection for all the URLs;
* Authentication and encription for all routes;
* Load balancing and proxing for all services;
* Unified Authentication Central based on a fast "in memory" noSQL database;
* Remote logging errors and events for the services;
* Intensive usage of Message Queue Services;
* 100% containerized applications;

For the sake of speedness in finishing the challenge in the time and also due to my scarse time since I work full time, but to give a blueprint of what I think about services implementation, I decided to fake some situations, for example: 

* About the services entrypoints... simulating a SSL Transport and a Domain Name for the services.

https://api.remote-stock.io/v1<br>
https://api.stock-quote.io/v1

* About sending an email to the user after his "signup" and "signin" to the service. I think implement a full pledge backend service for mailing only for a code challenge... too much. I pray for I'm not wrong. You will see that on the documentation and on the service workings itself, user passwords are sent to the user on the server response. For the sake of implementation testing.

* About the logging of errors and events that may happen in a running service. I integrated the Winston Logging module into both services. Winston is nice because it's seamless receives and forwards messages generated by application innerings to a pletora of external repositories, such as databases, file system storages, and more. Well, I just sent a "catch all" error hook outputing to the Node console. For testing purposes I think enough. 

### 2) About the "Bonuses"

It was asked to use OpenAPI/Swagger to document the API. Well, I decided to risk and build a custom documentation for the services. For the bigger service, the one I called https://api.stock-quote.io/v1 I have custom build a API REFERENCE too. Follow the api documentation to access the api reference. I beliave in a easy to understand documentation. I take for example the Nest.js Documentation which is understoodable, easy reading and made to humans. I strong beliave that a good documentation is crucial for an application adoption and growthness. 

### 3) Conclusion

I hope the services implementation I made fullfills the requisites asked by Jobsity, and that I proceed on the vacancy canditace. Once more, I would like to thank for the opportunity given. 

<br>
<br>
<b>Miguel Mello</b><br>
Senior Software Engineer



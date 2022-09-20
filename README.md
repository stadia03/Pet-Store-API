# Pet-Store-API


Hey leads!

I have created an REST API using NodeJS, express framework, and mongoDB as by database service provider. 
We can have the CRUD operations over this API very easily, for the development purposes am using Postman to check this API.

**__There are four different kind of request that my API can handle.__**

***First let's check all the Documents that our mongoDB schema have :>***

READ (router.get)

![image](https://user-images.githubusercontent.com/93596846/191352605-579f113a-54af-4a49-9c46-852234eaebe3.png)

We only have one document with unique id : "632956f43aa2c6d90ecc0681";

***Let's create a document***

CREATE (router.post)
![image](https://user-images.githubusercontent.com/93596846/191355368-eb660416-19d6-4bf8-b991-a99a973678e3.png)

***Let's check the documents now
![image](https://user-images.githubusercontent.com/93596846/191355489-80ae06ea-dfa8-474d-ae13-a5b5906f5129.png)

***Hey! I added some more pets :)***

By individual id (router.get(‘/:id’)
***Let's try the id number : "632a1e82b755a0296c9d7df5"
![image](https://user-images.githubusercontent.com/93596846/191355796-4e5f8543-518c-463e-a243-116ba2f87fb0.png)


***Now as an pet shop owner, let's try to sell an pet and change the "owner_name" field,
*** We will sell "brisky" , "Pomeranian" dog with id:632a1d28b755a0296c9d7ded.

UPDATE (router.patch)

![image](https://user-images.githubusercontent.com/93596846/191356413-e60f3904-79f5-4f87-ade7-2119528118ae.png)

***I have sended an respond in json format, so you can imiditely check the changed document 😁  ***

***Lastly Let's try to delete the document with id : 632a1e82b755a0296c9d7df5***
DELETE (router.delete)

![image](https://user-images.githubusercontent.com/93596846/191358678-8e141917-eeb6-4161-9c51-9e0186873910.png)




Am using local port 9000 to set my server.

Here are the dependencies and their versions :

Am routing all request from the client to mongoDB database

Of course we have to create a new schema account to our given task!
 
 



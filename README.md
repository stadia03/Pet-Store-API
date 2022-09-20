# Pet-Store-API


Hey leads!

I have created an REST API using NodeJS, express framework, and mongoDB as by database service provider. 
We can have the CRUD operations over this API very easily, for the development purposes am using Postman to check this API.

**__There are four different kind of request that my API can handle.__**

***First let's check all the Documents or schema that our mongoDB database have :>***

READ (router.get)

![image](https://user-images.githubusercontent.com/93596846/191352605-579f113a-54af-4a49-9c46-852234eaebe3.png)

We only have one document with unique id : "632956f43aa2c6d90ecc0681";

***Let's create a document***

CREATE (router.post)
![image](https://user-images.githubusercontent.com/93596846/191355368-eb660416-19d6-4bf8-b991-a99a973678e3.png)

***Let's check the documents now***

![image](https://user-images.githubusercontent.com/93596846/191359693-808cdc46-d743-4d50-84c8-10b4dc36adcc.png)

***Hey! I added some more pets : )***
![image](https://user-images.githubusercontent.com/93596846/191355489-80ae06ea-dfa8-474d-ae13-a5b5906f5129.png)


By individual id (router.get(‘/:id’)

***Let's try the id number : "632a1e82b755a0296c9d7df5"***

![image](https://user-images.githubusercontent.com/93596846/191355796-4e5f8543-518c-463e-a243-116ba2f87fb0.png)


Now as an pet shop owner, let's try to sell an pet and change the "owner_name" field,

___We will sell "brisky" , "Pomeranian" dog to kishan with id:632a1d28b755a0296c9d7ded___

UPDATE (router.patch)

![image](https://user-images.githubusercontent.com/93596846/191356413-e60f3904-79f5-4f87-ade7-2119528118ae.png)

I have sended an respond in json format, so you can immediately check the changed document 😁  

***Lastly Let's try to delete lappy pet with document id : 632a1e82b755a0296c9d7df5***

DELETE (router.delete)

![image](https://user-images.githubusercontent.com/93596846/191358678-8e141917-eeb6-4161-9c51-9e0186873910.png)

Now let's check the documents

![image](https://user-images.githubusercontent.com/93596846/191361771-f5ac1174-24b4-40ef-bd7d-a3b1f6d3dcfa.png)


NOW LET'S GET INTO THE CODE!!
------------------------------

Am using local port 9000 to set my server.

![image](https://user-images.githubusercontent.com/93596846/191362307-a48b42d2-c055-4a4a-8a3a-1aa26145659c.png)

Here are the dependencies with respective versions :

![image](https://user-images.githubusercontent.com/93596846/191362442-efa72beb-b6a7-498b-a74b-d1d294b8d51b.png)


Am routing all request from the client to mongoDB database

![image](https://user-images.githubusercontent.com/93596846/191362657-2b7a8120-8cc1-41ba-9433-b00319d8eeec.png)


Of course we have to create a new schema account to our given task!

![image](https://user-images.githubusercontent.com/93596846/191362762-af8a09f2-4464-4831-82c8-7a4fb6033397.png)

YOU CAN GET INTO gaurab_routes FOLDER TO CHECK ALL THE REQUEST HANDLING FUNCTIONS ..

Hope you found this article worth your time!! ThankYou. 😄
 
 



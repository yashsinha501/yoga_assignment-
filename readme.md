# Yoga Registration App

This is a MERN Stack WebApp which is used to register students for Yoga classes but entering their Basic details like Name,age,Batch Preference and Payemnt. The upper and lower age limit for registration is 18 and 65 respectively . We could change the batch preference only after one month. Also a payment page to take all the card details.

## Import Data
I have included a data folder in this repo. Inside that folder will be 2 folders called cart and item. These 2 folders contain a mongodump of the 2 collections that I use in this ecommerce demo. You can use the [import-data.sh](data/import-data.sh) script to import these 2 dumps to an ecommerce database, then you will have the same content that I have for this demo.


## Getting Started
To get started  you can simply clone this `yogaRegistration` repository and install the dependencies.

Clone the `yogaRegistration` repository using git:

```bash
git clone https://github.com/yashsinha501/yoga_assignment-
```

Install dependencies with this command:
```bash
npm install
```

Run the application with this command:
```bash
npm run dev
```

## Tech Stack
* Reactjs
* Node.js
* Express.js
* Bootstrap
* MongoDB

## Routes
* http://127.0.0.1:5173/ => Home page having the main registration form 

* http://127.0.0.1:5173/payment => Payment page having all the card fields

* http://127.0.0.1:5173/MembersList => A form having list of all the registered students and updation form for any updation in batch if the previous change was a month ago

## ER Diagram Link 

```bash
 https://lucid.app/lucidchart/bc82d518-1db9-4258-a48d-4a2e328139bb/edit?viewport_loc=-1090%2C-1993%2C3203%2C1453%2C0_0&invitationId=inv_7f15c44a-f9c9-4f20-a59e-6b59d9bff7d6

```


![15th](https://user-images.githubusercontent.com/118122875/224559625-04d4f8c7-c889-4c44-ade8-3c213bf06568.jpg)

##  ![logogit 20 51 12](https://user-images.githubusercontent.com/118122875/224569751-c121abc7-ccbe-43a8-a770-22a9b796d818.png) Anime Smarty

Welcome, this is my assigmenent for my school project called: `project tech`. For this project i'm going to make a application where you can `save (LIKING)` your favorite anime series to your profile. Take a look at my [WIKI](https://github.com/MrSmarto/BLOKTECH23) for more information! (written in `Dutch`.

## ![concept](https://user-images.githubusercontent.com/118122875/224569879-7b376629-fc7b-401a-81b5-9f5e5917521d.png) Het concept

Anime Smarty is an application where you'll be able to choose your preferenced anime. You'll will be able to read information about this specific anime and `save` it to your own account. Are you done with it? No problem, you'll will be able to easily `delete` your anime's from your account page.

## ![install](https://user-images.githubusercontent.com/118122875/224570019-3d6ab194-d3ef-458e-b9b6-d66a5cf39809.png) How to install

### Pre-installation:


Before you install the `Anime Smart`, make sure to install:

### [Git](https://github.com/git-guides/install-git)
* First type `git install` in your terminal
* Type `git --version` the check if node is installed correctly
### [node.js](https://nodejs.org/en/)
* First type `node install` in your terminal
* Type `node --version` the check if node is installed correctly
> You'll recieve the what type of version you installed like:`v18.8.0` 
### [MongoDB](https://www.mongodb.com/blog)
* Before you can start Anime Smarty you'll need to create a database with multiple collections. I use [MongoDB](https://www.mongodb.com/blog) to save up the data (information) for this application. Follow the steps underneath, you can also follow this [tutorial](https://www.mongodb.com/docs/atlas/getting-started/):
1. Create a cluster, i would recommend you to use the name cluster0
2. Create a database, choose your own name
3. Then you'll create the first collection called: `"DataFilms"`. In this collection we will store the information about the movies that we render in our application. Use the following template to set up your collection:
>  Using the correct names given in this tutorial, for the `collection` is super important!

| 'Field' (input)| 'Value' (input)| 
| ------------- |:-------------:|
| _ID (Automatic generated) | Random number made by mongoDB |
| title: | (You can put any title name here) | 
| episodes: | (You can put the amount of episodes here) | 
| release: | (You can put the release year (date) here | 
| descriptions: | (You can put any descriptions here) | 
| photo: | (example: "onepiece.jpg") | 
| ID: | (I recommend you to use number like: 1,2,3....) | 

```
add atleast `4 different items` into your collection `DataFilms`
```

4. Then you'll create the second collection called: `"savedFilms"`. In this collection we will store the information about the movies that the user wants to save.
>  Using the correct names given in this tutorial, for the `collection` is super important!
### env.
* Once you have created the databases you'll need to create an .env in the root of the folder you work from, for this application. This .env file should contain one variable.
```
MONGO_PASSWORD=yourpassword
```


### App-installation:

Clone my respository to your local device:

```

git clone https://github.com/MrSmarto/BLOKTECH23

```

When you cloned this repository, created a replica of the database and added the env. file make sure to follow the following steps:
### [NPM](https://docs.npmjs.com/cli/v6/commands/npm-install)
* First type `npm install` in your terminal
* Type `npm --version` the check if node is installed correctly

### Open your terminal 
* In the terminal you type: `npm start` to start [node.js](https://nodejs.org/en/) server, which will start the Anime Smart on the web.
* The website should be visible with the link underneath:
```

http://localhost:1900/

```

* Anime Smart only works for a mobile screen so make sure you switch to a mobile screens. You'll will be able to do this to open the inspector tool on google chrome by the following code for mac OS: `Option + ⌘ + J`, and the following code for windows: `Shift + CTRL + J on Windows)`.

## ![tech](https://user-images.githubusercontent.com/118122875/224570118-38da956b-ec96-4d47-8375-b5f07659883a.png) Technologies

| Courses| language | editor |
| ------------- |:-------------:| ------------- |
| Project Tech | GIT & Github | [ School's respository](https://github.com/MrSmarto/BLOKTECH23/wiki) |
| Frond-end Development | JS (ES6), EJS, html & CSS | Visual Studio Code |
| Back-end Development | node.js | Visual Studio Code & MongoDB |

## ![licence](https://user-images.githubusercontent.com/118122875/224570185-da93d583-8c14-4eee-bca6-f680ec919fc2.png) License

I'm using a [MIT LICENSE](https://github.com/cmda-bt/pt-course-22-23/blob/main/LICENSE).

# A proyect developed by Nadine Lewit y Juliana Pansowy Furno

<p align="center">
  <img src="https://pbs.twimg.com/profile_images/1233369746512515072/0MCI1z6T_400x400.jpg"></img>
</p>

# This is a movies and characters proyect for DAI informatics ORT.


This project was made with [Nodejsv18.14.0](https://github.com/nodejs/nodejs.org/blob/main/README.md),
 [Express v4.17.3](https://github.com/expressjs/express/blob/master/Readme.md) and [Nodemon v2.0.22](https://github.com/remy/nodemon/blob/main/README.md).

# Installation

First you have to clone the git repository by using the git bash.

```bash
git clone https://github.com/JulianaPansowyFurno/TPPeliculas.git
```

After opening the project, yo have to open the terminal and install de dependencies.

```bash
npm i
```

By doing this you are installing 

Execute the project.
<br>
With a local installation, nodemon will not be available in your system path or you can't use it directly from the command line. Instead, the local installation of nodemon can be run by calling it from within an npm script.

```bash
npm run start
```

Once is running you can try the diferent endpoints in `Swagger`
# Swagger

Once the proyecte excuted, open the following link: [Swagger endpoints](http://localhost:5000/api-docs), where you will see this screen:


##### ![](/src/Captura.PNG)


Then you have to go down to the bottom and execute the Auth/Login endpoint to get the token. The token will authorize you to execute the rest of the endpoints.

 ![](/src/Auth.png) 

Once you copied the Token, you have to press the following button where tou have to paste it and then put authorize.

![](/src/Boton.PNG)

![](/src/Copia.PNG) 

Now you can try every endpoint without trouble like this Get movie description enpoint!!


![](/src/GetENdpoint.PNG) 




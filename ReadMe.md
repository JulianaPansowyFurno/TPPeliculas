<p align="center">
  <img src="https://campus.ort.edu.ar/static/archivos/banner/6658"></img>
</p>

# Description

### What we used for this proyect

* [Nodejsv18.14.0](https://github.com/nodejs/nodejs.org/blob/main/README.md)
* [Express v4.17.3](https://github.com/expressjs/express/blob/master/Readme.md)
* [Nodemon v2.0.22](https://github.com/remy/nodemon/blob/main/README.md)
* A Sql DataBase in Microsoft SQL management studio
* A Postamn collection
* A Swagger document
 
<!-- description -->
### About
In this proyect we have a SQL Database filled with information about movies, characters and their respective connection between them. We also have a postman archive where you can see all of the diferent endpoints and try the harcorded endpoints whereas in our Swagger document, for example, you will be able to get the movie you want beacause of the dinamic Id.

## Table of contents

* [Description](#description)
* [Installation](#installation)
* [Execute the project](#execute-the-project)
* [Swagger](#swagger)
* [Current project team members](#current-project-team-members)


# Installation

First you have to clone the git repository by using the git bash.

```bash
git clone https://github.com/JulianaPansowyFurno/TPPeliculas.git
```

you should not use the `npm i` comand due to we have included de node modules folder included already.

# Execute the project.

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



# Current project team members

* [JulianaPansowyFurno](https://github.com/JulianaPansowyFurno) -
  **Juliana Pansowy Furno** <<julipansofurno@gmail.com>> (she/her)
* [NadineLewit](https://github.com/NadineLewit) -
  **Nadine Lewit** <<nadine.lewit@gmail.com>> (she/her)


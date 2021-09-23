# Monument Strapi

Backend for monument academy using strapi to handle the framework and graphql/ postgres for queries.

##### Table of Contents

 - [Getting Started](#gettingStarted)
 - [Add Collection](#addCollection)
 - [Customize Front End](#frontEnd)

<a name="gettingStarted"></a>
## Getting started


###### clone project
``` 
git clone https://github.com/elephan-tech/monument-backend.git
```

###### to install dependencies 
```bash 
npm i
```


<a name="addCollection"></a>
## Adding a collection type
1. Run strapi server using the `develop` command. Should see the following: 
```bash
npm run develop
```
![strapi_server](./assets/strapi_server.png?raw=true)

2. open http://localhost:1337/dashboard
3. Register with email and password
4. Landing:

![strapi_server](./assets/strapi_dash.png?raw=true)

5. Click on `Collection-Types Builder`


<a name="frontEnd"></a>
## To customize front end

 - `npm run ui`
 - go to /admin
 - do customizations -> save
 - `npm run build`
 - check dev using `npm run dev`
 - to deploy changes push to master
 

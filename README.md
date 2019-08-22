# vue-challenge

# Challenges
Los desafíos incluyen los mínimos requerimiento para cumplimentarlos pero todo lo que aportes extra será tenido en cuenta. Una regla importante es que los datos que te brindamos no se puede modificar para cumplir con el cada challenge.

## Challenge 1

En este desafío te toca trabajar con un listado de objetos que te damos (challengeOne.json). Tu objetivo es armar un listado que muestre estos objetos agregandole las siquientes acciones:
* Poder filtar por nombre y descripción (sin importar mayúsculas ni tildes)
* Agregá los filtros que creas necesarios
* Poder reordenar por precio
* Paginación de elementos
* Agregá un botón a cada objeto para agregar a "favoritos".
* Checkbox lateral que te permita realizar operaciones grupales. Por ejemplo seleccionar 3 elementos y agregarlos a favoritos.
* Agregar Unit test y E2E test (recomendamos el uso de Jest).

## Challenge 2

En este desafío te damos un componente Vue.js para que modifiques y le agregues las siguientes funcionalidades:

* Lavantar primero el server como se indica debajo para visualizar el componente.
* El componente se encuentra en /src/components/SimpleList.vue
* Al clickear en uno de los objetos listados deben verse todos los datos del mismo (y debe tener opción de cerrarse).
* Agregar la información que creas básica a la primer vista del objeto
* Agregá animacion/es. Por ejemplo al clickear para ver la información extra.


## Project setup

Vue version ^2.6.10

Asegurate de tener [yarn](https://yarnpkg.com/en/docs/install#debian-stable)

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

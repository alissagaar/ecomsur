Resolución de Desafío

Configuraciones Iniciales
1. En la carpeta de Front se realizó la instalando complementaria de axios, redux,react-redux, redux-thunk y react-router-dom.
2. Primero se inició con el setting de Redux. Creando los archivos de store.js, reducer.js y las actions.js.
3. En index.js se envolvió a la 'App' en un BrowserRouter para establecer las tres rutas principales del desafío. Y, a su vez, se envolvió a todo en un Provider para que el store sea accesible en toda la 'App'.
4. En App.js se terminó definiendo las 3 rutas: (1) la que muestra todos los productos (2) la que muestra detalles de un producto en específico y (3) el carrito.

Establecimiento de Acciones
1. Son 4 las acciones principales del desafío. 2 asincrónicas(GET_PRODUCTS, GET_PRODUCT_DETAIL) y 2 sincrónicas (ADD_TO_CART, REMOVE_FROM_CART)
2. Definidas las acciones, se definió el estado inicial y se completó el reducer.

Componente ProductList
1. Cuando se cargué este componente se busca que despaché la acción de getProducts y se muestre los 6 productos disponibles de la API.
2. Comprobando que se trae la información correcta, se mapeó 'productList', para que por cada producto se mostrara su card respectiva(CardA).

Componente CardA(1/2)
1. Comenzamos definiendo que quiero mostrar en la card principal.
2. Para que se muestren las estrellas del rating del producto, instalaré FontAwesome para que los íconos estén en formato SVG, tengan buena resolución y no se muestren pixeleados. (Se instaló en Front lo siguiente : npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons)

Componente CardB
1. Se completó la maquetación de la CardB. Este será la card que se muestre en la ruta '/cart', tiene solo la información  más relevante como la imagen, nombre de producto y precio.
2. Se agregó unos botones para aumentar la cantidad de unidades que el usuario desee comprar. Si este quiere poner una cantidad menor a 1 o mayor al stock disponible del producto, los botones de desabilitaran e impediran esta acción.
3. Se agregó el botón para eliminar a la card del carrito. Pendiente su funcionalidad en este momento.

Componente ProductDisplay
1. Para obtener la información específica de un producto se necesita conocer su 'id'. Por ello utilizamos el hook useParams de react-router-dom. Con este id reservado en una variable, se procede a despachar la acción getProductDetails(id).
2. Con toda la información disponible, se completa la maquetación del componente con información de su imágen, nombre, marca, review, cantidad de reviews y su respectiva descripción.

Componente CardA(2/2)
1. Se agrega un onClick al botón de agregar al carrito, este va a despachar la función addToCart(producto) y se actualizará el estado del carrito.




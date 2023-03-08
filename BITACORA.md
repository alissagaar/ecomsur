El proyecto se inicializa con 'npm run dev'

Resolución de Desafío

Configuraciones Iniciales
1. En la carpeta de Front se realizó la instalación complementaria de axios,redux, react-redux, redux-thunk y react-router-dom.
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

Componente CardB(1/2)
1. Se completó la maquetación de la CardB. Este será la card que se muestre en la ruta '/cart', tiene solo la información  más relevante como la imagen, nombre de producto y precio.
2. Se agregó unos botones para aumentar la cantidad de unidades que el usuario desee comprar. Si este quiere poner una cantidad menor a 1 o mayor al stock disponible del producto, los botones de desabilitaran e impediran esta acción.
3. Se agregó el botón para eliminar a la card del carrito. Pendiente su funcionalidad en este momento.

Componente ProductDisplay
1. Para obtener la información específica de un producto se necesita conocer su 'id'. Por ello utilizamos el hook useParams de react-router-dom. Con este id reservado en una variable, se procede a despachar la acción getProductDetails(id).
2. Con toda la información disponible, se completa la maquetación del componente con información de su imágen, nombre, marca, review, cantidad de reviews y su respectiva descripción.

Componente CardA(2/2)
1. Se agrega un onClick al botón de agregar al carrito, este va a despachar la función addToCart(producto) y se actualizará el estado del carrito.
2. Se controla la situación en donde el usuario clickee más de dos veces en 'agregar al carrito'. En caso que ya haya realizado un click y se haya despachado la acción, los siguientes clickeos no despacharán la acción y no habrá productos repetidos en el carrito.

Componente Cart
1. Traemos la información sobre los productos que se encuentran en el carrito. Si este está vacío, avisara al usuario sobre ello. Caso contrario mapeará todos los productos se encuentren en la cart por una CardB pasandole las siguientes props: id, name, image, price, stock.
2. Pendiente la imagen para el empty state.

Componente NavBar
1. El navBar es sencillo. Unicamente tiene el logo(que al hacer click redirecciona al componente Product List) y información de cantidad de items del carrito(también, sí se hace click, el usuario será llevado a la ruta del carrito)
2. Ahora que el carrito tiene cierta cantidad de productos, este puede mostrar dinámicamente su cantidad en el navBar. Empleamos el hook de react-redux useSelector para traer la información del carrito y modificamos el '0' por la longitud del array del carrito.
3. Lo agregamos al inicio de los componentes ProductList, ProductDisplay y Cart

Componente CardB(2/2)
1. Se completó la función para eliminar el producto del carrito, agregando un onClick al botón que despacha la acción removeFromCart(id).

___

Estilos CSS

Index.css
1. Se inició con las configuraciones generales para facilitar los estilos posteriores.
2. También se estableció la familia tipográfica de la página, Poppins. Para ello, se busco en Google Fonts y se copio el código en el <head> del index.html (línea 27-29).

CardA
1. Siguiento un estilo atómico, comenzamos por el componente más pequeño. Estableciendo jerarquías visuales de la info en base a tamaño y colores.

ProductList
1. Existen dos formas de organizar las cards en la página, grid y flex. Se decidió por flex.
2. Una vez organizado las cards de productos y, para que no se viera tan vacío, se realizó un pequeño banner con un fondo degradado.
3. El diseño es responsive.

NavBar
1. Completamos los estilos de la navbar. Agregando un color de fondo y quitanto los text-decoration de <a>. El estilo ahora se verá reflejado también en otros componentes que la utilicen.
2. Se puso un nombre hipotético a la página para que esta no diga 'Logo'.

ProductDisplay
1. Para que el diseño sea responsive en este caso se aplicó dos media queries para dispositivos de 400 y 500 px. La mayor diferencia es que la orientación del flex en desktok es row y, en responsive, column.
2. En el proceso de estilo, se termino por decidir agregar el botón de agregar al carrito.

CardB
1. La diferencia en estilos de la CardA con la CardB es su orientación principal. En este caso es horizontal.
2. Se agregaron las funcionalidades para que cuando se utilicen los botones + o menos, en vez de ver únicamente el cambio en el estado local, esta al clickearse despache o HandlePlus o HandleMinus.

Cart
1. Alineamos los CardB y le damos un espacio entre ellos.
2. Completamos el empty state con una gráfica, mensaje y un botón que te redirige al ProductList.






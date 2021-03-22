# Router

These components will control the routing of the current APP.

Installation: Using NPM within the project´s folder:
```
    npm install react-router-dom
```

For the case of this APP the routs are controlled by two files:
- AppRouter.js
- AuthRouter.js

This will allow to have two levels of routing.

The syntax and imports required are explained on https://reactrouter.com/web/guides/quick-start .

syntax:
```
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/somePath" 
                        component={ SomeComponent }    
                    />
                    <Route 
                        exact
                        path="/" 
                        component={ SomeOtherComponent }
                    />
                    <Redirect to="/defaultPathToRedirect" />
                </Switch>
            </div>
        </Router>
    )
};
```

 - <Router>: is the main container of the controller. AuthRouter.js does not require <Router> because it is contained within the <Router> of AppRouter.js

 - <Switch>: Permits the presence of various routes.

 - <Route>: is the container of the individual view.

 - path: Defines the URL path to access the route.

 - exact: Establishes the defined path as exact. Ensures that the route is returned only if the path is an exact match to the given URL.

 - component: The component needed to be shown with this path must be placed within the component.

 - <Redirect to="">: Redirects the user to a desire URL location if a wrong URL is written.  

# AppRouter.js

This file manages the main view, which is in the <JournalScreen /> component, and the <AuthRouter /> component.

# AuthRouter.js

This files manages the <LoginScreen /> and <RegisterScreen /> components.


# Português
# Router

Estes componentes controlarão as rotas deste aplicativo.

Instalação: Usando NPM dentro da pasta do projeto:
```
    npm install react-router-dom
```
Para o caso deste aplicativo as rotas são controladas pelos dois arquivos: 
- AppRouter.js
- AuthRouter.js

Esto permitirá ter dois níveis de rotemento.

A sintaxe e importações necessárias são explicadas https://reactrouter.com/web/guides/quick-start .

sintaxe:
```
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/somePath" 
                        component={ SomeComponent }    
                    />
                    <Route 
                        exact
                        path="/" 
                        component={ SomeOtherComponent }
                    />
                    <Redirect to="/defaultPathToRedirect" />
                </Switch>
            </div>
        </Router>
    )
};
```

- <Router>: é o contêiner principal do controlador. AuthRouter.js não requer de <Router> porque ele mesmo é contido no <Router> de AppRotuer.js

 - <Switch>: permite a presença de várias rotas.

 - <Route>: é o contêiner da visualização individual

 - path: Define o "path" da URL para acessar à rota.

 - exact: Estabelece o "path" definido como exato. Garante que a rota seja retornada apenas se o "path" for uma correspondência exata do URL.

 - component: O componente requer a ser mostrado com o "path" deve ser colocado dentro do componente.

 - <Redirect to="">: Redireciona o usuário para o URL desejado em caso de um URL incorreto seja escrito.

 # AppRouter.js

Este arquivo controla a visualização principal, contida no componente <JornalScreen />, e o componente <AuthRouter />

# AuthRouter.js

Este arquivo controla os componentes <LoginScreen /> e <RegisterScreen />
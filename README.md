# Initialisation
## clonage de git, ajout d'une nouvelle branche et création d'un projet react
```bash
git clone https://github.com/gillesretiere/hammer-marteau.git
cd hammer-marteau
git checkout -b "new-version"
git pull origin main
npx create-react-app .
git add .
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
npm install postcss@latest
npm install ajv@latest ajv-keywords@latest
```

## Création du projet dans VSCode
Après avoir sélectionner le répertoire où se trouve le projet, faire un commit sur la branche "new-version"

## Lancement du projet
```bash
cd src
npm start
```
# Personnalisation
## Palette & Typographie
### Palette
On peut utiliser l'outil ColorName ou bien un autre pour trouver les codes couleur et les nuances à partir d'une couleur.
ColorName : https://www.color-name.com/extreme-red.color#google_vignette
Chir.ag : https://chir.ag/projects/name-that-color/#6195ED

Pour finir, on utiliser https://www.tints.dev pour générer une palette de chaque couleur

Pour plus d'informations, consulter cet excellent tuto : https://tomsouthall.com/blog/tailwind-custom-colours

### Dépendance Material UI
Il faut installer les packages de base MUI
```bash
// with npm
npm install @mui/material @emotion/react @emotion/styled
```
Dans le répertoire src, créer un fichier ```theme.js```, qui va contenir les constantes de couleurs et de typo pour Material.
 
## index.js
Il faut d'abord fixer la dépendance de  cette ligne : 
```javascript
import { BrowserRouter, Routes, Route, } from "react-router-dom";
```
Il suffit d'installer le package :
```bash
npm install react-router-dom --save
```
Ensuite, créer une route (/) pointant vers une page ```HomePage.jsx``` précédemment créée.

```javascript
import theme from './theme';
import HomePage from './pages/HomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme} defaultMode="dark">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route component={HomePage} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <App />
            </main>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>
);
```






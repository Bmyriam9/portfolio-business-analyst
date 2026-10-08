# Portfolio — Business Analyste / AMOA-MOE

Portfolio professionnel statique conçu pour être déployé avec **GitHub Pages**.

## Technologies

- HTML5
- CSS3
- JavaScript vanilla

Aucun framework n'est nécessaire.

## Structure

```text
portfolio-business-analyst/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── images/
```

## Personnalisation

Avant de publier la version définitive, remplacer dans `index.html` :

- le nom
- l'email
- le lien LinkedIn
- le lien GitHub
- les formations
- les expériences
- les projets
- les compétences
- les descriptions

Le portfolio fourni est un **exemple de structure** : il faut vérifier chaque information avec le CV définitif avant une candidature.

## Déploiement GitHub Pages

1. Créer un nouveau repository GitHub.
2. Déposer `index.html`, `css/`, `js/` et `assets/` à la racine.
3. Aller dans **Settings → Pages**.
4. Dans **Build and deployment**, choisir :
   - Source : `Deploy from a branch`
   - Branch : `main`
   - Folder : `/ (root)`
5. Enregistrer.
6. GitHub Pages générera l'adresse du portfolio.

## Modification

Le contenu est volontairement séparé du style :

- `index.html` → contenu
- `css/style.css` → design
- `js/script.js` → interactions

Tu peux donc modifier ton CV et tes projets sans devoir refaire tout le design.

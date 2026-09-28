# KESSEL ELECTRONICS (KESSEL TECH)
> Plateforme e-commerce d'appareils électroniques certifiés (Ventilateurs, Réfrigérateurs, Téléphones 5G, Ampoules LED, Machines & Informatique).

**Fondateur & Développeur** : LONTIO KESSEL  
**WhatsApp Officiel** : +237 650 196 251  
**GitHub** : [https://github.com/LONTIo-RICHY](https://github.com/LONTIo-RICHY)  
**Email** : lontiokessel@gmail.com  

---

## 🚀 Démarrage Rapide en Local

### 1. Prérequis
Assurez-vous d'avoir installé **Node.js** (version 18, 20 ou supérieure) sur votre ordinateur :
- Téléchargement officiel : [https://nodejs.org](https://nodejs.org)

### 2. Installation des Dépendances
Ouvrez votre terminal (ou l'invite de commande dans VS Code) à la racine du projet et tapez :
```bash
npm install
```

### 3. Lancement du Serveur de Développement
Pour lancer le site avec rechargement à chaud (Hot Reload) :
```bash
npm run dev
```
Le terminal affichera une adresse locale, généralement :
👉 **`http://localhost:5173`** (ou `http://localhost:3000`)

Ouvrez ce lien dans votre navigateur pour visualiser le site. Toute modification effectuée dans les fichiers s'affichera immédiatement à l'écran !

---

## 📂 Structure du Code Source pour vos Modifications

Toutes les données et pages sont facilement modifiables dans le dossier `src/` :

- **`src/data/products.ts`** :
  - Contient **la liste de tous les produits et variétés**, leurs descriptions, prix en FCFA, fiches techniques et images.
  - C'est le fichier principal à modifier si vous souhaitez ajouter de nouveaux appareils, ajuster les prix ou changer les caractéristiques.
- **`src/types/index.ts`** :
  - Contient vos coordonnées officielles (`CREATOR_INFO`) : numéro WhatsApp, nom, courriel et lien GitHub.
- **`src/views/HomeView.tsx`** :
  - La page d'accueil avec la présentation des 5 rayons (Ventilateurs, Réfrigérateurs, Téléphones, Ampoules, Machines).
- **`src/views/DepartmentView.tsx`** :
  - La page dédiée qui se charge lorsqu'on clique sur une catégorie pour voir directement tous ses modèles.
- **`src/views/ProductDetailView.tsx`** :
  - La fiche détaillée de chaque produit avec le module de commande WhatsApp et le panier.
- **`src/assets/images/`** :
  - Dossier où sont stockées toutes les photographies de studio des produits.

---

## 📦 Générer la Version de Production (Pour Mise en Ligne)

Quand vous êtes prêt à déployer le site sur un hébergeur (Vercel, Netlify, Render, Cloudflare Pages ou hébergement classique) :
```bash
npm run build
```
Cette commande crée un dossier **`dist/`** contenant le site compilé, ultra-rapide et prêt pour la production.

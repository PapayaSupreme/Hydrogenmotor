==================LAUNCH WITHOUT CHATBOT API=================
just launch it on ur browser as an html

===================LAUNCH WITH CHATBOT=================
Launch start_and_launch.bat and enter your OpenRouter API key if prompted

Basic Web design website advocating for the hydrogen motor. Uses HTML5, CSS3 and JS.
Uses node.js for Chatbot, but not required for the rest to work

# 🚗 Hydrogen Motor - Site Web Éducatif

## 📝 Description
Plateforme web éducative sur les moteurs à hydrogène avec chatbot intégré. Le site propose :
- Interface interactive du moteur à hydrogène
- Chatbot spécialisé (modèle Qwen)
- Calculateur de consommation
- Jeux éducatifs sur la pile à combustible

## 🛠️ Prérequis
- Node.js v18.19.1 ou supérieur
- Clé API OpenRouter (pour le chatbot)
- Navigateur web moderne

## 🚀 Installation et Lancement

### Méthode Simple (Recommandée)
1. Double-cliquez sur `setup_and_launch.bat`
2. Suivez les instructions à l'écran
3. Entrez votre clé API OpenRouter si demandé

### Méthode Manuelle
```bash
# Installez les dépendances
npm install express cors axios dotenv

# Créez un fichier .env avec votre clé
echo OPENROUTER_API_KEY=votre-clé-api > .env

# Lancez le serveur
node js/server.js
```

## 📋 Fonctionnalités

### 🤖 Chatbot Intelligent (Qwen)
- Assistance en temps réel
- Spécialisé dans les moteurs à hydrogène
- Interface intuitive

### 🔄 Moteur Interactif
- Visualisation des composants
- Zones cliquables
- Explications détaillées

### 📊 Calculateur de Consommation
- Comparaison essence vs hydrogène
- Estimation des coûts
- Profils de véhicules personnalisés

### 🎮 Section Éducative
- Jeu drag & drop
- Fiches explicatives
- Contenu pédagogique

## 📁 Structure du Projet
```
Hydrogen_Motor/
├── assets/
│   └── img/           # Images et ressources
├── css/              # Styles
├── js/               # Scripts
│   ├── server.js     # Backend du chatbot
│   ├── chatbot.js    # Interface du chatbot
│   └── calculator.js # Logique du calculateur
├── *.html           # Pages du site
└── setup_and_launch.bat # Script de lancement
```

## 🔧 Technologies Utilisées
- Frontend : HTML5, CSS3, JavaScript
- Backend : Node.js, Express
- API : OpenRouter (modèle Qwen)
- Dépendances : axios, cors, dotenv

## 👥 Auteurs
- Marcel Brian
- Pablo Ferrera

## 📄 Licence
© 2025 EFREI Paris - Tous droits réservés

## 🤝 Contribution
Les contributions sont bienvenues ! Pour contribuer :
1. Forkez le projet
2. Créez une branche (`git checkout -b feature/NouvelleFeature`)
3. Committez vos changements (`git commit -m 'Ajout de feature'`)
4. Pushez vers la branche (`git push origin feature/NouvelleFeature`)
5. Ouvrez une Pull Request

## 📞 Support
Pour toute question :
- Ouvrez une issue sur le repository
- Contactez les auteurs
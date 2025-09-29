# Puy de Dome Parapente (PDDP)

Une application web regroupant des informations et les conditions de vol en temps réel pour le parapente au Puy de Dôme, Auvergne, France.

Retrouvez l'application ici : [https://pdd.dprslt.fr](https://pdd.dprslt.fr)

[Le Puy de Dôme sur SpotAir](https://www.spotair.mobi/spot/45247)

[Le Puy de Dôme sur HEHOL](https://hehol.fr/gliding/plan?points=2.96380_45.77180)

Ce site est dévellopé en autonomie et n'est pas affilié à la FFVL.

## Fonctionnalités

- **Données Météo en Temps Réel** :
    - Station météo OPGC (Observatoire de Physique du Globe de Clermont-Ferrand)
    - Station Holfuy PDD Nord (1464)
    - Vitesse et direction du vent, température et conditions atmosphériques
    - Intégration de différentes sources de prévisions : [MétéoParapente](https://meteo-parapente.com/#/), [Windy](https://www.windy.com/), [MeteoBlue](https://www.meteoblue.com/fr)

- **Informations de Vol** :
    - Horaires du train Panoramique des Dômes
    - Flux des webcams
    - Réglementation aérienne dans la région
    - NOTAM et Supaip
    - Stations météo à proximité

## Stack Technologique

- **Frontend** : Next.js
- **Style** : SASS/SCSS
- **Visualisation de Données** : Nivo charts
- **Icônes** : Font Awesome
- **Gestion Date/Heure** : Luxon
- **Language** : TypeScript

## Comment installer l'application

Il s'agit d'une application PWA (Progressive Web App). Elle peut être installée sur votre appareil mobile, tablette ou votre ordinateur directement depuis le navigateur.

Vous ne la trouverez pas sur l'App Store ou Google Play, elle est disponible directement sur le site

Sur mobile, il vous faut cliquer sur le bouton "Ajouter au menu" ou "Ajouter à l'écran d'accueil" dans le menu déroulant de votre navigateur.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à soumettre une Pull Request.

### Comment contribuer / lancer l'app en local

#### Prérequis

- Node.js
- npm ou yarn

#### Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/dprslt/pdd-gliding.git
cd pdd-gliding
```

2. Installer les dépendances :

```bash
npm install
# ou
yarn install
```

3. Démarrer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

L'application sera disponible sur `http://localhost:4000`

Pour le reste, vous pouvez vous référer à la documentation de [NextJs](https://nextjs.org/docs) avec l'App Routeur.

## Remerciements

Un grand merci à :

- Freedom Parapente pour leur soutien
- OPGC pour la fourniture des données météorologiques
- Tous les donateurs qui aident à maintenir ce site en activité

## Contact

Pour toute question ou suggestion, veuillez contacter :

- Email : contact@dprslt.fr
- Site web : https://pdd.dprslt.fr

## Ca vous plait ?

Ce projet vous plait et vous voulez me soutenir, un don est toujour le bienvenu : [Payez moi une bière](https://pdd.dprslt.fr/support).

Ce projet vous plait et vous donnes des idées ? N'hésitez pas à me contacter, je travaille aussi en Freelance.

Vous voulez en savoir plus sur les espaces aériens ? J'ai lancé [HEHOL](http://hehol.fr) en 2025, jettez y un oeil !

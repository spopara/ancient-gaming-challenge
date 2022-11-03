# AncientGamingChellange

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Task:

Create an Angular project with 2 routes:

-Grid of boxes (list of boxes) showing name, iconUrl, cost.
-View Box (detail box page) with a button to open the box.
 During the opening time, a loading icon should be displayed.
 After the box is open, show the won item.

(queries / mutation /subscription and auth url listed below)

Create a header with a login link. After logging in show the current logged in user name and balance which must be subscribed to for updates.

### Authentication:

Login URL:Steam Community  (You'll get a Cookie forapi-staging.csgoroll.com which can be used in your local environment).

When you arrive at www-staging.csgoroll.com you’ll be asked to login with HTTP Basic Auth in a dialog over the page initially. The credentials are:

Username: ancient
Password: whatnot


### Looking for usage (required):

Prettier (this will standardize formatting and simplify the review process)
Angular 12/13/14 (latest) in TypeScript (project generated using Angular CLI)
RxJS or NgRx
Apollo GraphQL - https://api-staging.csgoroll.com/graphql (playground contains full documentation)
SCSS / CSS vars
OnPush change detection strategy

### Important:

Clean/readable code
The box opening doesn't need to have a complex animation, we're mainly interested that you're able to read/use the GraphQL API (fully documented) and RxJs
Feel free to use a css library like Tailwind or Bootstrap

### Delivery:

Github, Gitlab, Bitbucket, Stackblitz or any Git repository to share

 
### Queries:

Current user and wallets (you can SUM them in header):

query {
  currentUser {
    id
    name
    wallets {
      id
      amount
      currency
    }
  }
}

Box list

query {
  boxes(free: false, purchasable: true, openable: true) {
    edges {
      node {
        id
        name
        iconUrl
        cost
      }
    }
  }
}

Mutations:

Open a Box (you will receive an item upon opening the box):

mutation OpenBox($input: OpenBoxInput!) {
  openBox(input: $input) {
    boxOpenings {
      id
      itemVariant {
        id
        name
        value
      }
    }
  }
}

Subscriptions

Wallet updates will arrive via WebSocket upon opening boxes

subscription OnUpdateWallet {
  updateWallet {
    wallet {
      id
      amount
      name
    }
  }
}

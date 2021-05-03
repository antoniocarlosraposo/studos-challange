# Studos Challange

Simple application develop just to showcase some uses of React-Native.

Main functionalities:

1. Filter Tab
2. Searchbar
3. Theme Change


## Running the project

- Clone the project:
```
$ git clone https://github.com/antoniocarlosraposo/studos-challange.git
```

- Install dependencies:
```
$ yarn install
```

- If ios, install cocoa pods dependencies:
```
$ cd ios && pod install
```

- Execute
```
$ yarn ios
```
OR
```
$ yarn android
```

## Tech and libraries


### React native

- O [React Native](https://reactnative.dev/) foi utilizado em sua versão 0.63.0. This is the version that runs on expo SDK 39.

### TypeScript

- The app is build using [Typescript](https://www.typescriptlang.org/), it grants bring static typing for javascript, granting us the ability to use the intelisense for our code editor, facilitates the refactoring of code, saves us debuging time and brings more assertiveness when accessing properties of our variables.
- Interfaces were created with payload responsed from the API, so the whole application is aware of it's data structure.

### Main libs:

- [axios](https://github.com/axios/axios) for api access.
- [reduxjs toolkit](https://redux-toolkit.js.org/) for simple state management of the application.
- [react navigation v5](https://reactnavigation.org/) to allow us to navigate between screens.
- [styled-components](https://styled-components.com/) to simplify separation between code and stylesheets.

### Code quality

To ensure the code follow the some pattern and is correctly typed, some libs were used:

- [eslint](https://eslint.org/) to enforce code pattern.
- [prettier](https://prettier.io/) for code formatting.

### Patterns

#### Componentization of reusable code

UI components, like buttons, lists were created to avoid code duplication. The components were create to be completely reusable and they do not contain any business logic.

#### Separation of concerns

- A service layer was created and acts as bridge between layers.
- The redux connects the outworld, the API and our visual layers.


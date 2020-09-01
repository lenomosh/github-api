# Angular Github APi

Angular project that allows you to search for github Users. You can also search for repositories and view repos for a specific user.

# Project Author

[Lennox Omondi](https://linkedin.com/in/lenomosh)

# Project Setup Instructions

- CLone the repo.
- `cd` to the directory and run `yarn` or   `npm install`
- created a directory named environment inside the `src` folder and create two files: `environment.ts` and `environement.prod.ts`
- Add the followinf code to your `enviromnent.ts`
```
export const environment = {
  production: false,
  apiKey: 'your git api Key here'
};
```
- Add the following code to your `enviromnent.prod.ts`
```
export const environment = {
  production: true,
  apiKey: 'your git api key here'

};
```
<i>Click [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to learn how to generate api Key</i>

- After all the packages have been installed, run `ng serve`. This will run the project on (http://localhost:4200/)


## License and Copyright information.
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
-  2020 © <a href="https://linkedin.com/in/lenomosh" target="_blank">Lennox Omondi</a>.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

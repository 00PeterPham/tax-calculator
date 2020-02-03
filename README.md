## Description

A Canadian federal income tax calculator using the tax brackets from 2019.

In 2019, Canada’s Income Tax Brackets were:

- 15% on the first \$47,630 of taxable income, plus
- 20.5% on the next $47,629 of taxable income (on the portion of taxable income over 47,630 up to $95,259), plus
- 26% on the next $52,408 of taxable income (on the portion of taxable income over $95,259 up to \$147,667), plus
- 29% on the next $62,704 of taxable income (on the portion of taxable income over 147,667 up to $210,371), plus
- 33% of taxable income over \$210,371

## Getting Started:

Install node>=10.0.0 and npm>=6.0.0.
Run npm install to install root dependencies.

## Run Development Server

npm run start

- runs webpack dev server on localhost:8080
- contentBase is ./dist

## Run Build for Prouction

npm run build

- outputs in ./dist folder

## Run Unit Tests

- npm run test

## Project Folder Strucutre

src

- components
  - component folders
    - react component file
    - component style file
- css
  - constants.less: style values used by multiple components
  - elements.less: element styles used by multiple components
- pages:
  - App: salary state, routes
  - Form: form component where user inputs salary
  - TaxResults: tax results component that displays the calculated federal income tax
- shared: functions used my multiple components
- index.js: renders App

public

- index.html: includes link to Google font
- favicon.png

dist

- favicon.png
- index.html
- main.js

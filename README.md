# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Social proof section solution](#frontend-mentor---social-proof-section-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Scenario 1](#scenario-1)
        - [Next approach](#next-approach)
      - [Scenario 2: Create custom method '.toCapitalize()'](#scenario-2-create-custom-method-tocapitalize)
        - [Part 1: Declare in a .d.ts file:](#part-1-declare-in-a-dts-file)
      - [Scenario 3: Layout](#scenario-3-layout)
        - [Next approach](#next-approach-1)
      - [Scenario 4: Creating variables in styles to be used in className](#scenario-4-creating-variables-in-styles-to-be-used-in-classname)
      - [Scenario 5: Displaying multiple backgrounds](#scenario-5-displaying-multiple-backgrounds)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
    - [AI Collaboration](#ai-collaboration)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
- [React + TypeScript + Vite](#react--typescript--vite)
  - [React Compiler](#react-compiler)
  - [Expanding the ESLint configuration](#expanding-the-eslint-configuration)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Screenshot

Mobile:
![20260804131906.png](images/20260804131906.png)

Desktop:
![20260804131948.png](images/20260804131948.png)

### Links

- Solution URL: [https://github.com/yoranguy/frontendmentor-013-socialproof](https://github.com/yoranguy/frontendmentor-013-socialproof)
- Live Site URL: [https://yoranguy-frontendmentor-socialproof.vercel.app/](https://yoranguy-frontendmentor-socialproof.vercel.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://tailwindcss.com) - For styles


### What I learned

#### Scenario 1

**Situation:** Trying to display the rating of stars based on the data specified in the json file (./public/data/data.json).
**Task:** To add stars to the rating `<div>`

**Action:** My through process was to add a function to add starts to the `div` element.

```tsx 
const tokensArray = Array.from({length: props.noOfToken});

    function displayToken(id:number, limit: number, token: string): void
    {
        const ratingElement: HTMLElement = document.getElementById(`'rating-'+${id}`) ?? document.createElement('div');
        const rating: Document= new Document(); 
        let imgElement = new Document().createElement('img')
        for(let x = 0; x < limit; x++)
        {
            imgElement = rating.createElement('img');
            imgElement.setAttribute("src",token);
            imgElement.setAttribute("alt","star");
            // <img src=${token} alt="" />`;
        }

        ratingElement.appendChild(imgElement);
    }

    displayToken(props.id, props.noOfToken, props.tokenURL)
```
**Result:** This has result no starts being displayed. Then I thought, the `<div>` element with the id  hasn't been created to add the img element into the HTML.

##### Next approach

**Situation:** Find a way to the loop the number of time specified based in the data in the json file to when rendering the component.

**Task:** To loop during rendering the component.

**Action:** 

```tsx
// Initialize an array with the number specified by the data(.json) file.

const tokensArray = Array.from({length: props.noOfToken}); // This has created an array specifying the length. Elements are undefined.

...

// loop through the array to "output" the <img> element 
{tokensArray.map(( _: unknown, index:number) => 
  <img src={props.tokenURL} alt="star" key={index} />
)}

```

**Result:** Being able to display the number of "stars" specified by the data(.json) file.

---

#### Scenario 2: Create custom method '.toCapitalize()'

**Situation:** For the String class there is method .toUppercase() and .toLowercase(). But I want a method where .toCapitalize(). 

This method is it capitalize the first letter of the word/string.

**Task:** Find a way to add to do this.

**Action:** Googled how to do this. AI came back with a response. And a stack overflow post came up [Stack Overflow Post](https://stackoverflow.com/questions/39877156/how-to-extend-string-prototype-and-use-it-next-in-typescript)

##### Part 1: Declare in a .d.ts file:

File Location: ./src/types/string.d.ts

```ts
interface String {
  toCapitalize(): string;
}
```

Part 2: Implement

File Location: ./src/utils/stringExtensions.ts
```ts
String.prototype.toCapitalize = function (): string {
  if (!this) return "";
  return this.charAt(0).toUpperCase() + this.slice(1);
};

```

Part 3: Import

Example File Location: ./src/features/components/ 

```ts
import '../../utils/stringExtensions';
```

---

#### Scenario 3: Layout

**Situation:** When mobile version was complete, the next step was to create the desktop version.

**Task:** To create a layout where the top row has 2 areas and bottom row takes 2 areas
i.e., [ 1 ][ 2 ]
      [    3   ]

**Action:** I continued to use flexbox only to achieve this with trial and error and using tailwindcss doc. 

**Result:** I couldn't find a way to do this.

##### Next approach

**Situation:** Unable to create the layout with flexbox, attempting to use gridbox

**Task:** Research/Relearn gridbox and achieve the layout

**Action:** Update the areas where it needs the grid layout.

**Result:** Achieved the layout.


#### Scenario 4: Creating variables in styles to be used in className

Example:

```tsx

<div className="flex flex-col flex-nowrap gap-6 pt-[45px] pb-[40px] pl-[35px] pr-[35px] bg-[hsl(300,43%,22%)] rounded-md sm:mt-('--mt-desktop)" style={{'--mt-desktop':`${marginBase * props.id}px`}as React.CSSProperties}>

```

#### Scenario 5: Displaying multiple backgrounds

Example:

```tsx
<div className="min-h-screen w-screen flex flex-col flex-wrap gap-6 justify-center items-center bg-[hsl(139, 44%, 93%)] bg-scroll bg-no-repeat bg-position-[top_0dvh_left_0dvw,bottom_0dvh_right_0dvh] bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]" style={{'--bg-desktop': `url('/images/bg-pattern-top-desktop.svg'),url('/images/bg-pattern-bottom-desktop.svg')`,'--bg-mobile': `url('/images/bg-pattern-top-mobile.svg'),url('/images/bg-pattern-bottom-mobile.svg')`
```


### Continued development

**Topic:** Organise files
Finding myself need a way to organise my files for components.

```console

src/
├── assets/             # Logos, fonts, and global global images
├── components/         # Shared global UI primitives
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   └── Button.test.jsx
│   └── Input/
├── features/           # Domain-driven features
│   ├── product-feed/
│   │   ├── components/ # Components used ONLY by this feature
│   │   ├── hooks/      # Local custom hooks
│   │   └── services/   # Feature-specific API requests
│   └── shopping-cart/
├── pages/              # Main route endpoints (Layout containers)
├── hooks/              # Global custom hooks (e.g., useTheme)
├── utils/              # Pure helper functions (formatting, math)
└── App.jsx             # App entry point and global providers

```

### Useful resources

- [CSS flexbox](https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png) - This helped me with CSS flexbox layout.
- [https://tailwindcss.com/docs](https://tailwindcss.com/docs) - This is with styling
- [https://grid.malven.co/](https://grid.malven.co/) - This helped me with the CSS grid layout 

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

### AI Collaboration

Google AI

## Author

- Linktree - [https://linktr.ee/yoranguy](https://linktr.ee/yoranguy)
- Frontend Mentor - [@yoranguy](https://www.frontendmentor.io/profile/yoranguy)
- Github - [@yoranguy](https://github.com/yoranguy)

## Acknowledgments

None


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

# Imgur Clone
A feature slice of Imgur that searches and displays images/video by Album type.

## Running Project
This project is built with Vite and npm.

First install dependencies with:
```
npm i
```

Then run:
```
npm run dev
```

To build run:
```
npm run build
```

## Notable App Features
- Search with debounce
- Simple page routing
- Custom lightbox
- Responsive image loading

## Notable Project Features
- Scalable 2 layer structure (application, presentation)
- Scalable component structure
- Use of Typescript
- Use of data models at application level for ingested data
- Hook acting as bridge between layers

## Overview
The focus on the exercise was to build something that evoked a production grade application. The architecture and
structure is absolutely overkill for something this trivial, but it should help demonstrate where things might live and
give a sense of how it could scale easily.

Below is a component diagram to get a better sense of the architecture:

![imgur-system-design.jpg](doc-resources%2Fimgur-system-design.jpg)

## Room for improvement
- Preserve previous search
    - When moving to an album page and back again, the previous search is not preserved.
- Better styling

## Tech
- React
- React Router
    - for basic page routing
- Axios
    - reliable out of the box HTTP wrapper
- Vite
    - lightweight, zero config, flexible



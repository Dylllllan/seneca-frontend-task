# Seneca Frontend Task

## Running the project

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

## Assumptions

- Assumes that the background gradient is linearly interpolated in the RGB color space between the red gradient and orange gradient provided in the design.
  - I found [this blog post](https://www.alanzucconi.com/2016/01/06/colour-interpolation/) to be an interesting resource about colour interpolation, and figured that there was not much difference in using RGB vs HSL for transitions between red and orange.
- Assumes that on smaller screens (less than 768px), all answer toggles should be displayed in the stacked column layout.
- Assumes that the question data is loaded and available before the component is rendered (i.e. with the rest of the lesson). The component does not implement any loading states.

## Limitations

- When testing the project with others, I received feedback that the transitions between the incorrect background gradients were difficult to observe. This could be improved by choosing gradients with more contrast between the start and end states.
- The project does not have any tests for the components.
- When an option is selected, the toggle question and all nested answer components are re-rendered. This is a trade-off to keep the answer state and scoring calculations in the parent question component.
  - It was interesting to consider the trade-off between what would be most optimal for performance (and that it is negligible at this scale), and what is most optimal for readability and maintainability of the code.
- While the project was tested in the latest versions of Google Chrome on desktop and Safari on mobile, it was not tested in older versions of browsers where there could be compatibility issues with certain CSS techniques used (e.g. transitions, flexbox, grid).

Dylan Aujla  
03/11/2024

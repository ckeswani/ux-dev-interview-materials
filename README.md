# Interview materials for UX dev
## The scenario

Assume you are working on the admin controls of a product that allows users to set up their own input forms. Create a control to modify the properties of a multiple choice field. For the purpose of this exercise, it’s not necessary to have the control actually build a multiple choice field; assume that functionality is handled by a service and you just need to interact with its APIs. Retrieve JSON metadata from https://api.myjson.com/bins/4eemv?pretty=1.  The submit button should create a json object and post it to  http://www.mocky.io/v2/566061f21200008e3aabd919  It should also log the post data to the console.
Use of your favorite libraries is permitted but optional.  You will demo this from a browser - you are free to use any or no webserver.  
## Design
![](https://github.com/ckeswani/ux-dev-interview-materials/blob/master/spec/FieldBuilderRegular.png)

*For screens where width > 420*

![](https://github.com/ckeswani/ux-dev-interview-materials/blob/master/spec/FieldBuilderCompact.png)

*For screens where width <= 420.*

The mockup is intended to give an idea of the desired functionality--you can make different visual design choices as long as the result meets the requirements specified below.

## Requirements
* The Label field is required.
* Individual choices cannot be longer than 40 characters. If a choice is longer than 40 characters, the excess characters must be visually distinct.
* There cannot be more than 50 choices altogether.
* If the default value is not one of the choices, it should be added to the list of choices.
* Layout must be responsive to multiple device sizes (phone, tablet, desktop browser).  The spec shows the layout at full size and phone size.

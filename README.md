# TODO App

Project to make an app where users can create TODOs, categorize them, and show  
them based on the category selected, along with other features

## TODOs

_Create object to store various parts of a todo  
Probably use classes with composition_

### Add title

Constructor will take a title and set that to a title property

### Add description

Same as title logic but for a short description

### Add due date

Same as title logic but for a due date  
Should be optional

### Add priority

Same as title logic but for a priority weight  
1 highest and 5 lowest  
Should be optional

### Assign to Project

Each TODO should automatically be added to a default project  
Property to indicate which project it is in

### Store TODOS

Each new TODO that is created gets pushed to the end of an array

## Projects

_Create object to store various parts of a project  
Probably use classes with composition_

### Add title

Constuctor will take title, set that to tile property

### Add description

Same as title logic but for a short description

### Add Color

Same as title logic but for a unique color  
Should be optional

### Store TODOs

should be a private property that is an array  
Method to add todos to the project  
Method to remove TODOs

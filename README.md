Project: Task App
A Task App created with React.js exploring usage and implementation of class components. The project is inspired by The Odin Project curriculum.

<a href="https://dicristea.github.io/task-app/">🔗Live Preview</a>

Overview
Features:
- add, delete and edit projects and tasks
- write description for the task, choose its date and priority
- see and edit all information of the task
- view tasks in different project views

Todo:
- mark tasks as completed
- already completed items are archived, can be deleted
- html semantic elements for better accessibility 


Todo:
- ESLint + Airbnb JavaScript Style Guide
- Prettier Code Formatter


What I learned:
- Implemented ES6/react modules for organizing code.
- React functionality: state, props, class components, ES6
- Set up Web Storage API for storing data.

Tips:
- localStorage cannot hold any data type except for strings → JSON data (use JSON.parse(string to object), JSON.stingify(any type to string) methods)
- `window.location.reload(false)`
  - reloads page to trigger localStorage display update
  - Project list and Main.js > `handleEdit` update happen automatically → maybe bc it is being sent to parent component and `state` that causes rerender
- For inline styling:
  - React will automatically append a “px” suffix to certain numeric inline style properties. If you want to use units other than “px”, specify the value as a string with the desired unit.
- Can use ternary operator or utils js for repeated parts


Sources:

Background Image:
Photo by <a href="https://unsplash.com/@andersjilden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anders Jildén</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Favicon:
<a href="https://www.flaticon.com/free-icons/checklist" title="checklist icons">Checklist icons created by HJ Studio - Flaticon</a>

Menu Icons:
<a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by Febrian Hidayat - Flaticon</a>
<a href="https://fonts.google.com/icons">Google Icons</a>


Future Updates: 

- Beautify date formatting! Very ugly right now (not using [date-fns](https://github.com/date-fns/date-fns))
- Priority UI should have left margin color or colored flag/star → button on task to change priority?
- display task updates → use different method rather than `window.location.reload(false)` in Tasklist.js > `handledelete`, App.js > `removeProject`, `createProject`
- When Task is added, page reloads to first Project in Project list -> should reload to current project where task was added
- Add form validation: required attributes (required html attribute doesn't work in react)
- Add checkmark functionality and cross out completed tasks
- Move completed todos to completed page instead of deleting (gives user option to delete)
- Sort by date (today & week)


Other Updates:
- Beautify code with best industry practices!
  -> not supposed to change passed props but ok for now (Popup.js > handleTask, )
- Dynamic for Mobile
- Accessibility: Windows High Contrast mode --will not see the box-shadow or be able to detect the border color change
  --> try to make 'outline: 3px solid transparent;' work on .form-left>textarea:focus

  
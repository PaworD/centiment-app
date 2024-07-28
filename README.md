## Centiment Survey App

### Expected behavior:

- [x] Create a ranking-style question allowing users to select and prioritize options based on 
 their preferences.
- [x] Implement a drag-and-drop feature to move items from the left column to the right.
- [x] Add a click-to-select feature to move items from the left column to the right
- [x] Add the ability to deselect items, moving them back to the left column.
- [x] Allow reordering of items within the right column.

---
🌐 🔴 Project LIVE: https://centiment-mvp.netlify.app/

---

### Project structure & architectural approach

Project is designed using the starter ``vue3`` ``vite`` boilerplate with significant changes in 
application bootstrapping process. In general MVC pattern was applied along with the modular 
design. As the `vue3 setup api` is a function based, I have used _**Separation of Concerns**_ 
principle to move out the logic to a reusable composable.


### Folders

- `bootstrap` - responsible to keep the logic of application bootstrapping using the modular 
  design in combination with `IoC containers`. (P.S: Dependency injection was just 'mocked' as a 
  `service locator` pattern, not implemented fully )

- `dls` - responsible to keep the atoms/molecules/organisms components that related strictly to 
  business: like buttons, inputs, table and etc. , that maintain intact along all of their usage.
  Folder contains the vue3 `plugin` to ensure registering components all at once and globally 
  and perform other operations like: adding suffixes to the components.
- `modules` - responsible to keep the application's so called 'contexts', folder structure 
  inside the module should be consistent throughout each module. Module exposes the `index.ts` 
  which contains instructions of how this module should be loaded and what services/repositories 
  are registered inside the module
- `shared` responsible to keep the components/composable/helpers/contracts that are shared 
  within the modules.


---

### What are my future visions ?

- Add `vitest` testing library to perform component and composable unit tests
- Add `Inversion of Control` containers to replace current service locator implementation, as it 
  gives full control how modules are build and how services does bind to the particular module. 
  Helps with asynchronous module building and exposes decorators to register the service.
- Add `middlewares`, as the application growth , there will be need to control certain 
  behaviours of the API calls. I would create service that will have 2 methods `beforeRequest
  (header, content)` and `afterRequest(header, response)` , and each of the methods will be 
  fired in a certain moments: before api call and after call. It might help to deal with the for 
  example showing the snackbars in certain requests after call.
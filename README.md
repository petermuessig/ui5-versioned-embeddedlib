# Showcase Consumption of Versioned Library Dependency

This project demos how you can build a library with a versioned namespace and consume it in your application project.

## Get Started

You should be aware of the following commands:

```sh
# install dependencies (mandatory first step)
npm i

# run the build
npm run build

# test the project
npm test

# start the app consuming the library (requires build of library upfront)
npm start

# starting lib separatly 
npm run start:lib
```

## Technical Details

This highlights the specialities of the project setup:

* `packages/com.myorg.lib/ui5.yaml`: library project is exposed as module as it just provides the build output from `dist`
* `packages/com.myorg.lib/ui5-build.yaml`: correct `ui5.yaml` to be used for build, development and test of library (replaces the namespace placeholder `__namespace__` in all source files)
* `packages/com.myorg.myapp/webapp/Component.js`: configures the UI5 module loader to find the versioned library within the applications' namespace (see `sap.ui.loader.config` on top)
* `packages/com.myorg.myapp/webapp/controller/Main.controller.js`: showcases how to consume the modules from the versioned library

## License

This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.

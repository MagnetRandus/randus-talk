"use strict";
const path = require("path");

const build = require("@microsoft/sp-build-web");

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set("serve", result.get("serve-deprecated"));

  return result;
};

build.configureWebpack.mergeConfig({
  additionalConfiguration: generatedConfiguration => {
    if (!generatedConfiguration.resolve.alias) {
      generatedConfiguration.resolve.alias = {};
    }

    generatedConfiguration.resolve.alias["@toolshed"] = path.resolve(__dirname, "lib/@toolshed");
    generatedConfiguration.resolve.alias["@api"] = path.resolve(__dirname, "lib/webparts/klasie/api");
    generatedConfiguration.resolve.alias["@interfaces"] = path.resolve(__dirname, "lib/webparts/klasie/interfaces");

    return generatedConfiguration;
  },
});

build.initialize(require("gulp"));

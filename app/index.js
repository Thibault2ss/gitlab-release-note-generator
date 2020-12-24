#!/usr/bin/env node

const Generator = require("./lib/generator");
const Logger = require("./logger");

Generator.generate().then().catch(err => {
  Logger.error(err);
});
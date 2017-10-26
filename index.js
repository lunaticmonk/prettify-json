#!/usr/bin/env node
'use strict';

const fs = require('fs');
const file = fs.readFileSync(process.argv[2].toString());
const fileObj = JSON.parse(file);


console.log(JSON.stringify(fileObj, null, 2));

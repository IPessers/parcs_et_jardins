
const lodash = require('lodash')

const obj = {
    lol: 'haha'
}

var express = require('express')

const newObj = lodash.cloneDeep(obj)

console.log(obj)
console.log(newObj)

#!/usr/bin/env coffee

males = require './males'

getMale = () ->
  r = Math.random() * males[males.length-1].cumfreq
  cf = 0
  index = 0
  while cf < r
    current = males[index]
    cf = current.cumfreq
    ++index
  return current.name

module.exports = getMale

if not module.parent?
  nFamilies = process.argv[2] or= 1
  console.log "#{getMale()}" for i in [1..nFamilies]

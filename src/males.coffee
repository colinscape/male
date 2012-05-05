#!/usr/bin/env coffee

fs = require 'fs'

populate = (file) ->
  arr = []
  content = fs.readFileSync file, 'utf8'
  lines = content.split '\n'
  for l in lines
    do (l) ->
      info = l.split '\t'
      if info.length == 2
        arr.push {name: info[0], cumfreq: info[1]}
  return arr

module.exports = populate "#{__dirname}/../data/males.txt"


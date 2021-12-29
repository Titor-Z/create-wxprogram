#!/usr/bin/env  node
import { argv } from "process";
import { log } from "console";
import Generator from "./framework/generator";

log(argv)

log(
  new Generator()
)
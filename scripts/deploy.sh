#!/bin/bash

dfx deploy doxa_landing_frontend --ic --identity seirios 

dfx deploy backend --ic --identity doxa

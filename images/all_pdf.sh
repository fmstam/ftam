#!/bin/bash
FILES=*.pdf
for f in $FILES
do
  echo "Processing $f file..."	
  convert $f "${f%.*}".png
done
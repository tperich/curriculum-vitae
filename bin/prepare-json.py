#!/usr/bin/env python3

import json
import glob
from pathlib import Path

workdir = Path().absolute().name
targetdir = f"{workdir}/src/data"

result = []
for f in glob.glob(f"../{targetdir}/*.json"):
    with open(f, "rb") as infile:
        filename = Path(f).name
        filename_base = Path(filename).stem
        data = json.load(infile)
        result.append({filename_base: data})

with open("public/cv.json", "w") as f:
    encoded = json.dumps(result, indent=True)
    print(encoded)
    f.write(encoded)

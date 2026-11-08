# Production 3D asset contract — staging

The approved concept art is the visual target, **not** a mesh, rig, animation, or source texture. This branch deliberately does not switch the live game to placeholder primitives.

## Expected files

```
assets/dragon-v3/
  egg.glb
  dragon.glb
  appearances/000.json ... appearances/100.json
```

Each appearance JSON:
```json
{"level":12,"visibleMeshes":["growth_012_crest"],"scale":0.82}
```

The list contains **all** visible persistent growth objects for that level, not only the newest one. Every next appearance must have a visible delta in authored geometry/materials. A GLB must include named animation clips `idle`, `blink`, `breathe`, `look`, `cheer`, `hatch`, `grow`, `flap`, `fly`, `land`, `fire`, `sleep` as applicable; missing required clips are a release blocker. Use stable node names and include skinning and morph targets for expressions.

## Quality gates

- Art director approval of front, side, 3/4 views for egg, hatchling, juvenile and legendary adult, against the approved reference.
- One persistent, visibly distinguishable change for each consecutive pair (0→1 through 99→100), tested at actual phone resolution.
- No procedural sphere/cylinder substitutes; missing GLB, textures, clips or appearance JSON fail closed with a clear error.
- Verified iPhone Safari portrait, landscape, rotation during quiz, voice permission interruptions and 100-answer full run.
- Performance targets (to be verified on device): stable 30 fps or better, responsive input, no progressive memory growth after 100 transitions.
- Licensing and original art provenance documented before publication.

## Status

Runtime module is in `production/dragon-runtime.js`, not wired into the published `main` application. Authored GLB models, 101 appearance records, animation clips and iPhone QA **remain outstanding**. Do not merge until those gates pass.

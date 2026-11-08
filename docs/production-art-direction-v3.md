# ことばコレクション — Production Art Direction v3

Status: **DESIGN APPROVED / NOT PRODUCTION RELEASED**.
Reference: user-approved fantasy dragon evolution concept, 2026-11-08. The subsequent 16:9 gameplay concept is a visual exploration, not a functioning screen.

## Non-negotiable visual identity
- Single recognisable dragon across hatchling, juvenile, adolescent and legendary adult.
- Pearlescent ivory-white scales; deep sapphire-blue glass eyes; ice-blue forehead crest; curved pale-gold horns; translucent lavender/cyan wing membranes.
- A sculpted continuous head–neck–torso silhouette, not overlapping spheres, cylinders, emoji, or CSS stand-ins.
- Physically based materials, sculpted scale normals, layered eyes with corneal highlights, individual claws, expressive facial rig.
- 2-year-old-friendly: gentle expression, large readable eyes, never frightening, clean silhouettes at iPhone scale.
- Fantasy waterfall garden with blue/gold jewel-like UI. Readable contrast and touch targets at both orientations.

## Art asset requirements
1. Original master character model in GLB/glTF with PBR textures (basecolor, normal, ORM, emissive where needed), clean UVs and licensed assets.
2. Skeletal rig with face blendshapes and clips: idle, blink, breathe, look, cheer, hatch, grow, flap, fly, land, fire, sleep. Motion transitions must not snap.
3. 10 egg appearances, hatch cinematic, and 90 dragon evolution appearances: one visibly distinguishable persistent change per answer.
4. 100 individually legible quiz illustrations/models. Do not replace uncreated assets with emoji cards and call them final.
5. Separate landscape and portrait composition; question is larger and illuminated during answering; dragon moves to focal center, enlarges and sparkles on correct answer.
6. UI art kit: buttons, borders, background, progress, voice input states, quiz/reward states, before/after comparison.

## Growth contract
- Level 0: pristine egg.
- Levels 1–10: progressively engraved, cracking and illuminated egg, with 10 clearly distinguishable milestones.
- Level 11: hatch and baby reveal.
- Levels 12–30: baby changes in face, crest, scales, claws and wings, one persistent visible change each level.
- Levels 31–60: juvenile; wing membrane, horns, limbs, tail and proportions mature.
- Levels 61–99: adult development; broader wings, longer horns, elaborate scale pattern and controlled flight.
- Level 100: legendary form and unique final animation.
- Every answer: capture previous and next stage appearance, visibly emphasize new growth, show level n→n+1, then advance automatically.

## Technical integration gate
- Render authored GLB assets in Three.js, with real skinned animation and stable iOS Safari fallbacks.
- Preserve existing saved progress; no reset on migration.
- iPhone portrait and landscape smoke tests, rotate mid-game, 100-answer scripted test, audio permissions, interruption/resume, low-memory device test.
- No production release until original GLB/texture/animation assets exist, load reliably, and visual QA against approved references passes.
- Current v2.7 procedural dragon does **not** satisfy these requirements. Do not market it as final.

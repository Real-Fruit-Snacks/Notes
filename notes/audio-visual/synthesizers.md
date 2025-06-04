---
title: Synthesizers
emoji: 🎹
order: 2
---

# Synthesizers

My personal collection of synthesizer patches, programming techniques, and hardware notes.

## Classic Bass Sound

### Serum Patch

```javascript
// Oscillators
OSC A: Basic Shapes > Saw
  - Octave: -1
  - Unison: 3 voices
  - Detune: 0.08

OSC B: Basic Shapes > Square
  - Octave: -2
  - Level: 50%

// Filter
Filter: MG Low 18
  - Cutoff: 350Hz
  - Resonance: 25%
  - Drive: 15%

// Envelope
Env 1 → Filter Cutoff: 45%
  - Attack: 0ms
  - Decay: 500ms
  - Sustain: 20%
  - Release: 200ms
```

## Hardware Synths

### Roland Juno-106 Settings

#### Warm Pad

- DCO: Saw + Sub
- PWM: Manual at 50%, LFO at 30%
- VCF: Cutoff at 6, Res at 3
- ENV: Slow attack (7), Long release (8)
- Chorus: Mode II

### Korg Minilogue XD Patches

Custom patches for ambient and lead sounds:

```text
VCO1: SAW, Pitch: 0, Shape: 0
VCO2: SQUARE, Pitch: -12, Shape: 50
MULTI: CHORD, Shift: +7
MIXER: 50/50/25
FILTER: LPF, Cutoff: 40%, Res: 20%
```

> 💡 **Tip:** Always warm up analog synths for 15-20 minutes before recording for stable tuning!
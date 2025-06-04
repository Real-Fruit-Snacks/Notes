---
title: Programming
emoji: 💻
order: 1
---

# Programming

Code snippets, algorithms, and development notes for various projects.

## JavaScript Audio Visualizer

```javascript title="Audio Visualizer Class with Frequency Bars"
class AudioVisualizer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.audioContext = new AudioContext();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 256;
    this.bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(this.bufferLength);
  }

  draw() {
    requestAnimationFrame(() => this.draw());
    
    this.analyser.getByteFrequencyData(this.dataArray);
    
    // Clear canvas with fade effect
    this.ctx.fillStyle = 'rgba(26, 10, 26, 0.2)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw frequency bars
    const barWidth = (this.canvas.width / this.bufferLength) * 2.5;
    let x = 0;
    
    for (let i = 0; i < this.bufferLength; i++) {
      const barHeight = this.dataArray[i] * 2;
      
      // Create gradient
      const gradient = this.ctx.createLinearGradient(0, 0, 0, barHeight);
      gradient.addColorStop(0, '#ff0080');
      gradient.addColorStop(0.5, '#00ffff');
      gradient.addColorStop(1, '#8000ff');
      
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(x, this.canvas.height - barHeight, barWidth, barHeight);
      
      x += barWidth + 1;
    }
  }
}
```

## Python Automation Scripts

### File Organization Script

```python title="File Organization by Extension"
import os
import shutil
from pathlib import Path

def organize_files(directory):
    """Organize files by extension"""
    file_mappings = {
        'images': ['.jpg', '.png', '.gif', '.webp'],
        'videos': ['.mp4', '.avi', '.mov', '.mkv'],
        'audio': ['.mp3', '.wav', '.flac', '.ogg'],
        'documents': ['.pdf', '.doc', '.txt', '.md']
    }
    
    for file in Path(directory).iterdir():
        if file.is_file():
            file_ext = file.suffix.lower()
            
            for folder, extensions in file_mappings.items():
                if file_ext in extensions:
                    dest_dir = Path(directory) / folder
                    dest_dir.mkdir(exist_ok=True)
                    shutil.move(str(file), str(dest_dir / file.name))
                    break
```
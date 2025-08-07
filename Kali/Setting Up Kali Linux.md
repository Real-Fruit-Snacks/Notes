---
tags:
  - Setup
  - Kali
creation_date: 2025-08-06
---
## Initial Setup
### Pimp My Kali
```bash
# Change to root
sudo -s

# Change to /opt directory
cd /opt

# Remove existing pimpmykali folder
rm -rf pimpmykali/

# Clone pimpmykali repository & enter the folder
git clone https://github.com/Dewalt-arch/pimpmykali

cd pimpmykali

# Execute the script - For a new Kali VM, run menu option 'N'
# (The script must be run with root privileges)
./pimpmykali.sh

# Use --auto command line arg to bypass the menu and prompts

# Use --help for full list of available command line args
```
### Rust and Cargo
```bash
# PimpMyKali should have done this so it may tell you its already installed 
curl https://sh.rustup.rs -sSf | sh
```

### Rustscan
```bash
# Install Cargo
sudo apt install cargo

# Install Rustscan
cargo install rustscan

# Add to path
echo 'export PATH=/home/kali/.cargo/bin:$PATH' >> ~/.zshrc

# Source
source ~/.zshrc

# Example
# rustscan -a IP -r 1-65535 -- -A
```

## Additional Tools


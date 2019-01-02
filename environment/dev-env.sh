#!/bin/sh
#!/bin/bash
nvm -v
if [ $? eq 0]; then
    echo "not installed"
else 
    echo "already installed"
fi

# Path to your oh-my-zsh installation.
export ZSH="/Users/czhao/.oh-my-zsh"

# Aliases
alias mt-server="(cd ~/Documents/vena/data && java -jar ~/Documents/vena/mt-server/mt-parent/mt-build/target/mt-build-*.jar server ~/Documents/vena/mt-server/mt-parent/mt-service/yml/server-mysql.yml)"

alias zshreload='source ~/.zshrc'             # reload ZSH
alias shtop='sudo htop'                       # run `htop` with root rights
alias ..='cd ..'
alias g='git'
alias rm='rm -i'                              # confirm removal
alias cp='cp -i'                              # confirm copy
alias mv='mv -i'                              # confirm move
alias cal='gcal --starting-day=1'             # print simple calendar for current month
alias weather='curl v2.wttr.in'               # print weather for current location (https://github.com/chubin/wttr.in)

# NVM
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

# FONT AWESOME
export FONTAWESOME_TOKEN=620C899A-391E-46D4-B811-4F248D67AC05

# POWERLINE FONT
# Prompt elements
P9K_LEFT_PROMPT_ELEMENTS=(custom_user dir vcs)
P9K_RIGHT_PROMPT_ELEMENTS=(background_jobs go_version virtualenv)

# Plugins
plugins=(
  git
  fast-syntax-highlighting
  zsh-autosuggestions
  history
)

source /usr/local/opt/powerlevel9k/powerlevel9k.zsh-theme
source $ZSH/oh-my-zsh.sh

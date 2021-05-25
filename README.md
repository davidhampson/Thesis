MusicLesson

David Hampson Thesis Project

SETUP INSTRUCTIONS (WINDOWS)

1. get git bash
https://git-scm.com/downloads

2. get npm
https://www.npmjs.com/get-npm

3. open the directory you want the project to be in in Git bash

4. run "git clone [repo]"

5. make sure package-lock.json is not present. If not, rm -rf package-lock.json

6. make sure we have cert.pem and key.pem

7. run "npm install; npm start", and wait for it to finish.

8. get ipv4 address (open command prompt, type ipconfig)

9. connect to https://[ipv4]:8443 from the local network

URL PARAMS
for teacher mode, pass teacher=true (allows for drawing on canvas)
for pdf only, pass musicOnly=true (reccomended mode for glasses)

Makes use of information and patterns in https://github.com/wesbos/websocket-canvas-draw/ and https://www.dmcinfo.com/latest-thinking/blog/id/9852/multi-user-video-chat-with-webrtc

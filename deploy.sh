
#rsync -vr ./build/* kelp:/root/web/carrollmusic.net --exclude-from exclude.txt

rsync -vr ./* aqua:/root/apps/carrollmusic.net --exclude 'node_modules'
ssh aqua 'cd /root/apps/carrollmusic.net && npm install'
ssh aqua 'mongroup restart'




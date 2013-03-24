

target='ubuntu@static.superflyer.in'
dir='/home/ubuntu/websites/www.carrollmusic.net'

middleman build
echo $dir
scp -r build/* $target:$dir

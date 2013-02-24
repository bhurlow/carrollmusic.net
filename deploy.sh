

target='ubuntu@54.235.155.45'
dir='/home/ubuntu/websites/www.carrollmusic.net'

# middleman build
echo $dir
scp -r build/* $target:$dir

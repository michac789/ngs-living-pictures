docker stop ngs-web
docker rm ngs-web
docker rmi michac789/ngs-living-pictures:latest
docker pull michac789/ngs-living-pictures:latest
docker run -d -p 3200:3000 --name ngs-web michac789/ngs-living-pictures:latest

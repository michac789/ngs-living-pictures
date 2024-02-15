docker build -t michac789/ngs-living-pictures:latest -f Dockerfile.prod .
docker login
docker push michac789/ngs-living-pictures:latest

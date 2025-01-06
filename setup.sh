service nginx start 
pm2 start /app-nfd-server.js --name nfds

/tail -f /dev/null
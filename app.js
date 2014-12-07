var WebTorrent = require('webtorrent')
var concat = require('concat-stream')
var http = require('http');

var client = new WebTorrent()
var fs = require('fs');
var magnet_uri = 'magnet:?xt=urn:btih:NCCYMBC73QQEHI3YXENDQ4ENUNTNVC44';

client.download(magnet_uri, function (torrent) {
  // Got torrent metadata!
  console.log('Torrent info hash:', torrent.infoHash)

  torrent.files.forEach(function (file) {
    // Get the file data as a Buffer (Uint8Array typed array)
    file.createReadStream().pipe(fs.createWriteStream('./download/'+file.name));
  })
})
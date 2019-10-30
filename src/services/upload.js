var Vimeo = require('')

try{
    var config = require('./config.json')
}  catch (error){
    console.error('nops')
    process.exit()
}
client.upload(
  filePath,
  params,
  function (uri) {
    client.request(uri + '?fields=link', function (error, body, statusCode, headers) {
      if (error) {
        console.log('There was an error making the request.')
        console.log('Server reported: ' + error)
        return
      }

      console.log('"' + filePath + '" has been uploaded to ' + body.link)

      client.request({
        method: 'PATCH',
        path: uri,
        params: {
          'name': 'Vimeo API SDK test edit',
          'description': "This video was edited through the Vimeo API's NodeJS SDK."
        }
      }, function (error, body, statusCode, headers) {
        if (error) {
          console.log('There was an error making the request.')
          console.log('Server reported: ' + error)
          return
        }

        console.log('The title and description for ' + uri + ' has been edited.')

        client.request(
          uri + '?fields=transcode.status',
          function (error, body, statusCode, headers) {
            if (error) {
              console.log('There was an error making the request.')
              console.log('Server reported: ' + error)
              return
            }

            console.log('The transcode status for ' + uri + ' is: ' + body.transcode.status)
          }
        )
      })
    })
  },
  function (bytesUploaded, bytesTotal) {
    var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
    console.log(bytesUploaded, bytesTotal, percentage + '%')
  },
  function (error) {
    console.log('Failed because: ' + error)
  }
)


  const pubnub = new PubNub({
    publishKey:   'pub-c-0d9e7469-3fe0-42cb-a6d1-89a357b0c0db', // replace with your own pub-key
    subscribeKey: 'sub-c-22a9c08a-c1ac-11e7-bd81-462de4f8a43c' // replace with your own sub-key
  });

  eon.chart({
    pubnub: pubnub,
    channels: ["c3-spline"],
    generate: {
      bindto: '#chart',
      data: {
        labels: true
      }
    }
  });

  setInterval(function(){
    pubnub.publish({
      channel: 'c3-spline',
      message: {
        eon: {
          'Austin': Math.floor(Math.random() * 99),
          'New York': Math.floor(Math.random() * 99),
          'San Francisco': Math.floor(Math.random() * 99),
          'Portland': Math.floor(Math.random() * 99)
        }
      }
    });
  
  }, 1000);
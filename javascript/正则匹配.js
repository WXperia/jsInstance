var imgurl = '"capture_day":"14:35:42","capture_time":1559716542000,"face_quality":0.80946696,"id":"e814d37e-921e-4971-8a5a-2441e81be272","image":"http://172.22.27.6/capture/2019/06/05/609fc009-91bb-427d-98fc-51a63594197a.jpg","is_night":false,"is_stranger":false,"pitch":13.177076,"roll":7.4014797,"speed":1.5,"task_id":"201904021011400001000000013","track_idx":"63635","yaw":-2.9730449"capture_day":"14:35:42","capture_time":1559716542000,"face_quality":0.80946696,"id":"e814d37e-921e-4971-8a5a-2441e81be272","image":"http://172.22.27.6/capture/2019/06/05/609fc009-91bb-427d-98fc-51a63594197a.jpg","is_night":false,"is_stranger":false,"pitch":13.177076,"roll":7.4014797,"speed":1.5,"task_id":"201904021011400001000000013","track_idx":"63635","yaw":-2.9730449';

// imgurl.match(/(http:[/]{2}[0-9]{3}([.][0-9]{0,3}){3}([/][a-zA-z0-9-]+)+([.]jpg))/);

var reg = /(http:[/]{2}[0-9]{3}([.][0-9]{0,3}){3}([/][a-zA-z0-9-]+)+([.]jpg))/g

        var arr2 = imgurl.match(reg)
        console.log(arr2)
      var res = reg.exec(imgurl)
      while(res != null){
          console.log(res)
          res = reg.exec(imgurl)
      }
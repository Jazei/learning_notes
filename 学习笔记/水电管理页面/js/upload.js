var uploaded = {
	//文件上传
	uploadFile:function(){
		$('#drag-and-drop-zone').dmUploader({
        url: '/demos/dnd/upload.php',
        dataType: 'json',
        allowedTypes : 'application/vnd.*',
        // allowedTypes: 'image/*',
        /*extFilter: 'jpg;png;gif',*/
        onBeforeUpload: function(id){
          uploaded.updateFileStatus(id, 'uploading', 'Uploading...');
        },
        onNewFile: function(id, file){
          uploaded.addFile(id, file);
        },
        onComplete: function(){
          $(".suc").show(1000);
        },
        onUploadProgress: function(id, percent){
          var percentStr = percent + '%';
          uploaded.updateFileProgress(id, percentStr);
        },
        onUploadSuccess: function(id, data){
          uploaded.updateFileStatus(id, 'success', 'Upload Complete');
          uploaded.updateFileProgress(id, '100%');
        },
        onUploadError: function(id, message){
          uploaded.updateFileStatus(id, 'error', message);
        },
        /*onFileExtError: function(file){
          $.danidemo.addLog('#demo-debug', 'error', 'File \'' + file.name + '\' has a Not Allowed Extension');
        },*/
        onFallbackMode: function(message){
          alert('Browser not supported(do something else here!): ' + message);
        }
      });
	},
	//添加显示标签
	addFile:function(id, file){
        var template = '' +
          '<div class="file" id="uploadFile' + id + '">' +
            '<div class="info">' +
              '文件名:<span class="filename" title="Size: ' + file.size + 'bytes - Mimetype: ' + file.type + '">' + file.name + '</span><br /><small>进度条: <span class="status">Waiting</span></small>' +
            '</div>' +
            '<div class="bar">' +
              '<div class="progress" style="width:0%"></div>' +
            '</div>' +
            '<div class="suc none">'+
            '<img src="images/ico.png" alt="" class="img-responsive" />'+
            '</div>'+
           '</div>';
          
        $('#fileList').prepend(template);
        $('.conbg').css('display', 'block');
        $('#fileList').css('display', 'block');
    },
    //显示上传状态
    updateFileStatus:function(id, status, message)
    {
        $('#uploadFile' + id).find('span.status').html(message).addClass(status);
    },
    //显示上传进度条
    updateFileProgress:function(id, percent)
    {
        $('#uploadFile' + id).find('div.progress').width(percent);
    },

}
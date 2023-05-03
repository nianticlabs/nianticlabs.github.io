function changeImage(imagePath, imageTitle) {
	$("#videodiv").hide();
	$('#link').show();
    $("#content").attr("src", imagePath);
    $("#link").attr("href", imagePath);
    $("#imagetitle").html(imageTitle);
}

function changeVideo(videoPath, videoTitle) {
	$('#link').hide();
	$("#videodiv").show();
	$('#videodiv video source').attr('src', videoPath);
	$("#videodiv video")[0].load()
	$("#imagetitle").html(videoTitle);
}

function changeVideoDivID(videoDivID, videoPath, videoTitle) {
	$('#link').hide();
	$("#" + videoDivID).show();
	$("#" + videoDivID + " video source").attr('src', videoPath);
	$("#" + videoDivID + " video")[0].load()
	$("#imagetitle").html(videoTitle);
}

function changQualVideoGroup(videoName) {
	
	changeVideoDivID(
		'fastDepthDensificationDiv', 
		videoName + '_npy_lidar_depths_equally_sampled_2000.mp4', 
		'fastDepthDensificationDiv'
	); 

	changeVideoDivID(
		'lidarDepthDiv', 
		videoName + '_lidar.mp4', 
		'lidarDepthDiv'
	); 

	changeVideoDivID(
		'simpleReconDiv', 
		videoName + '_sr_hypersim.mp4', 
		'simpleReconDiv'
	); 
	changeVideoDivID(
		'implicitDepthDiv', 
		videoName + '_bd_hypersim.mp4', 
		'implicitDepthDiv'
	); 
}

function hideElement(element) {

	element.style.display = "none";
}

function showElement(element) {
	element.style.display = "block";
}
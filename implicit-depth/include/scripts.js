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

function changeBorderSelection(spanID, selectionID) {
	var span = document.getElementById(spanID);
	var children = span.children;
	for(var i=0; i<children.length; i++){
		var child = children[i];
		if(child.innerHTML == selectionID) {
			child.style.border = "solid";
		}
		else { 
			child.style.border = "";
		}
		
	}
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
	
	// play in sync
	document.getElementById("fastDepthDensificationDiv").getElementsByTagName("video")[0].currentTime = 0;
	document.getElementById("lidarDepthDiv").getElementsByTagName("video")[0].currentTime = 0;
	document.getElementById("simpleReconDiv").getElementsByTagName("video")[0].currentTime = 0;
	document.getElementById("implicitDepthDiv").getElementsByTagName("video")[0].currentTime = 0;

	document.getElementById("fastDepthDensificationDiv").getElementsByTagName("video")[0].play();
	document.getElementById("lidarDepthDiv").getElementsByTagName("video")[0].play();
	document.getElementById("simpleReconDiv").getElementsByTagName("video")[0].play();
	document.getElementById("implicitDepthDiv").getElementsByTagName("video")[0].play();
}

function hideElement(element) {

	element.style.display = "none";
}

function showElement(element) {
	element.style.display = "block";
}
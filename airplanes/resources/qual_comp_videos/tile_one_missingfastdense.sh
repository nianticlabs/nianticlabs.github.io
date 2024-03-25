#!/bin/bash
ffmpeg -y \
	-i $1$2".mp4" -i $1$3".mp4" -f lavfi -i color=s=720x540:color=white -i $1$4".mp4" \
	-filter_complex "
		nullsrc=size=1440x1080 [base];
		[0:v] setpts=PTS-STARTPTS, scale=720x540 [upperleft]; 
		[1:v] setpts=PTS-STARTPTS, scale=720x540 [upperright];
		[2:v] setpts=PTS-STARTPTS, scale=720x540 [lowerleft];
		[3:v] setpts=PTS-STARTPTS, scale=720x540 [lowerright];
		[base][upperleft] overlay=shortest=1 [tmp1];
		[tmp1][upperright] overlay=shortest=1:x=720 [tmp2];
		[tmp2][lowerleft] overlay=shortest=1:y=540 [tmp3];
		[tmp3][lowerright] overlay=shortest=1:x=720:y=540
	" \
	-c:v libx264 tiled/$1"_tiled.mp4"
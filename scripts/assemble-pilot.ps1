# Development-only FFmpeg montage. Run from repository root after exporting frames.
$pilotInputs = @('-hide_banner','-loglevel','warning','-y','-filter_complex_threads','1')
foreach ($pilotFrame in 1..6) {
  $pilotInputs += @('-loop','1','-framerate','24','-t','6.5','-i',"assets/media/notpetya/teaser-$pilotFrame.png")
}
$pilotFilter = '[0:v]format=yuv420p,settb=AVTB[v0];[1:v]format=yuv420p,settb=AVTB[v1];[2:v]format=yuv420p,settb=AVTB[v2];[3:v]format=yuv420p,settb=AVTB[v3];[4:v]format=yuv420p,settb=AVTB[v4];[5:v]format=yuv420p,settb=AVTB[v5];[v0][v1]xfade=transition=fade:duration=0.6:offset=5.9[x1];[x1][v2]xfade=transition=fade:duration=0.6:offset=11.8[x2];[x2][v3]xfade=transition=fade:duration=0.6:offset=17.7[x3];[x3][v4]xfade=transition=fade:duration=0.6:offset=23.6[x4];[x4][v5]xfade=transition=fade:duration=0.6:offset=29.5[final]'
$pilotInputs += @('-filter_complex',$pilotFilter,'-map','[final]','-t','36','-r','24','-c:v','libx264','-preset','fast','-crf','23','-pix_fmt','yuv420p','-an','-movflags','+faststart','-metadata','title=WAR ROOM - NotPetya','-metadata','comment=Editorial teaser. AI reconstruction identified on screen. No narration. Sources: Microsoft 2017, UK NCSC 2018, DOJ 2020.','assets/media/notpetya/teaser-vertical.mp4')
& ffmpeg @pilotInputs
if ($LASTEXITCODE -ne 0) { throw 'FFmpeg montage failed' }

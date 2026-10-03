# Local narration exists before montage; no download, TTS call or provider dependency.
$pilotLengths = @(6.1,5.3,8.5,9.8,5.9,9.4)
$pilotOffsets = @(5.5,10.2,18.1,27.3,32.6)
$pilotArgs = @('-hide_banner','-loglevel','warning','-y','-filter_complex_threads','1')
foreach ($pilotIndex in 0..5) {
  $pilotArgs += @('-loop','1','-framerate','24','-t',$pilotLengths[$pilotIndex].ToString([Globalization.CultureInfo]::InvariantCulture),'-i',"assets/media/notpetya/teaser-$($pilotIndex+1).png")
}
$pilotArgs += @('-i','assets/media/notpetya/narration.mp3')
$pilotGraph = (0..5 | ForEach-Object { "[$($_):v]format=yuv420p,settb=AVTB[v$_]" }) -join ';'
$pilotPrevious = 'v0'
foreach ($pilotIndex in 1..5) {
  $pilotOffset = $pilotOffsets[$pilotIndex-1].ToString([Globalization.CultureInfo]::InvariantCulture)
  $pilotGraph += ";[$pilotPrevious][v$pilotIndex]xfade=transition=fade:duration=0.6:offset=$($pilotOffset)[x$pilotIndex]"
  $pilotPrevious = "x$pilotIndex"
}
$pilotGraph += ';[6:a]adelay=150:all=1,apad,atrim=duration=42,afade=t=out:st=40.5:d=1.5[audio]'
$pilotArgs += @('-filter_complex',$pilotGraph,'-map','[x5]','-map','[audio]','-t','42','-r','24','-c:v','libx264','-preset','fast','-crf','23','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart','-metadata','title=WAR ROOM - NotPetya (narrated)','-metadata','comment=Synthetic Portuguese narration: VoiceStudio / OmniVoice. AI reconstruction identified on screen. Sources: Microsoft 2017, UK NCSC 2018, DOJ 2020.','assets/media/notpetya/teaser-narrated.mp4')
& ffmpeg @pilotArgs
if ($LASTEXITCODE -ne 0) { throw 'Narrated FFmpeg montage failed' }

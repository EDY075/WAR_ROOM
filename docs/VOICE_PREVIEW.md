# Personal voice preview — 2026-10-03

Historical sample stage, completed before the subsequent explicit approval. The user approved the sample and authorized prolonged narration for all 17 cases. Current delivery: [NARRATION_PRODUCTION.md](NARRATION_PRODUCTION.md). The scope statements below describe only the earlier preview.

The user supplied their own 49.30-second OGG/Opus recording after requesting their voice for the documentaries. This sprint prepares a separate short NotPetya opening for listening review. It does not replace the delivered synthetic pilot, add narration to the other sixteen cases, or publish personal media.

## Production and review

- Original recording preserved. A 10.25-second excerpt containing complete sentences is converted to mono PCM at 24 kHz with its matching Portuguese transcript.
- Existing installed OmniVoice is used in reference-based cloning mode, seed 1729, sixteen inference steps, native pace, with no gender/pitch design instruction overriding the reference.
- A long initial native-API render exceeded its 300-second compute budget under exhausted GPU memory. Its JSON error is retained as a diagnostic, never delivered as audio. No immediate competing GPU retry was submitted.
- Recovery uses the same installed model in an isolated CPU process, offline, with four CPU threads. No downloads, remote provider, personal profile creation or persistent application-setting changes.
- Short WAV/MP3 preview is stored only in ignored `audit/`; the source recording and voice reference are excluded from version control and deployment. The previous GPU task drained; its TTS model was unloaded successfully. Existing engine/model preferences remain unchanged.
- Delivered preview: 16.77-second WAV and MP3, mono 24 kHz; MP3 128 kbit/s, 269,612 bytes. FFprobe verifies these files. Local installed Faster-Whisper recognizes the date and sentence content; the foreign proper name is not consistently recognized, so pronunciation remains a listening-review item. Speech spelling uses a Portuguese phonetic rendering of NotPetya while the written script retains the proper name. Transcription is a content check, not a measurement of voice resemblance.
- Local comparison page `audit/voice-review.html` has the generated opening and original reference excerpt. Headless Edge checks at 1280px and 390px verify no overflow/JavaScript errors, actual 16.77-second playback, no audio request before explicit play, and automatic pause when switching between the two recordings.

The user's listening review determines resemblance, accent, rhythm and preferred delivery before extending personal narration to all cases. Neither human listening nor narrator approval is inferred from a successful generation or an automatic transcript. The product remains unchanged, with its original static MP3/MP4/VTT and complete reading paths.

import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import { useStoreDispatcher } from "../hooks/useStore";
import { useHistory } from "react-router-dom";


const GoogleVoice = () => {
    const dispatcher = useStoreDispatcher();
    const history = useHistory();
    const [result, setResult] = useState("Speak Now");
    const [isStart, setStart] = useState(false);
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const speech = new SpeechRecognition();
    const toggleSpeech = () => {
        if (isStart) {
            speech.stop();
        } else {
            speech.start();
        }
        setStart(prev => !prev);
    };
    speech.onend = () => setStart(false);
    speech.onresult = (e) => {
        if (e && e.results && e.results[0]) {
            const result_text = e.results[0][0].transcript.toLowerCase();
            setResult(result_text);
            if (window.confirm(`Are You Sure To Search ${result_text} on The Google ???`)) {
                dispatcher.useGoogleSearch(result_text);
                history.push("/about");
            }
        } else {
            setResult("The Result not Found");
        }
    };


    return (
        <Box className="google-voice-container">
            <Typography variant="h2" className="text-result">{result}</Typography>
            <Box className="google-voice-icon-bar">
                <div onClick={toggleSpeech} className={`google-voice-icon ${isStart ? 'voice-active' : ''}`}>
                    <MicIcon />
                </div>
                {isStart && <Box className="google-voice-overlay"></Box>}
            </Box>
        </Box>
    );
};

export default GoogleVoice;
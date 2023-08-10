import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const  RoomPage = () => {
    const {roomId} = useParams();
    const myMeeting = async (element) => {
    const appID = 274671249;
    const serverSecret = "7edc5a26f7589c48c2a602d41a7d2064";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Mrinmoy");
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container: element,
        sharedLinks: [
         {
            name: 'copy link',
            url: `http://localhost:3000/room/${roomId}`,

         }],
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
    }) ;   
    };

    return( <div>
        <div ref={myMeeting} />
    </div>
    );
    
};
export default RoomPage;
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import {useEffect, useRef, useState} from "react";
import {IdByNow} from "../../service/formatData";
import {
    database,
    getDownloadURL,
    onValue,
    push,
    refImage,
    refText,
    storage,
    uploadBytes
} from "../../service/FirebaseConfig";

export function ChatDetail({accountId}) {
    const [inputMess, setInputMess] = useState("");
    const [showEmoji, setShowEmoji] = useState(false);
    const [typing, setTyping] = useState(false);
    const [content, setContent] = useState();
    const inputImgRef = useRef();
    const buttonArea = useRef();

    const pushMessRealTime = async (type, text) => {
        const path = "mess/mess-" + accountId;
        const pathNoti = "noti/mess-" + accountId;
        const idMessage = IdByNow();

        await push(refText(database, path), {
            id: idMessage,
            adminSend: true,
            content: text,
            type: type,
            release: new Date() + ""
        })
    }
    const hiddenButton = (e) => {
        let str = e.target.value;
        setInputMess(str);
        if (str == "") {
            setTyping(false);
        } else {
            setTyping(true);
        }
    }
    const enterButton = async (key) => {
        if (key == "Enter") {
            await handleSendMessage();
            setShowEmoji(false);
            setInputMess("");
            setTyping(false);
        }
    }
    const handleSendMessage = () => {
        pushMessRealTime("text", inputMess);
    }
    const handlePickEmoji = (emoji) => {
        setInputMess(inputMess + emoji.native);
        setTyping(true);
    }
    const scaleInput = () => {
        if (!typing) {
            buttonArea.current.style.gridTemplateColumns = "50px 50px 1fr 50px";
        } else {
            buttonArea.current.style.gridTemplateColumns = "50px 1fr 50px";
        }
    }
    const handleImageUpload = async (event) => {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            try {
                let file = files[i];
                let storageRef = refImage(storage, `images-chatbox/` + file.name);
                let snapshot = await uploadBytes(storageRef, file);
                let downloadURL = await getDownloadURL(snapshot.ref);
                pushMessRealTime("img", downloadURL);
            } catch (e) {
                console.log(e);
            }
        }
    };
    const getDatabase = async () => {
        await onValue(refText(database, `mess/mess-${accountId}`),  (data) => {
            let message = [];
            data.forEach(e => {
                message.unshift(e.val());
            });
            setContent(message);
        });
    }

    useEffect(() => {
        scaleInput();
    },[typing])
    useEffect(() => {
        getDatabase();
    }, [])

    return (
        <>
            <div className="chatbox-detail-display borderradius color0 boxshadow-inset">
                {content &&
                    content.map(e => {
                        return (
                            <div key={e.id} className={`chat ${e.adminSend ? "chatme" : "chatyou"}`}>
                                {
                                    e.type == "text" &&
                                    <p className={`chattext borderradius ${e.adminSend ? "color3" : "color2"}`}>
                                        {e.content}
                                    </p>
                                }

                            </div>
                        )
                    })
                }
            </div>
            <div ref={buttonArea} className="chatbox-detail-button">
                <div
                    className="chatbox-detail-button-emoji color5"
                    title="Thêm emoji"
                    onClick={() => {setShowEmoji(!showEmoji)}}
                />
                {!typing &&
                    <div className="chatbox-detail-button-img color5"
                         title="Thêm ảnh"
                         onClick={() => {inputImgRef.current.click()}}
                    />}
                <input
                    onChange={hiddenButton}
                    className="chatbox-detail-button-input"
                    placeholder="Aa"
                    title="Nhập tin nhắn"
                    onKeyDown={(e) => {enterButton(e.key)}}
                    value={inputMess}
                />
                <div className="chatbox-detail-button-send color0" title="Gửi tin nhắn"/>
            </div>

            {showEmoji &&
                <div className="emoji">
                    <Picker
                        data={data}
                        theme="light"
                        onEmojiSelect={(e) => handlePickEmoji(e)}
                        maxFrequentRows="2"
                        navPosition="bottom"
                        perLine="8"
                        searchPosition="none"
                        previewPosition="none"
                    />
                </div>
            }
            <input
                onChange={handleImageUpload}
                ref={inputImgRef}
                type="file"
                multiple={true}
                hidden={true}
                accept="image/*"
            />
        </>
    )

}
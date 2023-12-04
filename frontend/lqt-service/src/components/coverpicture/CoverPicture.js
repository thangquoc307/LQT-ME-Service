import "./coverpic.css"
import {useEffect, useRef, useState} from "react";
export default function CoverPicture() {
    const background = useRef();
    const [currentBackground, setCurrentBackgroung] = useState(0);
    const picture = [
        `url(https://firebasestorage.googleapis.com/v0/b/lqt-service.appspot.com/o/cover%2Fcover1.png?alt=media&token=9b1f082d-9891-4a05-8011-7552b4614365)`,
        `url(https://firebasestorage.googleapis.com/v0/b/lqt-service.appspot.com/o/cover%2Fcover2.png?alt=media&token=dafd8b84-c8a3-4a04-bf6d-a23234868b5b)`,
        `url(https://firebasestorage.googleapis.com/v0/b/lqt-service.appspot.com/o/cover%2Fcover3.png?alt=media&token=8ce65256-fedc-4342-ad49-be7c976b67bd)`,
        `url(https://firebasestorage.googleapis.com/v0/b/lqt-service.appspot.com/o/cover%2Fcover4.png?alt=media&token=b56996e4-803e-4ffe-b917-4475533af50c)`,
        `url(https://firebasestorage.googleapis.com/v0/b/lqt-service.appspot.com/o/cover%2Fcover5.png?alt=media&token=d939ceb1-bcf0-40f6-bb1a-5620021a4e87)`,

    ]
    return (
        <div className="cover-picture borderradius boxshadow-inset color4">
            <div className="cover-picture-array">
                {
                    picture.map((e, index) => {
                        return (
                            <div className={`cover-picture-array-item borderradius 
                            ${(index == currentBackground) && "cover-picture-array-item-selected"}`}
                                 style={{backgroundImage: picture[index]}}
                                 onClick={() => {setCurrentBackgroung(index)}}
                            />
                        )
                    })
                }
            </div>
            <div
                ref={background}
                className="cover-picture-main borderradius"
                style={{ backgroundImage: picture[currentBackground] }}
            ></div>
        </div>
    )

}
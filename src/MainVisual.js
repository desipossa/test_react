import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const MainVisual = () => {

    const [slideNum, setSlideNUm] = useState(0);

    const option = {
        arrows: false,
        dots: true,
        afterChange: (idx) => {
            setSlideNUm(idx);
        }
    }

    const slideData = [
        { tit: "title01", desc: "아무꺼나 씁니다. 01" },
        { tit: "title02", desc: "아무꺼나 씁니다. 02" },
        { tit: "title03", desc: "아무꺼나 씁니다. 03" },
        { tit: "title04", desc: "아무꺼나 씁니다. 04" },
        { tit: "title05", desc: "아무꺼나 씁니다. 05" },
    ]
    return (
        <>
            <Slider {...option} className="Main_visual_slide">
                {
                    slideData.map((it, idx) => {
                        return (
                            <div className="itm">
                                <div className="slg">
                                    <strong>{it.tit}</strong>
                                    <p>
                                        {it.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="num">
                {slideNum + 1} / {slideData.length}
            </div>
        </>
    )
}

export default MainVisual;
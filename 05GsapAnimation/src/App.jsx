import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const box = useRef();

  useGSAP(
    () => {
      let tl7 = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-7",
          start: "50% 50%",
          end: "500% 50%",
          pin: true,
          markers: true,
          scrub: 1,
        },
      });
      
      tl7.to(
        ".our-work-txt-div",
        {
          height: "60vh",
        },
        "height"
      );
      tl7.to(
        ".our-work-txt",
        {
          height: "60vh",
        },
        "height"
      );
      tl7.to(
        "#our",
        {
          left: "0%",
        },
        "height"
      );
      tl7.to(
        "#work",
        {
          right: "0%",
        },
        "height"
      );
      tl7.to(".scroll-img", {
        marginTop: "-390%",
      });
    },
    { scope: box }
  );

  return (
    <>
      <div id="main" ref={box}>
        <div className="part-7">
          <div className="our-work-txt">
            <h1 id="our">Our</h1>
            <h1 id="work">Work</h1>
          </div>
          <div className="our-work-txt-div">
            <div className="scroll-work">
              <div className="scroll-img">
                <img
                  src="https://images.unsplash.com/photo-1707343843344-011332037abb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1707394074946-b135476109bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1710376299967-785d4ac1c3a9?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1585130401366-fe05a8d813c4?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1577353716826-9151912dcdd1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1604276772422-ce354248f1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import { box, boxStyle, boxHover, skills } from "../constants/styles";

export default function Skills() {
  return (
    <section
      id="skills"
      className={`${skills} w-screen flex flex-col items-center justify-center`}>
      <div
        className={`text-[#161B36] w-10/12 flex flex-col items-around border-solid`}>
        <div>
          {/* Use grid with responsive columns */}
          <div className="">
            {/* Software */}
            <div className={``}>
              <div>
                {/* <h3>Software</h3>
                ... software skills content ... */}
                <ul className="flex flex-row items-center justify-evenly">
                  <li>
                    <img
                      width="128"
                      height="128"
                      src="https://img.icons8.com/fluency/96/html-5.png"
                      alt="html-5"
                    />
                  </li>
                  <li>
                    <img
                      width="128"
                      height="128"
                      src="https://img.icons8.com/fluency/96/css3.png"
                      alt="css3"
                    />
                  </li>
                  <li>
                    <img
                      width="128"
                      height="128"
                      src="https://img.icons8.com/fluency/96/javascript.png"
                      alt="javascript"
                    />
                  </li>
                  <li>
                    <img
                      width="128"
                      height="128"
                      src="https://img.icons8.com/fluency/96/python.png"
                      alt="python"
                    />
                  </li>
                  <li>
                    <img
                      width="128"
                      height="128"
                      src="https://img.icons8.com/fluency/96/node-js.png"
                      alt="node-js"
                    />
                  </li>
                  <li>
                    <img
                      width="128"
                      height="128"
                      src="https://img.icons8.com/fluency/96/express-js.png"
                      alt="express-js"
                    />
                  </li>
                </ul>
              </div>
            </div>

            {/* Front-End
            <div className={`${box}`}>
              <div>
                <h3>Front-End</h3>
                ... front-end skills content ...
              </div>
            </div> */}

            {/* Game Development 
            <div className={`${box}`}>
              <div>
                 <h3>Game Development</h3>
                ... game development skills content ...
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

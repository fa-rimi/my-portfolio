import { box, boxStyle, boxHover } from "../constants/styles";

export default function Skills() {
  return (
    <section
      id="skills"
      className={`w-screen flex flex-col items-center justify-center`}>
      <div
        className={`text-[#161B36] w-10/12 flex flex-col items-around border-solid`}>
        <div>
          {/* Use grid with responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {/* Software */}
            <div className={`${box}`}>
              <div>
                <h3>Software</h3>
                {/* ... software skills content ... */}
              </div>
            </div>

            {/* Front-End */}
            <div className={`${box}`}>
              <div>
                <h3>Front-End</h3>
                {/* ... front-end skills content ... */}
              </div>
            </div>

            {/* Game Development */}
            <div className={`${box}`}>
              <div>
                <h3>Game Development</h3>
                {/* ... game development skills content ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

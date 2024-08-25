# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

 <!-- <div className="w-full h-full">
          {/* player 1 */}
          <div
            ref={pieceRef}
            player-id="P1"
            piece="0"
            className="bg-sky-500 absolute bottom-[8.1rem] size-8 left-[68px] border-2 rounded-full border-black border-dashed"
          />
          <div
            player-id="P1"
            piece="1"
            className="bg-sky-500 absolute bottom-[8.1rem] size-8 left-[8.2rem] border-2 rounded-full border-black border-dashed"
          />
          <div
            player-id="P1"
            piece="2"
            className="bg-sky-500 absolute bottom-[4.5rem] size-8 left-[68px] border-2 rounded-full border-black border-dashed"
          />
          <div
            player-id="P1"
            piece="3"
            className="bg-sky-500 absolute bottom-[4.5rem] size-8 left-[8.2rem] border-2 rounded-full border-black border-dashed"
          />

          {/* player 2 */}
          <div
            player-id="P2"
            piece="0"
            className="bg-green-500 absolute top-[8.1rem] size-8 right-[68px] border-2 rounded-full border-black border-dashed"
          />
          <div
            player-id="P2"
            piece="1"
            className="bg-green-500 absolute top-[8.1rem] size-8 right-[8.2rem] border-2 rounded-full border-black border-dashed"
          />
          <div
            player-id="P2"
            piece="2"
            className="bg-green-500 absolute top-[4.5rem] size-8 right-[68px] border-2 rounded-full border-black border-dashed"
          />
          <div
            player-id="P2"
            piece="3"
            className="bg-green-500 absolute top-[4.5rem] size-8 right-[8.2rem] border-2 rounded-full border-black border-dashed"
          />
        </div>

        {/* player bases */}
        <div>
          <div
            className="w-[13.2rem] h-[13.2rem] border-[2.1rem] border-neutral-100/35 absolute bottom-2.5 left-2.5"
            player-id="P1"
          ></div>
          <div
            className="w-[13.2rem] h-[13.2rem] border-[2.1rem] border-neutral-100/35 absolute top-2.5 right-2.5"
            player-id="P2"
          ></div>
        </div> -->

<!--
 <div className="w-full h-full">
          {/* player 1 */}

          {[
            {
              bottom: "8.1rem",
              left: "68px",
            },
            {
              bottom: "8.1rem",
              left: "8.2rem",
            },
            {
              bottom: "4.5rem",
              left: "68px",
            },
            {
              bottom: "4.5rem",
              left: "8.2rem",
            },
          ].map(({ bottom, left }, index) => (
            <div
              onClick={() => setPiecePosition("P1", index, 1)}
              ref={(el) => (pieceRefs.current[index] = el)}
              key={index}
              player-id="P1"
              className={`bg-sky-500 absolute bottom-[${bottom}] size-8 left-[${left}] border-2 rounded-full border-black border-dashed`}
            />
          ))}

          {/* player 2 */}
          {[
            {
              top: "8.1rem",
              right: "68px",
            },
            {
              top: "8.1rem",
              right: "8.2rem",
            },
            {
              top: "4.5rem",
              right: "68px",
            },
            {
              top: "4.5rem",
              right: "8.2rem",
            },
          ].map(({ top, right }, index) => (
            <div
              // ref={(el) => (pieceRefs.current[index] = el)}
              key={index}
              player-id="P2"
              // piece={piece}
              className={`bg-green-500 absolute top-[${top}] size-8 right-[${right}] border-2 rounded-full border-black border-dashed`}
            />
          ))}
        </div>

        {/* player bases */}
        <div>
          <div
            className="w-[13.2rem] h-[13.2rem] border-[2.1rem] border-neutral-100/35 absolute bottom-2.5 left-2.5"
            player-id="P1"
          ></div>
          <div
            className="w-[13.2rem] h-[13.2rem] border-[2.1rem] border-neutral-100/35 absolute top-2.5 right-2.5"
            player-id="P2"
          ></div>
        </div> -->

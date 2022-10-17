import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import deepStrictEquals from "./helpers/01.js";
import shiftItem from "./helpers/02.js";
import moveItems from "./helpers/03.js";
import moveAlongColumn from "./helpers/04.js";
import betterDoubleShuffle from "./helpers/05.js";

const gameGrid = [["https://i.imgur.com/zhpfEVe.png", "https://i.imgur.com/u10nOUw.png", "https://i.imgur.com/sEQOcGq.png"], ["https://i.imgur.com/ggUqmPE.png", "https://i.imgur.com/0GB90f6.png", "https://i.imgur.com/nN4kAp6.png"], ["https://i.imgur.com/cj9s8XS.png", "https://i.imgur.com/G1kBgAO.png", "https://i.imgur.com/BOkhyd6.png"]]
const blankSpace = [0, gameGrid[0].length - 1]

const blankUrl = 'https://i.imgur.com/IGnmVTp.png'

const gridWithBlank = gameGrid.map((subArray, ind) => {
    if (ind === blankSpace[0]) {
        const sub = subArray.map(x => x)

        return sub.map((val, i) => {
            if (i === blankSpace[1]) {
                return blankUrl
            }
            return val
        })
    }
    return subArray.map(x => x)
});

let animationActive = false;

const Winner = (props) => {
    return (
        <h2 className={"winnerMessage"}>
            You won!
            It took you {props.moves} moves!
        </h2>
    )
}

function GameSquare(props) {
    const [lastSpot, setLastSpot] = React.useState(() => {
        return null;
    });

    const actualButtonRef = React.useRef(null);

    React.useEffect(() => {
        if (props.val !== blankUrl) {
            const curButton = actualButtonRef.current;
            const newPosition = curButton.getBoundingClientRect();
            if (lastSpot) {
                animationActive = true;
                const oldPosition = lastSpot;
                const deltaX = oldPosition.left - newPosition.left;
                const deltaY = oldPosition.top - newPosition.top;
                curButton.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        curButton.style.animation = "none";
                        curButton.style.animation = "backToPlace 0.25s ease-out forwards";
                        function animationEnd() {
                            setTimeout(() => {
                                animationActive = false;
                                curButton.style.transform = "none";
                                curButton.style.animation = "none";
                                curButton.removeEventListener("animationend", animationEnd);
                            });
                        }

                        curButton.addEventListener("animationend", animationEnd);
                    });
                });
            }
            setLastSpot(newPosition);
        }
    }, [props.index]);

    React.useEffect(() => {
        function resize() {
            const curButton = actualButtonRef.current;
            setLastSpot(curButton.getBoundingClientRect());
        }

        if (props.val !== blankUrl) {
            window.addEventListener("resize", resize)
        } else {
            window.removeEventListener("resize", resize);
        }

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, []);

    return <div ref={actualButtonRef} className='gameSquare' onClick={() => {
        return props.onMove(Math.floor(props.index / 3), props.index % 3);
    }} style={blankUrl === props.val ? {opacity: 0} : {}}>
        <img src={props.val} alt={`Tile ${props.index + 1}`} id={props.val}/>
    </div>;
}

const GameBoard = (props) => {
    // Flat-mapping to prevent reinitializing of component
    const images = props.grid.flatMap(x => x);

    const tiles = images.map((image, index) => {
        return <GameSquare onMove={props.onMove} index={index} val={image} key={image}></GameSquare>
    });

    return <section id='gameBoard'>
        {tiles}
    </section>;
}

const Game = () => {
    const [grid, setGrid] = React.useState([...gridWithBlank].map(x => [...x]))
    const [isWin, setIsWin] = React.useState(false)
    const [moveCount, setMoveCount] = React.useState(0)

    const blankSubArr = grid.findIndex(x => x.includes(blankUrl))
    const blankIndex = grid[blankSubArr].indexOf(blankUrl)

    // insert Day1 function 'checkWin' here
    // instead of return true or return false, use setIsWin(true) or setIsWin(false)
    function checkWin(grid1, grid2) {
        let result = deepStrictEquals(grid1, grid2);
        if (result) animationActive = false;
        setIsWin(result);
    }

    // insert Day2 move left function 'moveBlankLeft(curGrid, blankChar)' here
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankLeft(curGrid, blankChar) {
        let result = shiftItem(curGrid, blankChar, -1);
        checkWin(gridWithBlank, curGrid);
        return result;
    }

    // insert Day2 move right function 'moveBlankRight(curGrid, blankChar)' here
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankRight(curGrid, blankChar) {
        let result = shiftItem(curGrid, blankChar, 1);
        checkWin(gridWithBlank, curGrid);
        return result;
    }

    // insert Day4 move up function 'moveBlankUp(curGrid, blankGrid) here'
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankUp(curGrid, blankChar) {
        let result = moveAlongColumn(curGrid, blankChar, -1);
        checkWin(gridWithBlank, curGrid);
        return result;
    }

    // insert Day4 move down function 'moveBlankDown(curGrid, blankGrid) here'
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankDown(curGrid, blankChar) {
        let result = moveAlongColumn(curGrid, blankChar, 1);
        checkWin(gridWithBlank, curGrid);
        return result;
    }

    // My found and modified Day5 shuffle function
    // Uses Durstenfeld shuffle algorithm
    const shuffleGrid = () => {
        if (!animationActive) {
            if (isWin === false) {
                animationActive = true;
            }
            setIsWin(false)
            const tempFlatGrid = ([...grid].map(x => [...x])).flat()

            for (let i = tempFlatGrid.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = tempFlatGrid[i];
                tempFlatGrid[i] = tempFlatGrid[j];
                tempFlatGrid[j] = temp;
            }

            const tempGrid = []
            while (tempFlatGrid.length) {
                tempGrid.push(tempFlatGrid.splice(0, 3))
            }

            setGrid(tempGrid);
        }
    }

    const resetGame = () => {
        animationActive = false;
        setGrid([...gridWithBlank].map(x => [...x]))
        setIsWin(false)
        setMoveCount(0)
    }

    const handleMove = (arrInd, valInd) => {
        const newGrid = [...grid].map(x => [...x])
        if (arrInd === blankSubArr) {
            const gridDimension = newGrid.length
            if (valInd - blankIndex === 1) {
                // move right
                const modifiedArr = []
                for (let i = 0; i < newGrid.length; i++) {
                    if (i === blankSubArr) {
                        modifiedArr.push(moveBlankRight(newGrid[i], blankUrl))
                    } else {
                        modifiedArr.push(newGrid[i])
                    }
                }

                checkWin(gridWithBlank, modifiedArr)
                setGrid([...modifiedArr].map(x => x))
                setMoveCount(moveCount + 1)
            } else if (valInd - blankIndex === -1 && blankIndex % gridDimension) {
                // move left
                const modifiedArr = []
                for (let i = 0; i < newGrid.length; i++) {
                    if (i === blankSubArr) {
                        modifiedArr.push(moveBlankLeft(newGrid[i], blankUrl))
                    } else {
                        modifiedArr.push(newGrid[i])
                    }
                }

                checkWin(gridWithBlank, modifiedArr)
                setGrid([...modifiedArr].map(x => x))
                setMoveCount(moveCount + 1)
            }
        } else if (arrInd !== blankSubArr && valInd === blankIndex) {
            if (arrInd - blankSubArr === 1) {
                // move down
                setGrid([...moveBlankDown(newGrid, blankUrl)].map(x => x))
                setMoveCount(moveCount + 1)
            } else if (arrInd - blankSubArr === -1) {
                // move up
                setGrid([...moveBlankUp(newGrid, blankUrl)].map(x => x))
                setMoveCount(moveCount + 1)
            }
        }
    }

    return (
        <div className={"game"}>
            <div className={"buttons"}>
                <button onClick={() => shuffleGrid()}>Shuffle</button>
                <button onClick={() => resetGame()}>New Game</button>
            </div>
            <div className={"gameContainer"}>
                {isWin && <Winner moves={moveCount}/>}
                <GameBoard onMove={(arrInd, valInd) => {
                    if (!animationActive) {
                        handleMove(arrInd, valInd);
                    }
                }} grid={grid}/>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Game></Game>)
import { BoardBackground } from "./BoardStructure";
import { BoardSquare } from "./BoardStructure";

const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

export const Board = () => {

    return [
    <BoardBackground>
        {numberArray.map((number) => ( 
            <BoardSquare>{number}</BoardSquare>
        ))}
    </BoardBackground>
    ]
};
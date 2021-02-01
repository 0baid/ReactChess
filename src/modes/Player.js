import React, {useState} from 'react';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';
import {Section,Container,BTNContainer,Button} from '../style';

const Player = () => {

    const [chess, setChess] = useState(new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'));
    const [FEN, setFEN] = useState(chess.fen());
    const handleMove = (move) => {
    if(chess.move(move)){
        setFEN(chess.fen());
    }
}
    return (
        <>
            <Chessboard
                position={FEN}
                onDrop={(move) => {
                    handleMove({
                        from:move.sourceSquare,
                        to:move.targetSquare,
                        promotion:"q"
                    })
                }}
            />
            <Button onClick={() => {setFEN('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')}}>Reset Board</Button>
        </>
    )
}

export default Player

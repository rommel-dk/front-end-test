import React, {useState, useEffect} from 'react';
import Tiles from "../tiles.comonents/Tiles";
import assignmentData from "../../assignment-assets/data.json";
import "./section.styles.css"

// console.log(assignmentData.tiles)
const data = assignmentData.tiles;

function Section() {
    const [assignmentDataState, setAssignmentDataState] = useState(null)
    useEffect(() => {
        setAssignmentDataState(data)
      }, [])       

    return (
        <div className="main-section">
            {assignmentDataState && assignmentDataState.map((tile, index) =>            
                <div className="item" key={index}>
                    <Tiles  image={tile.image}
                        date={tile.date}
                        author={tile.author} 
                        title={tile.title}
                        appearance={tile.appearance}
                    />
                </div>
            )}
        </div>
    )
}

export default Section;

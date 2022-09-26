import React from 'react'
import './myTree.css'

const Tree = ({ stateAll }: any) => {

    let handleOpen = (e : React.MouseEvent) : void => {
        const clickedEl = e.target as HTMLSpanElement;
        e.stopPropagation();
        clickedEl.parentElement?.querySelector(".nested")?.classList.toggle("active");
        clickedEl.classList.toggle("caret-down");
    }

    let tree = (data : any, toRight : number, ind : number) => {
        toRight++;

        return (
            Object.keys(data).map((item) => {

                if (item === 'chart') return

                if (typeof data[item] === 'object' || Array.isArray(data[item])) {
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={item + toRight}>
                        <span className="Mycaret" onClick={ (e) => handleOpen(e)}>{item}</span>
                        <ul className="nested">
                            {tree(data[item], toRight, ind++)}
                        </ul>
                    </li>
                } else {
                    return <li style={{paddingLeft : toRight * 2 + 'px'}} key={item + toRight}>{`${item} : ${data[item]?.toString()}`}</li>
                }

            })
        )
    }

    return (
        <div className={'myTree'}>
            {
                tree(stateAll, 0, 0)
            }
        </div>
    )
}

export default React.memo(Tree);
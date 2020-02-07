import React, {useState} from 'react';
import styles from './pagination.module.css';

const Pagination = ({tasksCountPage, selectForm, name,getTodoList}) => {

    let pagesCount = Math.ceil(tasksCountPage / 3);
    let portionSize= 4;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    let [numPage, setNumerPage] = useState(1);

    const onPageChanged = (numerPage) => {
        let selectBy = (selectForm.values.favoriteSortUser) ;
        let selectParam = (selectForm.values.favoriteSorParam );
        getTodoList(name, selectBy, selectParam, numerPage.p);
        setNumerPage(numerPage.p);
    }

    return (
        <div className="item_article">
            { portionNumber > 1 &&
            <button className="btn btn-link" onClick={() => { setPortionNumber(portionNumber -1) }} >Prev</button> }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={numPage === p ? styles.activelist:""}
                    key={p}
                      onClick ={() => {
                          onPageChanged({p});
                      } }>{p}</span>
                })
            }
            { portionCount > portionNumber &&
            <button className="btn btn-link" onClick={() => { setPortionNumber(portionNumber +1)}}>Next</button>}
        </div>
    )
}

export default Pagination;

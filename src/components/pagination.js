import { Link } from "react-router-dom";
import styled from "styled-components";


const PageList =styled.div`
    display:flex;
    gap:10px;
`
const PageListOutter =styled.ul`
    display:flex;
    gap:20px;
`

function Pagination({setPage,page,setPagiNum,pagiNum,maxPagi}){

    const prev =()=>{
        if(pagiNum>0){
            setPagiNum(pagiNum-1);
            console.log("prev")
        }
        
    }
    const next= ()=>{
        if(pagiNum+4<maxPagi-1){
            setPagiNum(pagiNum+1);
            console.log("next")
        }

    }
    const pageSelect=(pageNum)=>{
        setPage(pageNum)
        console.log(pageNum + ":선택")
    }
    console.log("현재페이지")
    console.log(pagiNum)
    console.log(page)
    console.log(maxPagi)
    return(
        <nav aria-label="...">
                    <ul class="pagination">
                        
                        <li class={pagiNum+1 > 1 ?
                            "page-item"
                            :
                            "page-item disabled"}>
                        <Link onClick={prev} class="page-link">{"<"}</Link>
                        </li>
                        <PageList>
                        <li class={pagiNum==page?"page-item active":"page-item"}>
                            <Link class="page-link" onClick={()=> pageSelect(pagiNum)}>{pagiNum+1}</Link>
                        </li>
                        {( maxPagi<pagiNum+1 )||
                        <li class={pagiNum+1==page?"page-item active":"page-item"} aria-current="page">
                        <Link class="page-link" onClick={()=> pageSelect(pagiNum+1)}>{pagiNum+2}</Link>
                        </li>}
                        { (maxPagi<pagiNum+2) ||
                            <li class={pagiNum+2==page?"page-item active":"page-item"}><Link class="page-link" onClick={()=> pageSelect(pagiNum+2)}>
                        {pagiNum+3}
                        </Link></li>}
                        { (maxPagi < pagiNum+3) ||
                            <li class={pagiNum+3==page?"page-item active":"page-item"}>
                                <Link class="page-link" onClick={()=> pageSelect(pagiNum+4)}>
                                {pagiNum+3}
                            </Link>
                        </li>}
                        { (maxPagi<pagiNum+4) ||
                        <li class={pagiNum+4==page?"page-item active":"page-item"}>
                            <Link class="page-link" onClick={pageSelect(()=> pagiNum+5)}>
                            {pagiNum+4}
                            </Link>
                        </li>}
                            </PageList>
                        <li class={pagiNum+4 < maxPagi ?
                            "page-item"
                            :
                            "page-item disabled"}>
                        <Link onClick={next} class="page-link">{">"}</Link>
                        </li>
                    </ul>
                </nav>
    )
}

export default Pagination;
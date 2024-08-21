import { useState } from "react";
import styled from "styled-components";
import GroupCard from "./groupCard";

const GroupsOutter=styled.div`
    display:flex;
    width: 1560px;
    margin: 60px 0 60px 0 ;
    gap:20px;
    flex-wrap:wrap;

`
const TestSmallGroup1=styled.div`
    gap:20px;
    width:375px;
    height:406px;
    background-color:red;
`
const TestSmallGroup2=styled.div`
    gap:20px;
    width:375px;
    height:561px;
    background-color:green;
`
const TestSmallGroup3=styled.div`
    gap:20px;
    width:375px;
    height:206px;
    background-color:blue;
`
const SmallGroups=styled.div`
    display:flex;
    gap:20px;
    width:375px;
    flex-direction:column;
    flex-shrink:1;
    flex-grow:0;

`
const MiddleGroups=styled.div`
    display:flex;
    gap:20px;
    width:375px;
    flex-direction:column;
    flex-shrink:1;
    flex-grow:0;

`


function Test(){
    return(
        <>
             <MiddleGroups>
                <SmallGroups>
                        <GroupCard/>
                        <GroupCard/>
                        <TestSmallGroup3/>
                </SmallGroups>
                <SmallGroups>
                        <TestSmallGroup2/>
                        <GroupCard/>
                        <GroupCard/>
                </SmallGroups>
            </MiddleGroups>
            <MiddleGroups>
                <SmallGroups>
                        <TestSmallGroup2/>
                        <GroupCard/>
                        <TestSmallGroup3/>
                </SmallGroups>
                <SmallGroups>
                        <GroupCard/>
                        <TestSmallGroup2/>
                        <GroupCard/>
                </SmallGroups>
            </MiddleGroups>
            <MiddleGroups>
                <SmallGroups>
                        <TestSmallGroup3/>
                        <TestSmallGroup2/>
                        <TestSmallGroup3/>
                </SmallGroups>
                <SmallGroups>
                        <TestSmallGroup2/>
                        <TestSmallGroup3/>
                        <GroupCard/>
                </SmallGroups>
            </MiddleGroups>
            <MiddleGroups>
                <SmallGroups>
                        <GroupCard/>
                        <TestSmallGroup2/>
                        <TestSmallGroup3/>
                </SmallGroups>
                <SmallGroups>
                        <TestSmallGroup3/>
                        <TestSmallGroup2/>
                        <GroupCard/>
                </SmallGroups>
            </MiddleGroups>
        </>
    )
}




function Groups(){
 return(
    <GroupsOutter>
        <Test></Test>
    </GroupsOutter>
 )
}

export default Groups;
import React from "react";

interface Props{
    inverted?: boolean;
    content: string;

}

export default function LoadingComponent({inverted=true, content='Loading...'}){
    return (
        <div className="grid grid-cols-1 justify-items-center">
            <svg className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-black border-t-transparent rounded-full" role="status"/>
            {/*<span className="font-bold mt-4">{content}</span> */}
        </div>
    )
}
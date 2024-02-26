import React, {PropsWithChildren, useState} from "react";
import {router} from "@inertiajs/react";

const nextPage = (currentPage: number, maxPage: number) => {
    if (currentPage >= maxPage) return;
    router.reload({only: ['teams','total', 'page', 'max_pages'], data: {page: currentPage + 1}})
}

const prevPage = (currentPage: number, maxPage: number) => {
    if (currentPage <= 1) return;
    router.reload({only: ['teams', 'total', 'page', 'max_pages'], data: {page: currentPage - 1}})
}

const Button = ({children, ...props}: PropsWithChildren & React.ComponentPropsWithoutRef<'button'>) => {
    return (
        <button className='rounded-md bg-neutral-800 p-2 pr-4 pl-4 hover:bg-neutral-700 text-sm disabled:bg-neutral-600 max-[420px]:w-full' {...props}>
            {children}
        </button>
    );
};

export default function Pagination({currentPage, maxPage, total}: {
    currentPage: number,
    maxPage: number,
    total: number
}) {
    console.log(currentPage);
    return (
        <div>
            <div className="flex justify-between items-center pl-1 pr-1 min-[420px]:flex-row flex-col-reverse gap-4">
                <span className='justify-self-start text-neutral-300 text-sm'>Page {currentPage} of {maxPage} &nbsp;&#x2022;&nbsp; {total} results</span>

                <div className='flex gap-3 max-[420px]:w-full'>
                    <Button onClick={() => prevPage(currentPage, maxPage)} {...{disabled: currentPage === 1}}>Previous</Button>
                    <Button onClick={() => nextPage(currentPage, maxPage)} {...{disabled: currentPage === maxPage}}>Next</Button>
                </div>
            </div>
        </div>
    )
}

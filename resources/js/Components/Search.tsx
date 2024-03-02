import {Input} from "@/Components/ui/input";
import {router} from "@inertiajs/react";
import React from "react";
import {cn} from "@/lib/utils";

const querySearch = (event: React.KeyboardEvent<HTMLInputElement>, collectionKey: string) => {
    updateButton();
    if (event.key === 'Enter') {
        router.reload({only: [collectionKey, 'page', 'max_pages', 'total'], data: {search: event.currentTarget.value, page: 1}});
    }
}

const searchButton = (collectionKey: string) => {
    router.reload({only: [collectionKey, 'page', 'max_pages', 'total'], data: {search: $('#search-input').val(), page: 1}});
}

const clearSearch = (collectionKey: string) => {
    router.reload({only: [collectionKey, 'page', 'max_pages', 'total'], data: {page: 1, search: null}});
    $('#search-input').val('');
    updateButton();
}

const updateButton = () => {
    if ($('#search-input').val() === '') {
        $('.close-button').hide();
    } else {
        $('.close-button').show();
    }
}

function Search({placeholder = 'Search all teams', collectionKey = 'teams'}: { placeholder?: string, collectionKey?: string }) {
    return (
        <div className='flex'>
            <div className='search-wrapper'>
                <input
                    id='search-input'
                    className={"h-10 rounded-l-md bg-neutral-800 pl-3 pr-8 py-2 text-sm placeholder:text-neutral-500 border-none outline-none" +
                        " w-full" +
                        " md:w-[250px]"}
                    onKeyDown={(event) => querySearch(event, collectionKey)}
                    placeholder={placeholder}
                />

                <div className='w-6 fixed close-button hidden'>
                    <svg viewBox="0 0 40 40" onClick={() => clearSearch(collectionKey)}>
                        <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30"/>
                    </svg>
                </div>
            </div>

            <hr className='w-[2px] h-auto bg-neutral-900 border-none'/>

            <div className='bg-neutral-800 rounded-r-md w-12 flex justify-center items-center hover:cursor-pointer hover:bg-neutral-600'
                 onClick={() => searchButton(collectionKey)}>
                <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 19.9 19.7">
                    <g className="search-path" fill="none" stroke="#848F91">
                        <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/>
                        <circle cx="8" cy="8" r="7"/>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Search;

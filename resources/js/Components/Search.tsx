import {Input} from "@/Components/ui/input";
import {router} from "@inertiajs/react";
import React from "react";

const querySearch = (event: React.KeyboardEvent<HTMLInputElement>, collectionKey: string) => {
    if (event.key === 'Enter') {
        router.reload({only: [collectionKey, 'page', 'max_pages', 'total'], data: {search: event.currentTarget.value, page: 1}})
    }
}

function Search({placeholder = 'Search all teams', collectionKey = 'teams'}: {placeholder?: string, collectionKey?: string}) {
    return (
        <Input id='search_collection' className='w-full md:w-[250px]' type="search" onKeyDown={(event )=> querySearch(event, collectionKey)} placeholder={placeholder    }/>
    );
}

export default Search;

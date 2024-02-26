import {Input} from "@/Components/ui/input";
import {router} from "@inertiajs/react";
import React from "react";

const querySearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        router.reload({only: ['teams', 'page', 'max_pages', 'total'], data: {search: event.currentTarget.value, page: 1}})
    }
}

const Search = () => {
    return (
        <Input className='w-full md:w-[250px]' type="search" onKeyDown={querySearch} placeholder="Search all teams"/>
    );
}

export default Search;

import {Input} from "@/Components/ui/input";
import {router} from "@inertiajs/react";
import React from "react";

const querySearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
        router.reload({only: ['teams'], data: {search: event.currentTarget.value}})
    }
}

const Search = () => {
    return (
        <Input type="search" onKeyDown={querySearch} placeholder="Search all teams"/>
    );
}

export default Search;
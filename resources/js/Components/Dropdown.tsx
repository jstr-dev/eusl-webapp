import {createContext, PropsWithChildren, useContext} from "react";
import {Dropdown as FlowDropdown} from 'flowbite';
import type {DropdownOptions, DropdownInterface} from 'flowbite';
import type {InstanceOptions} from 'flowbite';

const Dropdown = ({children, id}: PropsWithChildren & string) => {
    return (
        <div>
            <button id="dropdownButton" data-dropdown-toggle={id} data-dropdown-offset-skidding="0"
                    data-dropdown-placement='bottom-start'
                    className="bg-neutral-800 hover:bg-neutral-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    type="button">Dropdown Select
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            <div id={id}
                 className="z-10 hidden bg-neutral-800 divide-gray-100 rounded-lg shadow w-44">
                {children}
            </div>
        </div>
    );
}

const Content = ({children}: PropsWithChildren) => {
    return (
        <ul className="text-sm overflow-y-auto max-h-48"
            aria-labelledby="dropdownDefaultButton">
            {children}
        </ul>
    )
}

const Item = ({children}: PropsWithChildren) => {
    return (
        <li className='[&_a]:first:rounded-t-lg [&_a]:last:rounded-b-lg'>
            <a href="#"
               className="block px-4 py-2 hover:bg-neutral-700">{children}</a>
        </li>
    )
}

// Add additional content to main
Dropdown.Content = Content;
Dropdown.Item = Item;

export default Dropdown;
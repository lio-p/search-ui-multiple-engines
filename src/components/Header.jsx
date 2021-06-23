import React from "react";
import LangSelector from './LangSelector';
import {
    SearchBox
} from '@elastic/react-search-ui';

const Header = () => {
    return (
        <>
            <div className="search-header">
                <SearchBox/>
                <LangSelector />
            </div>
        </>
    )
}

export default Header;
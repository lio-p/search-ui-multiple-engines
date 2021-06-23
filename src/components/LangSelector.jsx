
import React, { useState } from 'react';
import {
    EuiSelect
} from '@elastic/eui';
import { withRouter } from 'react-router-dom';

const LangSelector = withRouter(({ location, history }) => {

    const options = [
        { value: 'en', text: 'English' },
        { value: 'fr', text: 'French' },
        { value: 'es', text: 'Spanish' },
    ];

    const [lang, setLang] = useState(location.pathname.substr(1,));

    const onChange = (e) => {
        history.push("/" + e.target.value);
        setLang(e.target.value);
    };

    return (
        <div className="lang-selector">
            <EuiSelect
                options={options}
                value={lang}
                onChange={onChange}
            />
        </div>
    )
})

export default LangSelector;
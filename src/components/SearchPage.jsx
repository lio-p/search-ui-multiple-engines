import React from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, } from "@elastic/react-search-ui";
import {
    Layout,
} from "@elastic/react-search-ui-views";
import { SearchDriver } from "@elastic/search-ui";
import Header from "./Header";


class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        const connector = new AppSearchAPIConnector({
            "engineName": "blogs-" + props.lang,
            "endpointBase": process.env.REACT_APP_AS_BASE_URL,
            "searchKey": process.env.REACT_APP_AS_SEARCH_API_KEY
        });

        const config = {
            apiConnector: connector,
            searchQuery: {

                search_fields: {
                    title: {},
                    meta_description: {},
                    url: {}
                },
                result_fields: {
                    title: {
                        snippet: {
                            size: 100,
                            fallback: true
                        }
                    },
                    url: {
                        raw: {}
                    },
                }
            },
            alwaysSearchOnInitialLoad: true
        };
        const driver = new SearchDriver(config)
        this.state = { driver: driver };


    }
    render() {
        return (
            <SearchProvider driver={this.state.driver}>
                <Layout
                    header={<Header />}
                    bodyContent={<Results titleField="title" urlField="url" />}
                />
            </SearchProvider>
        )
    };
}


export default SearchPage;
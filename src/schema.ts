/**
 * @author WMXPY
 * @namespace Search
 * @description Schema
 */

import { SchemaTypeOpts } from "mongoose";

export const createTextSearchSchemaType = (required: boolean = false, index: boolean = false): SchemaTypeOpts<any> => {

    return {
        type: String,
        required,
        index: index ? createTextSearchIndex() : false,
    };
};

export const createTextSearchIndex = (): string => {

    return 'text';
};

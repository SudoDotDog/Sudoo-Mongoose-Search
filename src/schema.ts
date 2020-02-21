/**
 * @author WMXPY
 * @namespace Search
 * @description Schema
 */

import { Schema, SchemaTypeOpts } from "mongoose";
import { TEXT_SEARCH_LANGUAGE } from "./declare";

export const createTextSearchSchemaType = (required: boolean = false, index: boolean = false): SchemaTypeOpts<any> => {

    return {
        type: String,
        required,
        index: index ? createTextSearchIndex() : false,
    };
};

export const declareSchemaTextSearchIndex = (schema: Schema, field: string, language: TEXT_SEARCH_LANGUAGE): void => {

    schema.index(
        {
            [field]: createTextSearchIndex(),
        },
        {
            default_language: language,
        },
    );
};

export const createTextSearchIndex = (): string => {

    return 'text';
};

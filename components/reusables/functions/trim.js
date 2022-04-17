import React from 'react';

export const trim = (yourString, maxLength) => {
    let trimmedString = yourString.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + '...'
    return trimmedString
};


'use strict';
module.exports = {
    post: (url, data) => {
        return Promise.resolve({
            data: {
                user: {
                    "eamil": data.email,
                    "phone": data.phone,
                    "checked": data.checked
                }
            }
        });
    }
};
// window.blockTemplate = (function () {
//     return `
//     <div class="{{ className }}">
//         <span onClick="{{ handleClick }}">{{ text }}</span>
//         <span>{{ user.info.firstName}}</span>
//     </div>
//     `;
// })();

const obj = {
    data: {
        first: 'Some Name',
        second: true,
    }
};

function get(obj, path, defaultValue) {
    const keys = path.split('.');

    let result = obj;

    for (let key of keys) {
        result = result[key];

        if(result === undefined) {
            return defaultValue;
        };
    };

    return result;
};
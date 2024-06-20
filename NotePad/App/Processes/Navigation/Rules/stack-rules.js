import * as React from 'react';

export const navigationRef = React.createRef();

class Relocate {
    static navigate(name, params) {
        if (navigationRef.current) {
            navigationRef.current.navigate(name, params);
        }
    }

    static back() {
        if (navigationRef.current) {
            navigationRef.current.goBack();
        }
    }

    static toMain(params) {
        Relocate.navigate('Main', params);
    }

    static toTest(params) {
        Relocate.navigate('Test', params);
    }

    static toUser(params) {
        Relocate.navigate('User', params);
    }
}

export default Relocate;

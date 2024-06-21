import * as React from 'react';

export const authNavigationRef = React.createRef();

class Authentication {
    static navigate(name, params) {
        if (authNavigationRef.current) {
            authNavigationRef.current.navigate(name, params);
        }
    }

    static back() {
        if (authNavigationRef.current) {
            authNavigationRef.current.goBack();
        }
    }

    static toUserReg(params) {
        Authentication.navigate('UserReg', params);
    }

    static toUserAuth(params) {
        Authentication.navigate('UserAuth', params);
    }

    static toUserMailCode(params) {
        Authentication.navigate('UserMailCode', params);
    }
};

export default Authentication;

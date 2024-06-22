import * as React from 'react';

export const notepadNavRef = React.createRef();
export const authNavigationRef = React.createRef();

class Show {
    static navigate(ref, name, params) {
        if (ref.current) {
            ref.current.navigate(name, params);
        }
    }

    static back(ref) {
        if (ref.current) {
            ref.current.goBack();
        }
    }

    // Notepad methods
    static Check(params) {
        Show.navigate(notepadNavRef, 'Check', params);
    }

    static Write(params) {
        Show.navigate(notepadNavRef, 'Write', params);
    }

    static Overlook(params) {
        Show.navigate(notepadNavRef, 'Overlook', params);
    }

    // Authentication methods
    static toUserReg(params) {
        Show.navigate(authNavigationRef, 'UserReg', params);
    }

    static toUserAuth(params) {
        Show.navigate(authNavigationRef, 'UserAuth', params);
    }

    static toUserMailCode(params) {
        Show.navigate(authNavigationRef, 'UserMailCode', params);
    }
};

export default Show;

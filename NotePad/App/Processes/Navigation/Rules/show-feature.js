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
    static Registration(params) {
        Show.navigate(authNavigationRef, 'Registration', params);
    }

    static Authorisation(params) {
        Show.navigate(authNavigationRef, 'Authorisation', params);
    }

    static EmailCode(params) {
        Show.navigate(authNavigationRef, 'Validate Email', params);
    }
};

export default Show;

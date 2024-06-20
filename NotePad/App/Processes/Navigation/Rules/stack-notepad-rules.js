import * as React from 'react';

export const notepadNavRef = React.createRef();

class Notepad {
    static navigate(name, params) {
        if (notepadNavRef.current) {
            notepadNavRef.current.navigate(name, params);
        }
    }

    static back() {
        if (notepadNavRef.current) {
            notepadNavRef.current.goBack();
        }
    }

    static Check(params) {
        Notepad.navigate('Check', params);
    }

    static Write(params) {
        Notepad.navigate('Write', params);
    }

    static Overlook(params) {
        Notepad.navigate('Overlook', params);
    }
};

export default Notepad;

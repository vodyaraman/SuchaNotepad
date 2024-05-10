const getNoteType = (note) => {
    switch (note.type) {
      case 'important':
        return {
          backgroundColor: '#29ff3e7f',
          textColor: '#89eb34',
          text: note.content,
          numberOfLines: undefined
        };
      case 'reminder':
        return {
          backgroundColor: '#89eb34',
          textColor: '#0000ff',
          text: note.content,
          numberOfLines: 2
        };
      default:
        return {
          backgroundColor: '#fff',
          textColor: '#333',
          text: note.content,
          numberOfLines: undefined
        };
    }
};

export default getNoteType;
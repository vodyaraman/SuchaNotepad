const getNoteType = (note) => {
    switch (note.type) {
      case 'important':
        return {
          textColor: '#ff0000',
          text: note.content,
          numberOfLines: undefined
        };
      case 'reminder':
        return {
          textColor: '#0000ff',
          text: note.content,
          numberOfLines: 2
        };
      default:
        return {
          textColor: '#333',
          text: note.content,
          numberOfLines: undefined
        };
    }
};

export default getNoteType;
export const getNoteType = (type) => {
    switch (type) {
      case 0:
        return {
          backgroundColor: '#00ffffd3',
          textColor: '#89eb34',
          timezone: false,
        };
      case 1:
        return {
          backgroundColor: '#89eb34',
          textColor: '#0000ff',
          timezone: false,
        };
      case 2:
        return {
          backgroundColor: '#FFDA00',
          textColor: '#FFDA00',
          timezone: true,
        };
      default:
        return {
          backgroundColor: '#0000ff',
          textColor: '#89eb34',
          timezone: false,
        };
    }
};
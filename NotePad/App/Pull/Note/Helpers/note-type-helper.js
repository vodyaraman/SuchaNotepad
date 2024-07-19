export const getNoteType = (type) => {
    switch (type) {
      case 0:
        return {
          backgroundColor: '#7A7676',
          textColor: '#89eb34',
          timezone: false,
        };
      case 1:
        return {
          backgroundColor: '#7A7676',
          textColor: '#0000ff',
          timezone: false,
        };
      case 2:
        return {
          backgroundColor: '#7A7676',
          textColor: '#FFDA00',
          timezone: true,
        };
      default:
        return {
          backgroundColor: '#7A7676',
          textColor: '#89eb34',
          timezone: false,
        };
    }
};
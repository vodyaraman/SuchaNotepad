export const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Текст успешно скопирован в буфер обмена!');
    } catch (err) {
      console.error('Ошибка:', err);
    }
};
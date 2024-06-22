export const generateActivateCode = () => {
    const chars=['A','B','C','D','E','F','G',
        'H','J','K','L','M','N','O','P',
        'R','S','T','U','V','W','X','Y','Z',
        '0','1','2','3','4','5','6','7','8','9'];

    let code='';

    for (let i = 0; i < 4; i++) {
        let r =  Math.floor(Math.random() * chars.length);
        code += chars[r]
    }
    return code;
}
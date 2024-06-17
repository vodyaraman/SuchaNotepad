export const generateActivateCode = () => {
    const chars=['A','a','B','b','C','c','D','d','E','e','F','f','G','g',
        'H','h','J','j','K','k','L','l','M','m','N','n','O','o','P','p',
        'R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z',
        '0','1','2','3','4','5','6','7','8','9'];

    let code='';

    for (let i = 0; i < 4; i++) {
        let r =  Math.floor(Math.random() * chars.length);
        code += chars[r]
    }
    return code;
}
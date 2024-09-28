export default function generatePassword() {
    let password: string = "";

    const characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    const passwordLength: number = 12;

    for(let i = 0; i < passwordLength; i++) {
        const randomIndex: number = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    
    return password;
}
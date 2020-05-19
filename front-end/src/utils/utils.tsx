export function isLogged(token: string) {
    if (token !== '' && token !== null)
        return true;
    else
        return false;
}
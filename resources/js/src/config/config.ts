const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000; // 365 days in milliseconds

const setItemWithExpiry = (key: string, value: any) => {
    const sessionObject = {
        expiresAt: new Date().getTime() + ONE_YEAR_MS,
        value,
    };
    localStorage.setItem(key, JSON.stringify(sessionObject));
};

const getItemWithExpiry = (key: string) => {
    const response = localStorage.getItem(key);

    if (response) {
        const data = JSON.parse(response);

        if (new Date().getTime() > data.expiresAt) {
            localStorage.removeItem(key);
            return null;
        }
        return data.value;
    }
    return null;
};

const removeItem = (key: string) => {
    localStorage.removeItem(key);
};

export const setToken = (userToken: string | string[] | undefined, key: string) => {
    setItemWithExpiry(key, userToken);
};

export const getToken = (key: string) => {
    return getItemWithExpiry(key);
};

export const removeToken = (key: string) => {
    removeItem(key);
};

export const setUserData = (userData: any) => {
    setItemWithExpiry('userData', userData);
};

export const getUserData = () => {
    return getItemWithExpiry('userData');
};

export const removeUserData = () => {
    removeItem('userData');
};

export const setUserUniqueIdentifier = (userData: any) => {
    setItemWithExpiry('userUniqueIdentifier', userData);
};

export const getUserUniqueIdentifier = () => {
    return getItemWithExpiry('userUniqueIdentifier');
};

export const removeUserUniqueIdentifier = () => {
    removeItem('userUniqueIdentifier');
};

export const setToken = (userToken: string | string[] | undefined,key:string) => {
  var expires = new Date().getTime() + 365*86400000 ;
  //365*24*60*60*1000   Day * Hour * Munites * Secoend * MiliSec 

  var sessionObject = {
      expiresAt: expires,
      token: userToken
      
  }
  localStorage.setItem('token', JSON.stringify(sessionObject));
}
  
export const getToken = (key:string) => {
  var response  = localStorage.getItem(key);
  
  var now=new Date().getTime()
  if (response!=null){
    const userToken = JSON.parse(response);  
  
    if(now > userToken.expiresAt ) 
    {
      localStorage.removeItem(key)
      return null
    }
    return userToken?.token;
  }
  else {
    
    return null;
  }
     
    
}

export const removeToken = (key:string) => {

  localStorage.removeItem(key);

  return true;
}

export const setUserData = (userData) => {
  var expires = new Date().getTime() + 365 * 86400000;
  // 365*24*60*60*1000   Day * Hour * Minutes * Seconds * Milliseconds

  var sessionObject = {
    expiresAt: expires,
    data: userData,
  };
  localStorage.setItem('userData', JSON.stringify(sessionObject));
};

export const getUserData = () => {
  var response = localStorage.getItem('userData');

  var now = new Date().getTime();
  if (response != null) {
    const userData = JSON.parse(response);

    if (now > userData.expiresAt) {
      localStorage.removeItem('userData');
      return null;
    }
    return userData?.data;
  } else {
    return null;
  }
};

export const removeUserData = () => {
  localStorage.removeItem('userData');
};

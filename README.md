# oauth2-integration-identity
Identity service that could integrate with Oauth2 seamlessly

# process -authorization:

B1. webapp call to Api google (see in google cloud) -> return the "Code" and save window.local.href


B2. Use "Code" to call Indentiy Service via Controller Layer-> Service-Repo
    + Set uri to authenticate that  is a public enpoint 

B3. In Service , call to API Google to get the parameters( include accestoken)
    + Thiet lap cac property of object (google) to  my instance 

B4. Return accestoken to web-app , and save LocalStore to used.


# Onboard User
B1. Trong qua trinh outboundAuthenticate, ngay sau khi gui exchangeToken, Ta se lay token do

B2. Dua vao token, ta tiep tuc goi API cua google, de lay userInfo tu phia google.
    + Khai bao 1 OutboundUserClient de thuc hien call sang google
    + Cac thuoc tinh khai bao cho respone duoc thiet lap theo doi tuong json duoc tra ve tu phia API
    

B3. Kiem tra user da ton tai trong database cua he thong hien tai
Neu chua co se insert vao, con neu co roi se khong lam gi ca
    + map cac truong can thiet de thuc hien viec insert


 # Get infor of user from current Application, not Google

 B1. Khi nhan button login with username, password, web-app se thuc hien call to api "getToken" cua identity service

 B2. Voi response phan hoi tu phia service, ta lay ra token va luu xuong LocalStore.

 B3. Dieu huong trang login ve trang "Home"


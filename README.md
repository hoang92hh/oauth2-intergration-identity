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


 # Get infor of user from current Application, not Google account

 B1. Khi nhan button login with username, password, web-app se thuc hien call to api "getToken" cua identity service.
 B1.2 Trong truong hop xac thuc bang Google,  Sau khi Onboard User tao se su dung user nay lam tham so de get token tu identity.
    Voi phuong thuc var token = generateToke(user).
    Tra token cua identiy cho phia FE.

 B2. Voi response phan hoi tu phia service, ta lay ra token va luu xuong LocalStore.

 B3. Dieu huong trang login ve trang "Home"

 *Nhu vay la token cua google chi dong vai tro cho ta lay user infomation trong google
 *Phia FE chi luu gia tri "Code" , voi moi nghiep vu lien quan den google se gui ma "Code" de lay google token va thuc hien cac API khac lien quan den google
 *Ta se van lam viec voi he thong cua Application voi identiy token.
 *Tranh truong hop call google token qua nhieu, viec su dung bean cho mot lop static de luu tru trong sever java la 1 giai phap


# Create password to login not use google.
B1. Xay dung 1 component SnackBar to user input password for google account

B2. Xay dung 1 enpoint trong UserController to create password for new account from google

* De phan biet duoc account login la noi bo hay tu google can 1 truong du lieu xac minh 
* Trong khi lay UserInfo, thiet lap them 1 truogn du lieu la "setNoPassword" 
 neu password is null thi "setNoPassword"  is false, qua do de bat tat SnackBar o FE




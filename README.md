# oauth2-integration-identity
Identity service that could integrate with Oauth2 seamlessly

# process -authorization:

B1. webapp call to Api google (see in google cloud) -> return the "Code" and save window.local.href


B2. Use "Code" to call Indentiy Service via Controller Layer-> Service-Repo
    + Set uri to authenticate that  is a public enpoint 

B3. In Service , call to API Google to get the parameters( include accestoken)
    + Thiet lap cac property of object (google) to  my instance 

B4. Return accestoken to web-app , and save LocalStore to used.

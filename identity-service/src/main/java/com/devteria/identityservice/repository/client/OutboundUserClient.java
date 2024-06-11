package com.devteria.identityservice.repository.client;


import com.devteria.identityservice.dto.response.client.OutboundUserResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

/*
* This is bean call to API of Google
* Kiem tra API de xem cac argument duoc truyen cho function
*
* Ban dau hay tra ve lop Object cho response, sau do log chung o service va thiet ket Class cho response
* */

@FeignClient(name = "outbound-user-client", url = "https://www.googleapis.com")
public interface OutboundUserClient {
    @GetMapping(value = "/oauth2/v1/userinfo")
    OutboundUserResponse getUserInfo(@RequestParam("alt") String alt,
                                     @RequestParam("access_token") String accessToken);
}

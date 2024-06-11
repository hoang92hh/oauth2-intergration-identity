package com.devteria.identityservice.dto.response.client;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

/*
Ban dau khi xay dung class nay, chung ta se chua the khai bao duoc cac property cua Response
De xac dinh duoc cac thuoc tinh, ta can thu goi API cua google, Doi tuong don nhan la 1 Object
Sau do console log de xem cac thuoc tinh can xay dung.

@JsonNaming phuc vu bien cac thuoc tinh trong class Java (ten CamelCase)
thanh cac thuoc tinh co dinh dang SnakeCase khi tuong tang voi cac bien tu API tra ve tu google


 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ExchangeTokenResponse {
    String accessToken;
    Long expiresIn;
    String refreshToken;
    String scope;
    String tokenType;
}

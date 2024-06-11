package com.devteria.identityservice.dto.request.client;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;

import lombok.*;
import lombok.experimental.FieldDefaults;

/*@JsonNaming phuc vu bien cac thuoc tinh trong class Java (ten CamelCase)
thanh cac thuoc tinh co dinh dang SnakeCase khi tuong tang voi cac bien tu API tra ve tu google */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ExchangeTokenRequest {
    String code;
    String clientId;
    String clientSecret;
    String redirectUri;
    String grantType;
}

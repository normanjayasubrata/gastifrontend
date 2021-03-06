const jwt = require("jsonwebtoken");
const { getToken } = require("./token");

export const getAccountType = () => {
  let token = getToken();
//   let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTU2MTM3ODQsImlhdCI6MTU5MzAyMTc4NCwidmVyc2lvbiI6MSwiYWNjb3VudF9pZCI6MywiYWNjb3VudF91c2VybmFtZSI6Iis2MjgxMjEyMzQ1Njc4MCIsImFjY291bnRfdHlwZSI6IlVTQUhBIiwiYWNjb3VudF9yb2xlIjoiQURNSU4ifQ.O19JML1nkUrZPmqDMN0NPlPcoPM1LeG9hctA7VEOur4ameId5rEtyee1pdkgEx07JZrt9Km2lW6-zh_Grvt3AyHN0XOoLEk5yferJAb6q1FsQ-a7S6dYg-1avpymmR9o91lKrQW5QwEjLFk15MBPnGHKCe5ddIsU8_SoNCCxF6zkFQ0wMpKbAtgjTRsiyknb7ViAvHkiLG_bnEQNQU-HrnSVTfpfqPpRgM6FOjNDCj5gMl_CpEXKQ0CyIpfgxv4hpKJABuoDA_XS50AEvGBe3u3ttK_tW58d43eDGqlh_yZnGWmnyCqptv5zMs6mm2TFNmL6uGja7vO5cEFejlZlwA";

  let tokenDecode = jwt.decode(token);

  if (tokenDecode && tokenDecode.account_type) {
        return tokenDecode.account_type
  } else {
    return null;
  }


};

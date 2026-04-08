'use client';

import { FC, useCallback, useEffect } from "react";
import { Account } from "@/components/common/icons";
import { IconButton } from "@/components/common";
import { useLazyQuery } from "@apollo/client/react";
import { LOGIN } from "@/lib/documents/users";
import { setAuthBearerToken } from "@/lib/api/token";

const AccountButton: FC = () => {
  //? This login is temporary. Should design its own page
  //? This is only test login
  const [login, { data, dataState }] = useLazyQuery(LOGIN, {
    fetchPolicy: "network-only",
  });

  const onLogin = useCallback(() => {
    login({
      variables: {
        input: {
          username: 'test',
          password: 'testers123'
        },
      },
    })
  }, [login]);

  useEffect(() => {
    if(dataState === 'complete' && data) {
      const { token } = data.login;

      const storeToken = async () => {
        await setAuthBearerToken(token);
      };

      storeToken();
    }
  }, [dataState, data]);

  return <IconButton icon={Account} onClick={onLogin} />;
}

export default AccountButton;
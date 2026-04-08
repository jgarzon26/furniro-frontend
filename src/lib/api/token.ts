'use server';

import { cookies } from "next/headers";

const TOKEN_KEY = 'token';

//TODO: inform gql to add expire time

export const setAuthBearerToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_KEY, token, { secure: true, httpOnly: true, });
  return true;
}

export const getAuthBearerToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(TOKEN_KEY);
  return `Bearer ${token?.value}`;
}

export const deleteAuthBearerToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_KEY);
  return true;
}
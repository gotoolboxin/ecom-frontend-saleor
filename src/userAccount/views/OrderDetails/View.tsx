import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Loader } from "@components/atoms";
import { useOrderDetails, useUserDetails } from "@saleor/sdk";

import { useLocale } from "@temp/@next/hooks";
import Page from "./Page";

const View: React.FC<RouteComponentProps<{ token?: string }>> = ({
  match: {
    params: { token },
  },
}) => {
  const { locale } = useLocale();
  const { data: order, loading } = useOrderDetails({
    locale: locale.toUpperCase(),
    token,
  });
  const { data: user } = useUserDetails();
  const guest = !user;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="order-details container">
      <Page guest={guest} order={order} />
    </div>
  );
};

export default View;

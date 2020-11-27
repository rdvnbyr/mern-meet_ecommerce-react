import React from 'react';
import { css } from "@emotion/core";
import {ClipLoader} from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


export function ReactSpinnerLoading({
    size
}) {
    return (
        <div>
            <ClipLoader
                css={override}
                size={size}
                color={"#123abc"}
            />
        </div>
    )
};

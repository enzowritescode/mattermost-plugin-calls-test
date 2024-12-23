// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {CSSProperties} from 'react';

type Props = {
    className?: string,
    fill?: string,
    style?: CSSProperties,
}

export default function HorizontalDotsIcon(props: Props) {
    return (
        <svg
            style={props.style}
            className={props.className}
            fill={props.fill}
            viewBox='2.01 6.51 11.99 2.99'
            role='img'
        >
            <path d='M11.006 7.9998C11.006 7.5918 11.15 7.2438 11.438 6.9558C11.738 6.6558 12.092 6.5058 12.5 6.5058C12.908 6.5058 13.256 6.6558 13.544 6.9558C13.844 7.2438 13.994 7.5918 13.994 7.9998C13.994 8.4078 13.844 8.7618 13.544 9.0618C13.256 9.3498 12.908 9.4938 12.5 9.4938C12.092 9.4938 11.738 9.3498 11.438 9.0618C11.15 8.7618 11.006 8.4078 11.006 7.9998ZM6.506 7.9998C6.506 7.5918 6.65 7.2438 6.938 6.9558C7.238 6.6558 7.592 6.5058 8 6.5058C8.408 6.5058 8.756 6.6558 9.044 6.9558C9.344 7.2438 9.494 7.5918 9.494 7.9998C9.494 8.4078 9.344 8.7618 9.044 9.0618C8.756 9.3498 8.408 9.4938 8 9.4938C7.592 9.4938 7.238 9.3498 6.938 9.0618C6.65 8.7618 6.506 8.4078 6.506 7.9998ZM2.006 7.9998C2.006 7.5918 2.15 7.2438 2.438 6.9558C2.738 6.6558 3.092 6.5058 3.5 6.5058C3.908 6.5058 4.256 6.6558 4.544 6.9558C4.844 7.2438 4.994 7.5918 4.994 7.9998C4.994 8.4078 4.844 8.7618 4.544 9.0618C4.256 9.3498 3.908 9.4938 3.5 9.4938C3.092 9.4938 2.738 9.3498 2.438 9.0618C2.15 8.7618 2.006 8.4078 2.006 7.9998Z'/>
        </svg>
    );
}
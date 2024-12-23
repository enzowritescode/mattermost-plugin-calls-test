// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {CSSProperties} from 'react';

type Props = {
    className?: string,
    fill?: string,
    style?: CSSProperties,
}

export default function SettingsWheelIcon(props: Props) {
    return (
        <svg
            style={props.style}
            className={props.className}
            fill={props.fill}
            viewBox='0.71 0.49 14.6 15.01'
            role='img'
        >
            <path d='M13.58 8.73805C13.58 8.67805 13.586 8.59405 13.598 8.48605C13.622 8.27005 13.634 8.10805 13.634 8.00005C13.634 7.88005 13.622 7.70605 13.598 7.47805L13.58 7.26205L15.164 6.02005C15.224 5.96005 15.266 5.88805 15.29 5.80405C15.314 5.72005 15.302 5.63605 15.254 5.55205L13.742 2.96005C13.67 2.82805 13.562 2.76205 13.418 2.76205L13.292 2.78005L11.42 3.53605C11.048 3.24805 10.628 3.00205 10.16 2.79805L9.872 0.818049C9.86 0.722048 9.818 0.644048 9.746 0.584048C9.674 0.524048 9.59 0.494048 9.494 0.494048H6.506C6.41 0.494048 6.326 0.524048 6.254 0.584048C6.194 0.644048 6.152 0.722048 6.128 0.818049L5.84 2.79805C5.432 2.97805 5.012 3.22405 4.58 3.53605L2.708 2.78005L2.582 2.76205C2.438 2.76205 2.33 2.82805 2.258 2.96005L0.764 5.55205C0.716 5.63605 0.698 5.72005 0.71 5.80405C0.734 5.88805 0.782 5.96005 0.854 6.02005L2.42 7.26205C2.396 7.57405 2.384 7.81405 2.384 7.98205C2.384 8.15005 2.396 8.38405 2.42 8.68405V8.73805L0.854 9.98005C0.782 10.028 0.734 10.1 0.71 10.196C0.698 10.28 0.716 10.364 0.764 10.448L2.258 13.04C2.33 13.172 2.438 13.238 2.582 13.238L2.708 13.22L4.58 12.464C4.952 12.752 5.372 12.998 5.84 13.202L6.128 15.182C6.152 15.278 6.194 15.356 6.254 15.416C6.326 15.476 6.41 15.506 6.506 15.506H9.494C9.59 15.506 9.674 15.476 9.746 15.416C9.818 15.356 9.86 15.278 9.872 15.182L10.16 13.202C10.568 13.022 10.988 12.776 11.42 12.464L13.292 13.22L13.418 13.238C13.562 13.238 13.67 13.172 13.742 13.04L15.254 10.448C15.302 10.364 15.314 10.28 15.29 10.196C15.266 10.112 15.224 10.04 15.164 9.98005L13.58 8.73805ZM12.086 7.46005C12.11 7.60405 12.122 7.78405 12.122 8.00005C12.122 8.08405 12.116 8.22205 12.104 8.41405L11.978 9.38605L12.644 9.92605L13.454 10.556L12.932 11.456L11.978 11.078L11.204 10.754L10.52 11.276C10.232 11.504 9.92 11.684 9.584 11.816L8.792 12.14L8.684 12.986L8.522 13.994H7.478L7.208 12.14L6.416 11.816C6.128 11.708 5.822 11.528 5.498 11.276L4.814 10.754L3.068 11.456L2.546 10.556L4.022 9.40405L3.914 8.55805L3.896 8.41405C3.884 8.21005 3.878 8.07205 3.878 8.00005C3.878 7.91605 3.884 7.77205 3.896 7.56805L4.022 6.59605L2.546 5.44405L3.068 4.54405L4.022 4.92205L4.796 5.24605L5.48 4.72405C5.816 4.48405 6.128 4.30405 6.416 4.18405L7.208 3.86005L7.478 2.00605H8.522L8.666 3.01405L8.774 3.86005L9.584 4.18405C9.872 4.30405 10.178 4.47805 10.502 4.70605L11.186 5.24605L12.932 4.52605L13.454 5.44405L11.978 6.59605L12.086 7.46005ZM8 4.99405C7.46 4.99405 6.956 5.13205 6.488 5.40805C6.032 5.67205 5.666 6.03805 5.39 6.50605C5.126 6.96205 4.994 7.46005 4.994 8.00005C4.994 8.54005 5.126 9.04405 5.39 9.51205C5.666 9.96805 6.032 10.334 6.488 10.61C6.956 10.874 7.46 11.006 8 11.006C8.54 11.006 9.038 10.874 9.494 10.61C9.962 10.334 10.328 9.96805 10.592 9.51205C10.868 9.04405 11.006 8.54005 11.006 8.00005C11.006 7.46005 10.868 6.96205 10.592 6.50605C10.328 6.03805 9.962 5.67205 9.494 5.40805C9.038 5.13205 8.54 4.99405 8 4.99405ZM8 9.49405C7.592 9.49405 7.238 9.35005 6.938 9.06205C6.65 8.76205 6.506 8.40805 6.506 8.00005C6.506 7.58005 6.65 7.22605 6.938 6.93805C7.238 6.65005 7.592 6.50605 8 6.50605C8.42 6.50605 8.774 6.65005 9.062 6.93805C9.35 7.22605 9.494 7.58005 9.494 8.00005C9.494 8.40805 9.35 8.76205 9.062 9.06205C8.774 9.35005 8.42 9.49405 8 9.49405Z'/>
        </svg>
    );
}

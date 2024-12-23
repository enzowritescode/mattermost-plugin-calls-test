// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {CSSProperties} from 'react';

type Props = {
    className?: string,
    fill?: string,
    style?: CSSProperties,
}

export default function MonitorAccount({fill, style, className, ...rest}: Props) {
    return (
        <svg
            viewBox='0.76 0.49 16.49 15.01'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            className={className}
            style={style}
            fill={fill}
            {...rest}
        >
            <path d='M15.75 0.494048C16.146 0.494048 16.488 0.632048 16.776 0.908049C17.064 1.17205 17.22 1.49605 17.244 1.88005V11.006C17.244 11.39 17.106 11.732 16.83 12.032C16.566 12.32 16.242 12.476 15.858 12.5H10.494V13.994H12.006V15.506H5.994V13.994H7.506V12.5H2.25C1.854 12.5 1.512 12.368 1.224 12.104C0.936 11.828 0.78 11.498 0.756 11.114V2.00605C0.756 1.59805 0.888 1.25605 1.152 0.980049C1.416 0.692048 1.746 0.530048 2.142 0.494048H15.75ZM15.75 2.00605H2.25V11.006H15.75V2.00605ZM9 7.24405C9.54 7.24405 10.038 7.31605 10.494 7.46005C10.962 7.59205 11.328 7.77205 11.592 8.00005C11.868 8.22805 12.006 8.48005 12.006 8.75605V9.49405H5.994V8.75605C5.994 8.48005 6.126 8.22805 6.39 8.00005C6.666 7.77205 7.032 7.59205 7.488 7.46005C7.956 7.31605 8.46 7.24405 9 7.24405ZM9 3.50005C9.42 3.50005 9.774 3.64405 10.062 3.93205C10.35 4.22005 10.494 4.57405 10.494 4.99405C10.494 5.41405 10.344 5.77405 10.044 6.07405C9.756 6.36205 9.402 6.50605 8.982 6.50605C8.574 6.50605 8.226 6.36205 7.938 6.07405C7.65 5.77405 7.506 5.41405 7.506 4.99405C7.506 4.57405 7.65 4.22005 7.938 3.93205C8.226 3.64405 8.58 3.50005 9 3.50005Z'/>
        </svg>
    );
}
